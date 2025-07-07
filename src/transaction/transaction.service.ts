import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { ClassifyBatchDto } from './dto/classify-batch.dto';
// import { TransactionType } from './types/transaction.dt';
import * as csv from 'csv-parser';
import * as streamifier from 'streamifier';
import * as fastcsv from 'fast-csv';
import * as ExcelJS from 'exceljs';
import * as streamBuffers from 'stream-buffers';
import { CleanerService } from './services/cleaner/cleaner.service';
import { ReconstructorService } from './services/reconstructor/reconstructor.service';
import { DatabaseService } from 'src/database/database.service';
import { ClassifierService } from './services/classifier/classifier.service';
import { ValidatorService } from './services/validator/validator.service';
import { TransactionType } from '@prisma/client';

@Injectable()
export class TransactionService {
  constructor(
    private readonly databaseService: DatabaseService,
    private readonly cleanerService: CleanerService,
    private readonly reconstructorService: ReconstructorService,
    private readonly classifierService: ClassifierService,
    private readonly validatorService: ValidatorService,
  ) {}

  async findAll(
    accountId: string,
    query: {
      from?: string;
      to?: string;
      classificationId?: string;
      limit?: number;
      page?: number;
    },
  ) {
    const { from, to, classificationId, limit = 50, page = 1 } = query;

    const skip = (page - 1) * limit;

    const [transactions, total] = await this.databaseService.$transaction([
      this.databaseService.bankTransaction.findMany({
        where: {
          bankAccountId: accountId,
          ...(from && { date: { gte: new Date(from) } }),
          ...(to && { date: { lte: new Date(to) } }),
          ...(classificationId && { classificationId }),
        },
        skip,
        take: limit,
        orderBy: { valueDate: 'desc' },
      }),
      this.databaseService.bankTransaction.count({
        where: {
          bankAccountId: accountId,
          ...(from && { date: { gte: new Date(from) } }),
          ...(to && { date: { lte: new Date(to) } }),
          ...(classificationId && { classificationId }),
        },
      }),
    ]);

    if (!transactions || transactions.length === 0) {
      throw new NotFoundException('No transactions found for this account');
    }

    return {
      data: transactions,
      meta: {
        total,
        page,
        limit,
        pages: Math.ceil(total / limit),
      },
    };
  }

  async findOne(id: string) {
    const transaction = await this.databaseService.bankTransaction.findUnique({
      where: { id },
    });

    if (!transaction) {
      throw new NotFoundException(`Transaction with id ${id} not found`);
    }

    return transaction;
  }

  async update(id: string, updateTransactionDto: UpdateTransactionDto) {
    // Check if transaction exists
    const transaction = await this.databaseService.bankTransaction.findUnique({
      where: { id },
    });

    // If not found, throw an exception
    if (!transaction) {
      throw new NotFoundException(`Transaction with id ${id} not found`);
    }

    // Remove undefined fields from DTO
    const cleanDto = Object.fromEntries(
      Object.entries(updateTransactionDto).filter(([_, v]) => v !== undefined),
    );

    // Update the transaction
    return await this.databaseService.bankTransaction.update({
      where: { id },
      data: cleanDto,
    });
  }

  async remove(id: string) {
    // Check if transaction exists
    const transaction = await this.databaseService.bankTransaction.findUnique({
      where: { id },
    });

    // If not found, throw an exception
    if (!transaction) {
      throw new NotFoundException(`Transaction with id ${id} not found`);
    }

    return await this.databaseService.bankTransaction.delete({
      where: { id },
    });
  }

  async uploadAndProcess(
    accountId: string,
    file: Express.Multer.File,
  ): Promise<any> {
    // This method should handle the file upload and processing logic
    if (!file) {
      throw new Error('File not provided');
    }

    // Get the bank id from the accountId
    const bankAccount = await this.databaseService.bankAccount.findUnique({
      where: { id: accountId },
      include: { bank: true },
    });

    if (!bankAccount) {
      throw new NotFoundException('Bank account not found');
    }

    const bankId = bankAccount.bank.id;

    // Here you can add your logic to handle the file upload
    const parsedRows = await new Promise<TransactionType[]>(
      (resolve, reject) => {
        const rows: TransactionType[] = [];

        streamifier
          .createReadStream(file.buffer)
          .pipe(csv())
          .on('data', (row: TransactionType) => rows.push(row))
          .on('end', () => resolve(rows))
          .on('error', reject);
      },
    );

    // Clean transactions rows, standardize dates, and parse amounts
    const cleanedRows = await this.cleanerService.clean(parsedRows);

    // Reconstruct transactions into pairs based on various criteria
    const reconstructedRows = await this.reconstructorService.reconstruct(
      bankId,
      cleanedRows,
    );

    // Classify transactions based on their descriptions and types
    const classifiedRows = await this.classifierService.classifyTransactions(
      reconstructedRows,
      accountId,
    );

    // Validate the balance flow of the transactions
    const validatedRows =
      await this.validatorService.validateBalanceFlow(classifiedRows);

    return {
      message: 'File uploaded and processed successfully',
      data: validatedRows,
    };
  }

