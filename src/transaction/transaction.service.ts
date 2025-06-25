import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { ReclassifyTransactionDto } from './dto/reclassify-transaction.dto';
import { ClassifyBatchDto } from './dto/classify-batch.dto';
import { FlagTransactionDto } from './dto/flag-transaction.dto';
import { TransactionType } from './types/transaction.dt';
import * as csv from 'csv-parser';
import * as streamifier from 'streamifier';
import { CleanerService } from './services/cleaner/cleaner.service';
import { ReconstructorService } from './services/reconstructor/reconstructor.service';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class TransactionService {
  constructor(
    private readonly databaseService: DatabaseService,
    private readonly cleanerService: CleanerService,
    private readonly reconstructorService: ReconstructorService,
  ) {}

  async create(createTransactionDto: CreateTransactionDto) {
    return 'This action adds a new transaction';
  }

  async findAll(
    accountId: string,
    query: {
      from?: string;
      to?: string;
      classification?: string;
      flagged?: boolean;
    },
  ) {
    const { from, to, classification, flagged } = query;
    return `This action returns all transaction ${accountId} from ${from} to ${to} with classifications ${classification} and flagged ${flagged}`;
  }

  async findOne(id: string) {
    return `This action returns a #${id} transaction`;
  }

  async update(id: string, updateTransactionDto: UpdateTransactionDto) {
    return `This action updates a #${id} transaction`;
  }

  async remove(id: string) {
    return `This action removes a #${id} transaction`;
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

    return { message: 'File uploaded successfully' };
  }

  async reprocessTransactions(accountId: string): Promise<any> {
    // This method should handle reprocessing transactions for the given account
    return Promise.resolve(`Transactions reprocessed for account ${accountId}`);
  }

  async getAll(accountId: string, filters: any): Promise<any[]> {
    // This method should return all transactions for the given account with optional filters
    return Promise.resolve([
      { id: '1', accountId, ...filters },
      { id: '2', accountId, ...filters },
    ]);
  }

  async getRaw(accountId: string): Promise<any[]> {
    // This method should return raw transactions for the given account
    return Promise.resolve([
      { id: '1', accountId, raw: true },
      { id: '2', accountId, raw: true },
    ]);
  }

  async getFlags(accountId: string): Promise<any[]> {
    // This method should return flagged transactions for the given account
    return Promise.resolve([
      { id: '1', accountId, flagged: true },
      { id: '2', accountId, flagged: true },
    ]);
  }

  async getSingle(id: string): Promise<any> {
    // This method should return a single transaction by ID
    return Promise.resolve({
      id,
      accountId: '1',
      details: 'Transaction details',
    });
  }

  async reclassify(id: string, dto: ReclassifyTransactionDto): Promise<any> {
    // This method should handle reclassifying a transaction
    return Promise.resolve({ id, ...dto });
  }

  async batchClassify(dto: ClassifyBatchDto): Promise<any> {
    // This method should handle batch classifying transactions
    return Promise.resolve(dto);
  }

  async flagTransaction(id: string, dto: FlagTransactionDto): Promise<any> {
    // This method should handle flagging a transaction
    return Promise.resolve({ id, ...dto });
  }

  async unflagTransaction(id: string): Promise<any> {
    // This method should handle unflagging a transaction
    return Promise.resolve({ id });
  }

  async exportTransactions(accountId: string): Promise<Buffer | string> {
    // This method should handle exporting transactions for the given account
    return Promise.resolve(
      Buffer.from(`Exported transactions for account ${accountId}`),
    );
  }
}
