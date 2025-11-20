import {
  IsArray,
  IsNotEmpty,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { AnalysisTypeEnum } from '@prisma/client';

export class TransactionDto {
  @IsString()
  id: string;

  @IsString()
  description: string;

  @IsString()
  date: string;

  @IsString()
  type: 'DEBIT' | 'CREDIT';

  @IsNotEmpty()
  amount: number;

  @IsOptional()
  balance?: number;
}

export class AccountInputDto {
  @IsString()
  accountId: string;

  @IsString()
  accountName: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => TransactionDto)
  transactions: TransactionDto[];
}

export class PerformAnalysisDto {
  @ApiProperty({
    description: 'Type of analysis to perform',
    enum: AnalysisTypeEnum,
    example: 'CAMF',
    required: true,
  })
  @IsString()
  type: AnalysisTypeEnum; // Extendable

  @ApiProperty({
    description: 'List of account summaries to analyze',
    example: [
      '10edf8c2-3b4a-4d5e-8f6a-7b8c9d0e1f2g',
      '20edf8c2-3b4a-4d5e-8f6a-7b8c9d0e1f2h',
    ],
  })
  @IsArray()
  bankAccounts: string[];
}
