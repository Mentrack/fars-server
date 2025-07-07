import { Injectable, NotFoundException } from '@nestjs/common';
import {
  CreateReversalKeywordDto,
  FindAllKeywordsFilters,
} from './dto/create-reversal-keyword.dto';
import { UpdateReversalKeywordDto } from './dto/update-reversal-keyword.dto';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class ReversalKeywordService {
  constructor(private readonly databaseService: DatabaseService) {}
  async create(createReversalKeywordDto: CreateReversalKeywordDto) {
    // Check if the bank exists, if provided
    if (createReversalKeywordDto.bankId) {
      const bankExists = await this.databaseService.bank.findUnique({
        where: { id: createReversalKeywordDto.bankId },
      });

      if (!bankExists) {
        throw new NotFoundException('Bank not found');
      }
    }

    if (
      createReversalKeywordDto.isGlobal === undefined ||
      createReversalKeywordDto.isGlobal === false
    ) {
      // If isGlobal is false, ensure bankId is provided
      if (!createReversalKeywordDto.bankId) {
        throw new NotFoundException(
          'Bank ID must be provided for non-global keywords',
        );
      }
    }

    return this.databaseService.reversalKeyword.create({
      data: createReversalKeywordDto,
    });
  }

  async findAll(filters: FindAllKeywordsFilters) {
    const { bankId, isGlobal } = filters;

    const keywords = await this.databaseService.reversalKeyword.findMany({
      where: {
        isGlobal: isGlobal,
        bankId: bankId, // If bankId is not provided, it will be undefined
      },
    });

    return keywords;
  }

  async findOne(id: string) {
    const keyword = await this.databaseService.reversalKeyword.findUnique({
      where: { id },
    });

    if (!keyword) {
      throw new NotFoundException(`Reversal keyword with ID ${id} not found`);
    }

    return keyword;
  }

  async update(id: string, updateReversalKeywordDto: UpdateReversalKeywordDto) {
    const keyword = await this.databaseService.reversalKeyword.findUnique({
      where: { id },
    });

    if (!keyword) {
      throw new NotFoundException(`Reversal keyword with ID ${id} not found`);
    }

    return this.databaseService.reversalKeyword.update({
      where: { id },
      data: updateReversalKeywordDto,
    });
  }

  async remove(id: string) {
    const keyword = await this.databaseService.reversalKeyword.findUnique({
      where: { id },
    });

    if (!keyword) {
      throw new NotFoundException(`Reversal keyword with ID ${id} not found`);
    }

    return this.databaseService.reversalKeyword.delete({
      where: { id },
    });
  }
}
