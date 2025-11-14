import { PartialType, OmitType } from '@nestjs/swagger';
import { CreateBankAccountDto } from './create-bank-account.dto';

// Omit 'rateId' from CreateBankAccountDto
const CreateBankAccountWithoutRateId = OmitType(CreateBankAccountDto, [
  'rateId',
] as const);

// Apply PartialType to the new class
export class UpdateBankAccountDto extends PartialType(
  CreateBankAccountWithoutRateId,
) {}
