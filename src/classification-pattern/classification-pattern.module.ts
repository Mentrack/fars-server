import { Module } from '@nestjs/common';
import { ClassificationPatternService } from './classification-pattern.service';
import { ClassificationPatternController } from './classification-pattern.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [ClassificationPatternController],
  providers: [ClassificationPatternService],
})
export class ClassificationPatternModule {}
