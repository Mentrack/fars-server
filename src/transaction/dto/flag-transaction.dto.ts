import { IsString, IsOptional } from 'class-validator';

export class FlagTransactionDto {
  @IsString()
  @IsOptional()
  reason?: string;
}
