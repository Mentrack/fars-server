import { IsUUID } from 'class-validator';

export class ReclassifyTransactionDto {
  @IsUUID()
  classificationId: string; // FK to TransactionClassification table
}
