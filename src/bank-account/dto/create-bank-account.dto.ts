import {
  IsEnum,
  IsString,
  IsUUID,
  Matches,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import {
  CreateAccountContractDto,
  CreateAccountContractResponseDto,
} from './create-account-contract.dto';
import { AccountType } from '../enums/account-type.enum';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateBankAccountDto {
  @ApiProperty({
    description: 'Account number of the bank account',
    example: '1234567890',
  })
  @IsString()
  @MinLength(10)
  @Matches(/^\d{10}$/, { message: 'Account number must be exactly 10 digits' })
  accountNumber: string;

  @ApiProperty({
    description: 'Name of the account holder',
    example: 'John Doe',
  })
  @IsString()
  accountName: string;

  @ApiProperty({ description: 'Type of the account', example: 'SAVINGS' })
  @IsString()
  @IsEnum(AccountType)
  accountType: AccountType;

  @ApiProperty({ description: 'Currency code of the account', example: 'NGN' })
  @IsString()
  @Matches(/^[A-Z]{3}$/, {
    message: 'Currency code must be a valid 3-letter ISO code (e.g., USD, NGN)',
  })
  currency: string;

  @ApiProperty({
    description: 'ID of the client',
    example: '123e4567-e89b-12d3-a456-426614174000',
  })
  @IsString()
  @IsUUID()
  clientId: string;

  @ApiProperty({ description: 'Bank contract' })
  @ApiPropertyOptional()
  @ValidateNested()
  @Type(() => CreateAccountContractDto)
  contract?: CreateAccountContractDto;
}

export class CreateBankAccountResponseDto {
  @ApiProperty({
    example: '1234567890',
  })
  @IsString()
  @MinLength(10)
  @Matches(/^\d{10}$/, { message: 'Account number must be exactly 10 digits' })
  accountNumber: string;

  @ApiProperty({
    example: 'John Doe',
  })
  @IsString()
  accountName: string;

  @ApiProperty({ example: 'SAVINGS' })
  @IsString()
  @IsEnum(AccountType)
  accountType: AccountType;

  @ApiProperty({ example: 'NGN' })
  @IsString()
  @Matches(/^[A-Z]{3}$/, {
    message: 'Currency code must be a valid 3-letter ISO code (e.g., USD, NGN)',
  })
  currency: string;

  @ApiProperty({
    example: '123e4567-e89b-12d3-a456-426614174000',
  })
  @IsString()
  @IsUUID()
  clientId: string;

  @ApiProperty({ description: 'Bank contract' })
  @ApiPropertyOptional()
  @ValidateNested()
  @Type(() => CreateAccountContractResponseDto)
  contract?: CreateAccountContractResponseDto;
}
