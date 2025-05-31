import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateBankAccountDto } from './dto/create-bank-account.dto';
import { UpdateBankAccountDto } from './dto/update-bank-account.dto';
import { DatabaseService } from 'src/database/database.service';
import { generateBankAccountCode } from 'src/utils/create-bankcode.util';

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

    // Check if the contract exists, if provided
    if (createBankAccountDto.contractId) {
      const contractExists =
        await this.databaseService.accountContract.findUnique({
          where: { id: createBankAccountDto.contractId },
        });
      if (!contractExists) {
        throw new NotFoundException('Contract not found');
      }
    }

    // Create a new bank account code
    let accountCode: string;

    // Keep trying until we generate a code that doesn't exist
    while (true) {
      const candidate = generateBankAccountCode();
      const existing = await this.databaseService.bankAccount.findUnique({
        where: { accountCode: candidate },
      });
      if (!existing) {
        accountCode = candidate;
        break;
      }
    }

    // Create a new bank account
    return await this.databaseService.bankAccount.create({
      data: {
        ...createBankAccountDto,
        accountCode,
      },
    });
  }

  async findAll() {
    const bankAccounts = await this.databaseService.bankAccount.findMany({
      include: {
        contract: true,
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
        contract: true,
      },
    });

    if (!bankAccount) {
      throw new NotFoundException('Bank account not found');
    }

    return bankAccount;
  }

  async update(id: string, updateBankAccountDto: UpdateBankAccountDto) {
    try {
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
    } catch (error) {
      // Handle specific prisma errors
      if (error.code === 'P2002') {
        throw new ConflictException('Account number already exists');
      } else if (error.code === 'P2025') {
        throw new NotFoundException('Client or contract not found');
      } else {
        throw new BadRequestException('An unexpected error occurred');
      }
    }
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
