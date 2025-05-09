import {
  IsNumber,
  IsBoolean,
  IsDateString,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';

export class CreateAccountContractDto {
  @IsString()
  @IsOptional()
  @IsUUID()
  bankAccountId?: string;

  @IsNumber()
  @IsOptional()
  returnChargeRate?: number;

  @IsNumber()
  @IsOptional()
  returnChargeLimit?: number;

  @IsNumber()
  @IsOptional()
  cotCovenantRate?: number;

  @IsNumber()
  @IsOptional()
  cotOffCoverRate?: number;

  @IsNumber()
  @IsOptional()
  cotOICRate?: number;

  @IsNumber()
  @IsOptional()
  turnoverLimit?: number;

  @IsString()
  @IsOptional()
  cotCovenantFrequency?: string;

  @IsBoolean()
  @IsOptional()
  chargeCOTOnShortfall?: boolean;

  @IsNumber()
  @IsOptional()
  creditInterestRate?: number;

  @IsNumber()
  @IsOptional()
  debitRate?: number;

  @IsNumber()
  @IsOptional()
  excessRate?: number;

  @IsString()
  @IsOptional()
  excessRateType?: string;

  @IsNumber()
  @IsOptional()
  vatRate?: number;

  @IsNumber()
  @IsOptional()
  whtRate?: number;

  @IsString()
  @IsOptional()
  rateType?: string;

  @IsString()
  @IsOptional()
  currency?: string;

  @IsDateString()
  @IsOptional()
  effectiveFrom?: string;

  @IsOptional()
  @IsDateString()
  @IsOptional()
  effectiveTo?: string;
}
