import { PartialType } from '@nestjs/swagger';
import { CreateReversalKeywordDto } from './create-reversal-keyword.dto';

export class UpdateReversalKeywordDto extends PartialType(CreateReversalKeywordDto) {}
