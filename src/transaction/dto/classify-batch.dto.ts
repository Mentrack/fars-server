import { IsArray, IsUUID, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

class BatchItem {
  @IsUUID()
  transactionId: string;

  @IsUUID()
  classificationId: string;
}

export class ClassifyBatchDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => BatchItem)
  items: BatchItem[];
}
