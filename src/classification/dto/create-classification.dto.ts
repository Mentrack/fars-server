import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';
import { Category, ClassificationCode } from 'generated/prisma';

export class CreateClassificationDto {
  @ApiProperty({
    example: ClassificationCode.LD,
  })
  @IsNotEmpty()
  @IsEnum(ClassificationCode)
  code: ClassificationCode;

  @ApiProperty({
    enum: Category,
    example: Category.DEPOSIT,
  })
  @IsNotEmpty()
  @IsEnum(Category)
  category: Category;

  @ApiProperty({
    example: 'Loan Disbursement',
  })
  @IsNotEmpty()
  @IsString()
  @MinLength(4)
  label: string;

  @ApiProperty({
    example: 'Disbursement',
  })
  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  description?: string; // optional description field
}
