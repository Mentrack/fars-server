import {
  IsEnum,
  IsString,
  IsUUID,
  Matches,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { CreateAccountContractDto } from './create-account-contract.dto';
import { AccountType } from '../enums/account-type.enum';

export class CreateBankAccountDto {
  @IsString()
  @MinLength(10)
  @Matches(/^\d{10}$/, { message: 'Account number must be exactly 10 digits' })
  accountNumber: string;

  @IsString()
  accountName: string;

  @IsString()
  @IsEnum(AccountType)
  accountType: AccountType;

  @IsString()
  @Matches(/^[A-Z]{3}$/, {
    message: 'Currency code must be a valid 3-letter ISO code (e.g., USD, NGN)',
  })
  currency: string;

  @IsString()
  @IsUUID()
  clientId: string;

  @ValidateNested()
  @Type(() => CreateAccountContractDto)
  contract?: CreateAccountContractDto;
}
