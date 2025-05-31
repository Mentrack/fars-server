import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsNumber,
  IsBoolean,
  IsDateString,
  IsOptional,
  IsString,
  IsUUID,
  Matches,
  IsNotEmpty,
} from 'class-validator';

export class CreateContractDto {
  @ApiProperty({
    description: 'ID of the client',
    example: '123e4567-e89b-12d3-a456-426614174000',
  })
  @IsString()
  @IsNotEmpty()
  @IsUUID()
  clientId: string;

  @ApiProperty({ description: 'Return charge rate', example: 0.05 })
  @ApiPropertyOptional()
  @IsNumber()
  @IsOptional()
  returnChargeRate?: number;

  @ApiProperty({ description: 'Return charge limit', example: 1000 })
  @ApiPropertyOptional()
  @IsNumber()
  @IsOptional()
  returnChargeLimit?: number;

  @ApiProperty({ description: 'COT rate', example: 0.02 })
  @ApiPropertyOptional()
  @IsNumber()
  @IsOptional()
  cotCovenantRate?: number;

  @ApiProperty({ description: 'COT cover rate', example: 0.03 })
  @ApiPropertyOptional()
  @IsNumber()
  @IsOptional()
  cotOffCoverRate?: number;

  @ApiProperty({ description: 'COT OIC rate', example: 0.04 })
  @ApiPropertyOptional()
  @IsNumber()
  @IsOptional()
  cotOICRate?: number;

  @ApiProperty({ description: 'Turnover limit', example: 10000 })
  @ApiPropertyOptional()
  @IsNumber()
  @IsOptional()
  turnoverLimit?: number;

  @ApiProperty({ description: 'COT covenant frequency', example: 'monthly' })
  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  cotCovenantFrequency?: string;

  @ApiProperty({ description: 'COT off cover frequency', example: 'quarterly' })
  @ApiPropertyOptional()
  @IsBoolean()
  @IsOptional()
  chargeCOTOnShortfall?: boolean;

  @ApiProperty({ description: 'COT OIC frequency', example: 'annually' })
  @ApiPropertyOptional()
  @IsNumber()
  @IsOptional()
  creditInterestRate?: number;

  @ApiProperty({ description: 'Credit interest rate', example: 0.01 })
  @ApiPropertyOptional()
  @IsNumber()
  @IsOptional()
  debitRate?: number;

  @ApiProperty({ description: 'Debit rate', example: 0.02 })
  @ApiPropertyOptional()
  @IsNumber()
  @IsOptional()
  excessRate?: number;

  @ApiProperty({ description: 'Excess rate', example: 0.03 })
  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  excessRateType?: string;

  @ApiProperty({ description: 'Vat rate', example: 0.05 })
  @ApiPropertyOptional()
  @IsNumber()
  @IsOptional()
  vatRate?: number;

  @ApiProperty({ description: 'WHT rate', example: 0.05 })
  @ApiPropertyOptional()
  @IsNumber()
  @IsOptional()
  whtRate?: number;

  @ApiProperty({ description: 'Rate type', example: 'fixed' })
  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  rateType?: string;

  @ApiProperty({ description: 'Currency', example: 'USD' })
  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  @Matches(/^[A-Z]{3}$/, {
    message: 'Currency code must be a valid 3-letter ISO code (e.g., USD, NGN)',
  })
  currency?: string;

  @ApiProperty({ description: 'Effective from date', example: '2023-01-01' })
  @ApiPropertyOptional()
  @IsDateString()
  @IsOptional()
  effectiveFrom?: string;

  @ApiProperty({ description: 'Effective to date', example: '2023-12-31' })
  @ApiPropertyOptional()
  @IsOptional()
  @IsDateString()
  @IsOptional()
  effectiveTo?: string;
}

export class CreateAccountContractResponseDto {
  @ApiProperty({
    example: '123e4567-e89b-12d3-a456-426614174000',
  })
  @IsString()
  @IsNotEmpty()
  @IsUUID()
  clientId: string;

  @ApiProperty({ example: 0.05 })
  @ApiPropertyOptional()
  @IsNumber()
  @IsOptional()
  returnChargeRate?: number;

  @ApiProperty({ example: 1000 })
  @ApiPropertyOptional()
  @IsNumber()
  @IsOptional()
  returnChargeLimit?: number;

  @ApiProperty({ example: 0.02 })
  @ApiPropertyOptional()
  @IsNumber()
  @IsOptional()
  cotCovenantRate?: number;

  @ApiProperty({ example: 0.03 })
  @ApiPropertyOptional()
  @IsNumber()
  @IsOptional()
  cotOffCoverRate?: number;

  @ApiProperty({ example: 0.04 })
  @ApiPropertyOptional()
  @IsNumber()
  @IsOptional()
  cotOICRate?: number;

  @ApiProperty({ example: 10000 })
  @ApiPropertyOptional()
  @IsNumber()
  @IsOptional()
  turnoverLimit?: number;

  @ApiProperty({ example: 'monthly' })
  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  cotCovenantFrequency?: string;

  @ApiProperty({ example: 'quarterly' })
  @ApiPropertyOptional()
  @IsBoolean()
  @IsOptional()
  chargeCOTOnShortfall?: boolean;

  @ApiProperty({ example: 'annually' })
  @ApiPropertyOptional()
  @IsNumber()
  @IsOptional()
  creditInterestRate?: number;

  @ApiProperty({ example: 0.01 })
  @ApiPropertyOptional()
  @IsNumber()
  @IsOptional()
  debitRate?: number;

  @ApiProperty({ example: 0.02 })
  @ApiPropertyOptional()
  @IsNumber()
  @IsOptional()
  excessRate?: number;

  @ApiProperty({ example: 0.03 })
  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  excessRateType?: string;

  @ApiProperty({ example: 0.05 })
  @ApiPropertyOptional()
  @IsNumber()
  @IsOptional()
  vatRate?: number;

  @ApiProperty({ example: 0.05 })
  @ApiPropertyOptional()
  @IsNumber()
  @IsOptional()
  whtRate?: number;

  @ApiProperty({ example: 'fixed' })
  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  rateType?: string;

  @ApiProperty({ example: 'USD' })
  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  @Matches(/^[A-Z]{3}$/, {
    message: 'Currency code must be a valid 3-letter ISO code (e.g., USD, NGN)',
  })
  currency?: string;

  @ApiProperty({ example: '2023-01-01' })
  @ApiPropertyOptional()
  @IsDateString()
  @IsOptional()
  effectiveFrom?: string;

  @ApiProperty({ example: '2023-12-31' })
  @ApiPropertyOptional()
  @IsOptional()
  @IsDateString()
  @IsOptional()
  effectiveTo?: string;

  @ApiProperty({ example: '2023-01-01' })
  @ApiPropertyOptional()
  @IsDateString()
  @IsOptional()
  createdAt?: string;

  @ApiProperty({ example: '2023-01-01' })
  @ApiPropertyOptional()
  @IsDateString()
  @IsOptional()
  updatedAt?: string;
}
