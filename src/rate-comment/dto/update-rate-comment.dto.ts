import { PartialType } from '@nestjs/swagger';
import { CreateRateCommentDto } from './create-rate-comment.dto';

export class UpdateRateCommentDto extends PartialType(CreateRateCommentDto) {}
