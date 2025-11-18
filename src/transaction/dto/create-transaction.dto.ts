import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { TransactionType } from '@prisma/client';
import { Type } from 'class-transformer';
import {
  IsArray,
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
  ValidateNested,
} from 'class-validator';

export class CreateTransactionDto {
  @ApiProperty({ example: '1' })
  @IsString()
  @IsNotEmpty()
  rowIndex: string;

  @ApiProperty({ example: '2022-01-01' })
  @IsString()
  transactionDate: string;

  @ApiProperty({ example: '2022-01-01' })
  @IsString()
  valueDate: string;

  @ApiProperty({ example: 'Transaction description' })
  @IsString()
  description: string;

  @ApiProperty({ example: 100.0 })
  @Type(() => Number)
  @IsNumber()
  amount: number;

  @ApiPropertyOptional({ example: '12345' })
  @IsOptional()
  @IsString()
  tellerNo?: string;

  @ApiPropertyOptional({ example: '67890' })
  @IsOptional()
  @IsString()
  chequeNo?: string;

  @ApiProperty({ example: 100.0 })
  @Type(() => Number)
  @IsNumber()
  debit: number;

  @ApiProperty({ example: 0.0 })
  @Type(() => Number)
  @IsNumber()
  credit: number;

  @ApiPropertyOptional({ example: '8977443322' })
  @IsOptional()
  @IsString()
  extractedReference?: string;

  @ApiPropertyOptional({ example: '1' })
  @IsOptional()
  @IsString()
  reversalPairIndex?: string;

  @ApiPropertyOptional({ example: true })
  @IsOptional()
  @IsBoolean()
  isReversal?: boolean;

  @ApiProperty({ example: 100.0 })
  @Type(() => Number)
  @IsNumber()
  balance: number;

  @ApiProperty({ example: 'CREDIT' })
  @IsString()
  type: TransactionType;

  @ApiPropertyOptional({ example: '0000654356' })
  @IsOptional()
  @IsString()
  reference?: string;

  @ApiProperty({ example: '123e4567-e89b-12d3-a456-426614174000' })
  @IsUUID()
  classificationId: string;
}

export class CreateTransactionResponseDto {
  @ApiProperty({ example: '1' })
  @IsString()
  @IsNotEmpty()
  rowIndex: string;

  @ApiProperty({ example: '2022-01-01' })
  @IsString()
  transactionDate: string;

  @ApiProperty({ example: '2022-01-01' })
  @IsString()
  valueDate: string;

  @ApiProperty({ example: 'Transaction description' })
  @IsString()
  description: string;

  @ApiProperty({ example: 100.0 })
  @Type(() => Number)
  @IsNumber()
  amount: number;

  @ApiPropertyOptional({ example: '12345' })
  @IsOptional()
  @IsString()
  tellerNo?: string;

  @ApiPropertyOptional({ example: '67890' })
  @IsOptional()
  @IsString()
  chequeNo?: string;

  @ApiProperty({ example: 100.0 })
  @Type(() => Number)
  @IsNumber()
  debit: number;

  @ApiProperty({ example: 0.0 })
  @Type(() => Number)
  @IsNumber()
  credit: number;

  @ApiPropertyOptional({ example: '8977443322' })
  @IsOptional()
  @IsString()
  extractedReference?: string;

  @ApiPropertyOptional({ example: '1' })
  @IsOptional()
  @IsString()
  reversalPairIndex?: string;

  @ApiPropertyOptional({ example: true })
  @IsOptional()
  @IsBoolean()
  isReversal?: boolean;

  @ApiProperty({ example: 100.0 })
  @Type(() => Number)
  @IsNumber()
  balance: number;

  @ApiProperty({ example: 'CREDIT' })
  @IsString()
  type: TransactionType;

  @ApiPropertyOptional({ example: '0000654356' })
  @IsOptional()
  @IsString()
  reference?: string;

  @ApiProperty({ example: '123e4567-e89b-12d3-a456-426614174000' })
  @IsUUID()
  classificationId: string;
}

// export class CreateTransactionArrayDto {
//   @IsArray()
//   @ValidateNested({ each: true })
//   @Type(() => CreateTransactionDto)
//   items: CreateTransactionDto[];
// }
export class CreateTransactionArrayDto {
  @ApiProperty({
    type: [CreateTransactionDto],
    description: 'List of transactions to create',
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateTransactionDto)
  items: CreateTransactionDto[];
}
