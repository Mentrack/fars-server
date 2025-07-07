import { IsArray, IsString, IsUUID, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class BatchItem {
  @IsUUID()
  @IsString()
  transactionId: string;

  @IsUUID()
  @IsString()
  classificationId: string;
}

export class ClassifyBatchDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => BatchItem)
  items: BatchItem[];
}