  async createTransctions(
    accountId: string,
    uploadedById: string,
    transactions: CreateTransactionDto[],
  ): Promise<any> {
    // This method should handle creating transactions in the database
    const createdTransactions =
      await this.databaseService.bankTransaction.createMany({
        data: transactions.map((transaction) => ({
          bankAccountId: accountId,
          // Map fields from your transaction to the expected DB fields
          // Adjust these mappings as per your BankTransactionCreateManyInput definition
          uploadedById: uploadedById,
          transactionDate: transaction.transactionDate
            ? new Date(transaction.transactionDate)
            : new Date(),
          valueDate: transaction.valueDate
            ? new Date(transaction.valueDate)
            : new Date(),
          amount: transaction.amount
            ? parseFloat(transaction.amount.toString())
            : 0,
          description: transaction.description,
          tellerNo: transaction.tellerNo,
          chequeNo: transaction.chequeNo,
          balance: transaction.balance
            ? parseFloat(transaction.balance.toString())
            : 0,
          type: transaction.type,
          classificationId: transaction.classificationId,
        })),
      });

    return {
      message: 'Transactions created successfully',
      data: createdTransactions,
    };
  }

  async batchClassify(dto: ClassifyBatchDto): Promise<any> {
    const transactionIds = dto.items.map((item) => item.transactionId);
    const classificationIds = [
      ...new Set(dto.items.map((item) => item.classificationId)),
    ];

    await this.validateTransactionIds(transactionIds);
    await this.validateClassificationIds(classificationIds);

    return Promise.all(
      dto.items.map((item) =>
        this.databaseService.bankTransaction.update({
          where: { id: item.transactionId },
          data: { classificationId: item.classificationId },
        }),
      ),
    );
  }

  async exportTransactions(
    accountId: string,
    format: 'csv' | 'xlsx',
  ): Promise<Buffer> {
    const transactions = await this.databaseService.bankTransaction.findMany({
      where: { bankAccountId: accountId },
      include: {
        bankAccount: true,
        classification: true,
      },
      orderBy: { transactionDate: 'asc' },
    });

    if (!transactions || transactions.length === 0) {
      throw new NotFoundException('No transactions found for this account');
    }

    const rows = transactions.map((txn, index) => ({
      No: (index + 1).toString(),
      'Classification Code': txn.classification?.code || 'null',
      Date: txn.transactionDate.toISOString().split('T')[0],
      'Value Date': txn.valueDate.toISOString().split('T')[0],
      Description: txn.description,
      Reference: txn.reference || 'Nil',
      'Cheque No': txn.chequeNo || 'Nil',
      'Teller No': txn.tellerNo || 'Nil',
      Debit:
        txn.type === TransactionType.DEBIT ? txn.amount.toFixed(2) : '0.00',
      Credit:
        txn.type === TransactionType.CREDIT ? txn.amount.toFixed(2) : '0.00',
      'Current Balance': txn.balance?.toFixed(2) || '0.00',
    }));

    if (format === 'csv') {
      const writable = new streamBuffers.WritableStreamBuffer();
      await new Promise<void>((resolve, reject) => {
        fastcsv
          .write(rows, { headers: true })
          .on('error', reject)
          .on('finish', resolve)
          .pipe(writable);
      });
      return writable.getContents() as Buffer;
    }

    // XLSX
    const workbook = new ExcelJS.Workbook();
    const sheet = workbook.addWorksheet('Transactions');
    sheet.columns = Object.keys(rows[0]).map((key) => ({ header: key, key }));

    rows.forEach((row) => {
      sheet.addRow(row);
    });

    const xlsxBuffer = await workbook.xlsx.writeBuffer();
    return Buffer.from(xlsxBuffer);
  }

  private async validateTransactionIds(ids: string[]): Promise<void> {
    const found = await this.databaseService.bankTransaction.findMany({
      where: { id: { in: ids } },
      select: { id: true },
    });

    const foundSet = new Set(found.map((tx) => tx.id));
    const missing = ids.filter((id) => !foundSet.has(id));

    if (missing.length) {
      throw new NotFoundException(
        `Transaction(s) not found: ${missing.join(', ')}`,
      );
    }
  }

  private async validateClassificationIds(ids: string[]): Promise<void> {
    const found = await this.databaseService.transactionClassification.findMany(
      {
        where: { id: { in: ids } },
        select: { id: true },
      },
    );

    const foundSet = new Set(found.map((cls) => cls.id));
    const missing = ids.filter((id) => !foundSet.has(id));

    if (missing.length) {
      throw new NotFoundException(
        `Classification(s) not found: ${missing.join(', ')}`,
      );
    }
  }
}
