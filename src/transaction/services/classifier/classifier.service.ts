import { Injectable, NotFoundException } from '@nestjs/common';
import { TransactionClassification } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
import * as stringSimilarity from 'string-similarity';
import { FuzzyMatcherService } from '../fuzzy-matcher/fuzzy-matcher.service';
import { TransactionClassificationType } from 'src/transaction/types/transaction.dt';

@Injectable()
export class ClassifierService {
  private accountName: string = '';
  private bankName: string = '';
  private classifications: any[] = [];
  private clientAccountNames: any[] = [];
  private knownBankNames: any[] = [];
  constructor(
    private readonly databaseService: DatabaseService,
    private readonly fuzzyMatcher: FuzzyMatcherService,
  ) {}

  async onModuleInit() {
    this.classifications =
      await this.databaseService.transactionClassification.findMany();
  }

  private async getDefaultClassificationId(
    transaction: any,
    clientAccountNames: string[],
    knownBankNames: string[],
  ): Promise<string | null> {
    const desc = transaction.description
      .toLowerCase()
      .replace(/[^a-z0-9\s]/gi, '');
    const type = transaction.type.toLowerCase();

    let classification: TransactionClassification | null = null;

    // ✅ 1. CREDIT transactions default to CD
    if (type === 'credit') {
      classification = this.classifications.find((c) => c.code === 'CD');
    }

    // ✅ 2. DEBIT transactions → Determine if IT or ET
    if (type === 'debit') {
      // 🔍 Step 1: Check if description mentions known bank names
      const mentionsBank = this.fuzzyMatcher.isBankMentioned(
        knownBankNames,
        desc,
      );

      if (mentionsBank.found) {
        return this.classifications.find((c) => c.code === 'ET')?.id || null;
      }

      // 🔍 Step 2: Check if current account is mentioned
      const currentAccountMentioned = this.fuzzyMatcher.isAccountNameMentioned(
        this.accountName,
        desc,
      );

      // 🔍 Step 3: Fuzzy match other client accounts in the description
      const fuzzyHits = await this.fuzzyMatcher.findSimilarAppearances(
        desc,
        this.clientAccountNames,
      );

      // ✅ Step 4: Check if other names are mention that don't belong to this client.
      const otherClientMentions = this.fuzzyMatcher.findOtherClientMentionsV2({
        description: transaction.description,
        clientAccountNames: [this.accountName, ...this.clientAccountNames],
        knownBankNames: [this.bankName, ...this.knownBankNames],
      });

      // ✅ Step 5: Apply your decision logic
      if (fuzzyHits.length >= 1) {
        if (fuzzyHits.length > 1) {
          classification = this.classifications.find((c) =>
            currentAccountMentioned ? c.code === 'IT' : c.code === 'ET',
          );
        } else if (currentAccountMentioned) {
          classification = this.classifications.find((c) =>
            otherClientMentions.found ? c.code === 'ET' : c.code === 'IT',
          );
        } else {
          classification = this.classifications.find((c) => c.code === 'ET');
        }
      } else {
        if (currentAccountMentioned) {
          classification = this.classifications.find((c) =>
            otherClientMentions.found ? c.code === 'ET' : c.code === 'IT',
          );
        } else {
          classification = this.classifications.find((c) => c.code === 'ET');
        }
      }
    }

    return classification?.id || null;
  }

  private async classifyTransaction(
    transaction: TransactionClassificationType,
    patterns: any[],
  ): Promise<string | null> {
    for (const pattern of patterns) {
      const keyword = pattern.keyword.toLowerCase();
      const desc = transaction.description.toLowerCase();

      // If isReversal = true
      if (transaction.isReversal) {
        const classification = this.classifications.find(
          (c) => c.code === 'REV',
        );
        if (classification) return classification.id;
      }

      // Match regex pattern
      if (pattern.isRegex) {
        const regex = new RegExp(keyword, 'i');
        if (regex.test(desc)) return pattern.classification.id;
      }

      // Match exact or fuzzy keyword
      if (desc.includes(keyword)) {
        if (pattern.classification.code === 'CAMF') {
          if (desc.includes('vat on'))
            return (
              this.classifications.find((c) => c.code === 'VC')?.id || null
            );
        }
        if (pattern.classification.code === 'FEE') {
          if (desc.includes('vat on'))
            return (
              this.classifications.find((c) => c.code === 'VF')?.id || null
            );
        } else if (
          pattern.classification.code === 'VF' ||
          pattern.classification.code === 'VC'
        ) {
          if (
            !desc.includes('fee') &&
            !desc.includes('cot') &&
            transaction.debit < 5000
          ) {
            return (
              this.classifications.find((c) => c.code === 'MC')?.id || null
            );
          }
        } else if (pattern.classification.code === 'VC') {
          if (
            desc.toLocaleLowerCase().includes('value added tax') &&
            transaction.debit < 5000
          ) {
            return (
              this.classifications.find((c) => c.code === 'MC')?.id || null
            );
          }
        }
        return pattern.classification.id;
      }

      // Fallback fuzzy match
      const sim = stringSimilarity.compareTwoStrings(desc, keyword);
      if (sim > 0.85) {
        return pattern.classification.id;
      }
    }

    // 🚨 No match — fetch fallback classification
    return await this.getDefaultClassificationId(
      transaction,
      this.clientAccountNames,
      this.knownBankNames,
    );
  }

  /**
   * Classifies a list of transactions based on their descriptions and types.
   * @param transactions - Array of transaction objects to classify.
   * @param bankId - The ID of the bank to filter classification patterns.
   * @returns An array of classified transactions with classification IDs.
   */
  async classifyTransactions(
    transactions: TransactionClassificationType[],
    accountId: string,
  ): Promise<any[]> {
    if (!transactions || transactions.length === 0) {
      return [];
    }

    const knownBanks = await this.databaseService.bank.findMany();
    const bankAccount = await this.databaseService.bankAccount.findUnique({
      where: {
        id: accountId,
      },
      include: { bank: true },
    });

    if (!bankAccount) {
      throw new NotFoundException(
        `Bank account with ID ${accountId} not found`,
      );
    }
    this.bankName = bankAccount.bank.name;
    this.accountName = bankAccount.accountName;
    const clientAccounts = await this.databaseService.bankAccount.findMany({
      where: {
        clientId: bankAccount.clientId,
        bankId: bankAccount.bankId,
      },
    });

    const patterns = await this.databaseService.classificationPattern.findMany({
      where: {
        OR: [
          { bankId: bankAccount.bankId },
          { bankId: null }, // global
        ],
      },
      include: {
        classification: true,
      },
    });

    this.clientAccountNames = clientAccounts
      .map((acc) => {
        if (acc.id !== bankAccount.id) {
          return acc.accountName?.toLowerCase();
        }
        return null;
      })
      .filter((name): name is string => Boolean(name)); // filter out null/undefined

    this.knownBankNames = knownBanks
      .map((bank) => {
        if (bankAccount.bankId !== bank.id) {
          return bank.name?.toLowerCase();
        }
        return null;
      })
      .filter((name): name is string => Boolean(name)); // filter out null/undefined

    const classified: any[] = [];

    for (const txn of transactions) {
      const classificationId = await this.classifyTransaction(txn, patterns);
      classified.push({
        ...txn,
        classificationId,
      });
    }

    return classified;
  }
}
