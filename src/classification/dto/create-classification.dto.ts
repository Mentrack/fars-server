import { ApiProperty } from '@nestjs/swagger';
import { Category, ClassificationCode } from '@prisma/client';
import { IsEnum, IsNotEmpty, IsString, MinLength } from 'class-validator';

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
    example: 'Disbursement',
  })
  @IsNotEmpty()
  @IsString()
  @MinLength(4)
  label: string;

  @ApiProperty({
    example: 'Loan Disbursement',
  })
  @IsNotEmpty()
  @IsString()
  description: string;
}
