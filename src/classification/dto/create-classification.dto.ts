import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Category, ClassificationCode } from '@prisma/client';
import {
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
  MinLength,
} from 'class-validator';

export class CreateClassificationDto {
  @ApiProperty({
    example: '123e4567-e89b-12d3-a456-426614174000',
  })
  @IsNotEmpty()
  @IsString()
  @IsUUID()
  bankId: string;

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
  @IsNotEmpty()
  @IsString()
  description: string;
}
