import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateBankAccountDto } from './dto/create-bank-account.dto';
import { UpdateBankAccountDto } from './dto/update-bank-account.dto';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class BankAccountService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createBankAccountDto: CreateBankAccountDto) {
    try {
      // Create a new bank account
      const { contract: accountContractDto, ...bankAccountDto } =
        createBankAccountDto;

      // Make sure the account contract is created with the bank account
      return await this.databaseService.$transaction(async (prisma) => {
        const newBankAccount = await prisma.bankAccount.create({
          data: { ...bankAccountDto },
        });

        const newAccountContract = await prisma.accountContract.create({
          data: {
            ...accountContractDto,
            bankAccountId: newBankAccount.id,
          },
        });

        return {
          ...newBankAccount,
          contract: newAccountContract,
        };
      });
    } catch (error) {
      // Handle specific prisma errors
      if (error.code === 'P2002') {
        throw new ConflictException('Account number already exists');
      } else if (error.code === 'P2025') {
        throw new NotFoundException('Client not found');
      } else {
        throw new BadRequestException('An unexpected error occurred');
      }
    }
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
      const { contract: contractUpdateDto, ...bankAccountUpdateDto } =
        updateBankAccountDto;

      return this.databaseService.$transaction(async (prisma) => {
        // Update the bank account
        const updatedBankAccount = await prisma.bankAccount.update({
          where: { id },
          data: { ...bankAccountUpdateDto },
        });

        // Update the account contract
        const updatedContract = await prisma.accountContract.update({
          where: { bankAccountId: id },
          data: { ...contractUpdateDto },
        });

        return {
          ...updatedBankAccount,
          contract: updatedContract,
        };
      });
    } catch (error) {
      // Handle specific prisma errors
      if (error.code === 'P2002') {
        throw new ConflictException('Account number already exists');
      } else if (error.code === 'P2025') {
        throw new NotFoundException('Client not found');
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
