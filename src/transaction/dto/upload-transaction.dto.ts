import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsDate, IsNumber, IsString, IsUUID } from 'class-validator';

const csvStructureDescription = `
The uploaded bank statement file (CSV or similar) must contain the following columns:

| Column Name | Required | Data Type | Example |
| :--- | :--- | :--- | :--- |
| **TransDate** | Yes | Date String | 2024-05-15 |
| **ValueDate** | Yes | Date String | 2024-05-15 |
| **TransDesc** | Yes | String | INTERBANK TRANSFER / STAMP DUTY CHARGE |
| **Debit** | Yes | Number | 1000.50 |
| **Credit** | Yes | Number | 0.00 |
| **Balance** | Yes | Number | 50000.00 |
| TellerNo | No | String | 12345 |
| ChequeNo | No | String | 67890 |
`;

// DTO solely for Swagger documentation purposes
export class FileUploadDto {
  @ApiProperty({
    type: 'string',
    format: 'binary',
    description: `**File Structure Requirements (Raw Bank Statement):**\n\n${csvStructureDescription}`,
  })
  file: any;
}

export class UploadTransactionResponseDto {
  @ApiProperty({ example: '2022-01-01' })
  @IsString()
  @IsDate()
  transactionDate: string;

  @ApiProperty({ example: '2022-01-01' })
  @IsDate()
  valueDate: string;

  @ApiProperty({ example: 'Transaction description' })
  @IsString()
  description: string;

  @ApiProperty({ example: '100.00' })
  @IsNumber()
  debit: number;

  @ApiProperty({ example: '0.00' })
  @IsNumber()
  credit: number;

  @ApiProperty({ example: '100.00' })
  @IsNumber()
  amount: number;

  @ApiProperty({ example: 'CREDIT' })
  @IsString()
  type: 'DEBIT' | 'CREDIT';

  @ApiProperty({ example: '-100675553.34' })
  @IsNumber()
  balance: number;

  @ApiProperty({ example: '1' })
  @IsString()
  rowIndex: string;

  @ApiProperty({ example: '12345' })
  @IsString()
  tellerNo: string | null;

  @ApiProperty({ example: '67890' })
  @IsString()
  chequeNo: string | null;

  @ApiProperty({ example: '0000654356' })
  @IsString()
  extractedReference: string;

  @ApiProperty({ example: false })
  @IsBoolean()
  isReversal: boolean;

  @ApiProperty({ example: '1' })
  @IsNumber()
  reversalPairIndex: number;

  @ApiProperty({ example: '123e4567-e89b-12d3-a456-426614174000' })
  @IsString()
  @IsUUID()
  classificationId: string;
}
