import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateBankAccountDto } from './dto/create-bank-account.dto';
import { UpdateBankAccountDto } from './dto/update-bank-account.dto';
import { DatabaseService } from 'src/database/database.service';
import { generateCode } from 'src/utils/create-code.util';

@Injectable()
export class BankAccountService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createBankAccountDto: CreateBankAccountDto) {
    // Check if the client exists
    const clientExists = await this.databaseService.client.findUnique({
      where: { id: createBankAccountDto.clientId },
    });

    if (!clientExists) {
      throw new NotFoundException('Client not found');
    }

    // Check if the bank exists
    const bankExists = await this.databaseService.bank.findUnique({
      where: { id: createBankAccountDto.bankId },
    });

    if (!bankExists) {
      throw new NotFoundException('Bank not found');
    }

    // Check if the rate exists, if provided
    if (createBankAccountDto.rateId) {
      const rateExists = await this.databaseService.accountRate.findUnique({
        where: { id: createBankAccountDto.rateId },
      });
      if (!rateExists) {
        throw new NotFoundException('Rate not found');
      }
    }

    // Create a new bank account code
    let code: string;

    // Keep trying until we generate a code that doesn't exist
    while (true) {
      const candidate = generateCode('BAC');
      const existing = await this.databaseService.bankAccount.findUnique({
        where: { code: candidate },
      });

      if (!existing) {
        code = candidate;
        break;
      }
    }

    // Check if the account number already exists in the same bank
    const existingAccount = await this.databaseService.bankAccount.findFirst({
      where: {
        accountNumber: createBankAccountDto.accountNumber,
        bankId: createBankAccountDto.bankId,
      },
    });

    if (existingAccount) {
      throw new ConflictException(
        'Account number already exists in the same bank',
      );
    }

    // Create a new bank account
    return await this.databaseService.bankAccount.create({
      data: {
        ...createBankAccountDto,
        code,
      },
    });
  }

  async findAll() {
    const bankAccounts = await this.databaseService.bankAccount.findMany({
      include: {
        rate: false,
        bank: false,
      },
    });

    if (!bankAccounts || bankAccounts.length === 0) {
      throw new NotFoundException('No bank accounts found');
    }

    return bankAccounts;
  }

  async findOne(id: string) {
    const bankAccount = await this.databaseService.bankAccount.findUnique({
      where: { id },
      include: {
        rate: true,
        bank: true,
      },
    });

    if (!bankAccount) {
      throw new NotFoundException('Bank account not found');
    }

    return bankAccount;
  }

  async update(id: string, updateBankAccountDto: UpdateBankAccountDto) {
    // Check if the bank account exists
    const existingBankAccount =
      await this.databaseService.bankAccount.findUnique({
        where: { id },
      });
    if (!existingBankAccount) {
      throw new NotFoundException('Bank account not found');
    }

    // Update the bank account
    return await this.databaseService.bankAccount.update({
      where: { id },
      data: { ...updateBankAccountDto },
    });
  }

  async remove(id: string) {
    try {
      return await this.databaseService.bankAccount.delete({
        where: { id },
      });
    } catch (error) {
      // Handle specific prisma errors
      if (error.code === 'P2025') {
        throw new NotFoundException('Bank account not found');
      } else {
        throw new BadRequestException('An unexpected error occurred');
      }
    }
  }
}
