import { PartialType } from '@nestjs/swagger';
import { CreateClassificationPatternDto } from './create-classification-pattern.dto';

export class UpdateClassificationPatternDto extends PartialType(CreateClassificationPatternDto) {}
