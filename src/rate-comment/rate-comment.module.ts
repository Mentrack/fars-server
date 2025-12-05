import { Module } from '@nestjs/common';
import { RateCommentService } from './rate-comment.service';
import { RateCommentController } from './rate-comment.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [RateCommentController],
  providers: [RateCommentService],
})
export class RateCommentModule {}
