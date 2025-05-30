import { Module } from '@nestjs/common';
import { ClassificationService } from './classification.service';
import { ClassificationController } from './classification.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [ClassificationController],
  providers: [ClassificationService],
})
export class ClassificationModule {}
