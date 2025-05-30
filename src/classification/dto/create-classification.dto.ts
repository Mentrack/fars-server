import {
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  Min,
  MinLength,
} from 'class-validator';
import { Category, ClassificationCode } from 'generated/prisma';

export class CreateClassificationDto {
  @IsNotEmpty()
  @IsEnum(ClassificationCode)
  code: ClassificationCode; // Unique code for the classification (e.g. LD <LOAN_DISBURSEMENT>)

  @IsNotEmpty()
  @IsEnum(Category)
  category: Category; // Deposit, Withdrawal, Fee

  @IsNotEmpty()
  @IsString()
  @MinLength(4)
  label: string; // Human-readable name (e.g. Loan Disbursement)

  @IsString()
  @IsOptional()
  description?: string; // Optional explanation
}
