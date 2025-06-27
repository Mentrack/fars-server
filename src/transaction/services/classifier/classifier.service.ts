import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import * as stringSimilarity from 'string-similarity';

@Injectable()
export class ClassifierService {
  private classifications: any[] = [];
  constructor(private readonly databaseService: DatabaseService) {}

  async onModuleInit() {
    this.classifications =
      await this.databaseService.transactionClassification.findMany();
  }

  private async getDefaultClassificationId(
    type: 'credit' | 'debit',
  ): Promise<string | null> {
    const code = type === 'credit' ? 'CD' : 'CW';

    const classification = await this.classifications.find(
      (c) => c.code === code,
    );

    return classification?.code || null;
  }

  private async classifyTransaction(
    transaction: any,
    patterns: any[],
  ): Promise<string | null> {
    for (const pattern of patterns) {
      const keyword = pattern.keyword.toLowerCase();
      const desc = transaction.description.toLowerCase();

      // If isReversal = true
      if (
        transaction.isReversal &&
        transaction.type.toLowerCase() === 'credit'
      ) {
        const classification = this.classifications.find(
          (c) => c.code === 'REV',
        );
        if (classification) return classification.code;
      } else if (
        transaction.isReversal &&
        transaction.type.toLowerCase() === 'debit'
      ) {
        return 'RVD';
        // const classification = this.classifications.find(
        //   (c) => c.code === 'RVD',
        // );
        // if (classification) return classification.code;
      }

      // Match regex pattern
      if (pattern.isRegex) {
        const regex = new RegExp(keyword, 'i');
        if (regex.test(desc)) return pattern.classification.code;
      }

      // Match exact or fuzzy keyword
      if (desc.includes(keyword)) {
        return pattern.classification.code;
      }

      // Fallback fuzzy match
      const sim = stringSimilarity.compareTwoStrings(desc, keyword);
      if (sim > 0.85) {
        return pattern.classification.code;
      }
    }

    // 🚨 No match — fetch fallback classification
    return await this.getDefaultClassificationId(
      transaction.type.toLowerCase() as 'credit' | 'debit',
    );
  }

  /**
   * Classifies a list of transactions based on their descriptions and types.
   * @param transactions - Array of transaction objects to classify.
   * @param bankId - The ID of the bank to filter classification patterns.
   * @returns An array of classified transactions with classification IDs.
   */
  async classifyTransactions(
    transactions: any[],
    bankId: string,
  ): Promise<any[]> {
    if (!transactions || transactions.length === 0) {
      return [];
    }
    const patterns = await this.databaseService.classificationPattern.findMany({
      where: {
        OR: [
          { bankId },
          { bankId: null }, // global
        ],
      },
      include: {
        classification: true,
      },
    });

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
