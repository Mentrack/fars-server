import { Module } from '@nestjs/common';
import { ReversalKeywordService } from './reversal-keyword.service';
import { ReversalKeywordController } from './reversal-keyword.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [ReversalKeywordController],
  providers: [ReversalKeywordService],
})
export class ReversalKeywordModule {}
