import {
  IsNumber,
  IsBoolean,
  IsDateString,
  IsOptional,
  IsString,
  IsUUID,
  Matches,
  IsNotEmpty,
  IsArray,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

class RatePeriodDto {
  @IsNotEmpty()
  @IsNumber()
  rate: number;

  @IsNotEmpty()
  @IsDateString()
  effectiveFrom: string;

  @IsNotEmpty()
  @IsDateString()
  effectiveTo: string;
}

export class CreateRateDto {
  @ApiProperty({
    description: 'ID of the client',
    example: '123e4567-e89b-12d3-a456-426614174000',
  })
  @IsString()
  @IsNotEmpty()
  @IsUUID()
  clientId: string;

  @ApiPropertyOptional({
    example: [
      { rate: 0.05, effectiveFrom: '2023-01-01', effectiveTo: '2023-12-31' },
    ],
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => RatePeriodDto)
  drRates?: RatePeriodDto[];

  @ApiPropertyOptional({
    example: [
      { rate: 0.05, effectiveFrom: '2023-01-01', effectiveTo: '2023-12-31' },
    ],
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => RatePeriodDto)
  loanInterestRates?: RatePeriodDto[];

  @ApiPropertyOptional({
    example: [
      { rate: 0.05, effectiveFrom: '2023-01-01', effectiveTo: '2023-12-31' },
    ],
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => RatePeriodDto)
  lcCommissions?: RatePeriodDto[];

  @ApiPropertyOptional({
    example: [
      { rate: 0.05, effectiveFrom: '2023-01-01', effectiveTo: '2023-12-31' },
    ],
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => RatePeriodDto)
  preNegotiationRates?: RatePeriodDto[];

  @ApiPropertyOptional({
    example: [
      { rate: 0.05, effectiveFrom: '2023-01-01', effectiveTo: '2023-12-31' },
    ],
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => RatePeriodDto)
  postNegotiationRates?: RatePeriodDto[];

  @ApiPropertyOptional({
    example: [
      { rate: 0.05, effectiveFrom: '2023-01-01', effectiveTo: '2023-12-31' },
    ],
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => RatePeriodDto)
  creditInterestRates?: RatePeriodDto[];

  @ApiPropertyOptional({ example: 0.05 })
  @IsNumber()
  @IsOptional()
  returnChargeRate?: number;

  @ApiPropertyOptional({ example: 1000 })
  @IsNumber()
  @IsOptional()
  returnChargeLimit?: number;

  @ApiPropertyOptional({ example: 0.02 })
  @IsNumber()
  @IsOptional()
  cotCovenantRate?: number;

  @ApiPropertyOptional({ example: 0.03 })
  @IsNumber()
  @IsOptional()
  cotOffCoverRate?: number;

  @ApiPropertyOptional({ example: 0.04 })
  @IsNumber()
  @IsOptional()
  cotOICRate?: number;

  @ApiPropertyOptional({ example: 10000 })
  @IsNumber()
  @IsOptional()
  turnoverLimit?: number;

  @ApiPropertyOptional({ example: 'monthly' })
  @IsString()
  @IsOptional()
  cotCovenantFrequency?: string;

  @ApiPropertyOptional({ example: true })
  @IsBoolean()
  @IsOptional()
  chargeCOTOnShortfall?: boolean;

  @ApiPropertyOptional({ example: 0.01 })
  @IsNumber()
  @IsOptional()
  debitRate?: number;

  @ApiPropertyOptional({ example: 0.02 })
  @IsNumber()
  @IsOptional()
  excessRate?: number;

  @ApiPropertyOptional({ example: 'flat' })
  @IsString()
  @IsOptional()
  excessRateType?: string;

  @ApiPropertyOptional({ example: 0.05 })
  @IsNumber()
  @IsOptional()
  vatRate?: number;

  @ApiPropertyOptional({ example: 0.05 })
  @IsNumber()
  @IsOptional()
  whtRate?: number;

  @ApiPropertyOptional({ example: 'tiered' })
  @IsString()
  @IsOptional()
  rateType?: string;

  @ApiPropertyOptional({ example: 'NGN' })
  @IsString()
  @IsOptional()
  @Matches(/^[A-Z]{3}$/, {
    message: 'Currency code must be a valid 3-letter ISO code (e.g., USD, NGN)',
  })
  currency?: string;

  @ApiPropertyOptional({ example: '2023-01-01' })
  @IsDateString()
  @IsOptional()
  effectiveFrom?: string;

  @ApiPropertyOptional({ example: '2023-12-31' })
  @IsDateString()
  @IsOptional()
  effectiveTo?: string;
}

export class CreateRateResponseDto {
  @ApiProperty({
    description: 'Unique identifier for the rate',
    example: '123e4567-e89b-12d3-a456-426614174000',
  })
  @IsString()
  @IsNotEmpty()
  @IsUUID()
  id: string;

  @ApiProperty({ example: '123e4567-e89b-12d3-a456-426614174000' })
  @IsString()
  @IsNotEmpty()
  @IsUUID()
  clientId: string;

  @ApiProperty({
    example: 'ARC-12345678',
  })
  @IsString()
  @IsNotEmpty()
  code: string;

  @ApiPropertyOptional({
    example: [
      { rate: 0.05, effectiveFrom: '2023-01-01', effectiveTo: '2023-12-31' },
    ],
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => RatePeriodDto)
  drRates?: RatePeriodDto[];

  @ApiPropertyOptional({
    example: [
      { rate: 0.05, effectiveFrom: '2023-01-01', effectiveTo: '2023-12-31' },
    ],
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => RatePeriodDto)
  loanInterestRates?: RatePeriodDto[];

  @ApiPropertyOptional({
    example: [
      { rate: 0.05, effectiveFrom: '2023-01-01', effectiveTo: '2023-12-31' },
    ],
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => RatePeriodDto)
  lcCommissions?: RatePeriodDto[];

  @ApiPropertyOptional({
    example: [
      { rate: 0.05, effectiveFrom: '2023-01-01', effectiveTo: '2023-12-31' },
    ],
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => RatePeriodDto)
  preNegotiationRates?: RatePeriodDto[];

  @ApiPropertyOptional({
    example: [
      { rate: 0.05, effectiveFrom: '2023-01-01', effectiveTo: '2023-12-31' },
    ],
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => RatePeriodDto)
  postNegotiationRates?: RatePeriodDto[];

  @ApiPropertyOptional({
    example: [
      { rate: 0.05, effectiveFrom: '2023-01-01', effectiveTo: '2023-12-31' },
    ],
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => RatePeriodDto)
  creditInterestRates?: RatePeriodDto[];

  @ApiPropertyOptional({ example: 0.05 })
  @IsNumber()
  @IsOptional()
  returnChargeRate?: number;

  @ApiPropertyOptional({ example: 1000 })
  @IsNumber()
  @IsOptional()
  returnChargeLimit?: number;

  @ApiPropertyOptional({ example: 0.02 })
  @IsNumber()
  @IsOptional()
  cotCovenantRate?: number;

  @ApiPropertyOptional({ example: 0.03 })
  @IsNumber()
  @IsOptional()
  cotOffCoverRate?: number;

  @ApiPropertyOptional({ example: 0.04 })
  @IsNumber()
  @IsOptional()
  cotOICRate?: number;

  @ApiPropertyOptional({ example: 10000 })
  @IsNumber()
  @IsOptional()
  turnoverLimit?: number;

  @ApiPropertyOptional({ example: 'monthly' })
  @IsString()
  @IsOptional()
  cotCovenantFrequency?: string;

  @ApiPropertyOptional({ example: true })
  @IsBoolean()
  @IsOptional()
  chargeCOTOnShortfall?: boolean;

  @ApiPropertyOptional({ example: 0.01 })
  @IsNumber()
  @IsOptional()
  debitRate?: number;

  @ApiPropertyOptional({ example: 0.02 })
  @IsNumber()
  @IsOptional()
  excessRate?: number;

  @ApiPropertyOptional({ example: 'flat' })
  @IsString()
  @IsOptional()
  excessRateType?: string;

  @ApiPropertyOptional({ example: 0.05 })
  @IsNumber()
  @IsOptional()
  vatRate?: number;

  @ApiPropertyOptional({ example: 0.05 })
  @IsNumber()
  @IsOptional()
  whtRate?: number;

  @ApiPropertyOptional({ example: 'tiered' })
  @IsString()
  @IsOptional()
  rateType?: string;

  @ApiPropertyOptional({ example: 'NGN' })
  @IsString()
  @IsOptional()
  @Matches(/^[A-Z]{3}$/, {
    message: 'Currency code must be a valid 3-letter ISO code (e.g., USD, NGN)',
  })
  currency?: string;

  @ApiPropertyOptional({ example: '2023-01-01' })
  @IsDateString()
  @IsOptional()
  effectiveFrom?: string;

  @ApiPropertyOptional({ example: '2023-12-31' })
  @IsDateString()
  @IsOptional()
  effectiveTo?: string;

  @ApiPropertyOptional({ example: '2023-01-01' })
  @IsDateString()
  @IsOptional()
  createdAt?: string;

  @ApiPropertyOptional({ example: '2023-01-01' })
  @IsDateString()
  @IsOptional()
  updatedAt?: string;
}
