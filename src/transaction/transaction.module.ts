import { Module } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { TransactionController } from './transaction.controller';
import { CleanerService } from './services/cleaner/cleaner.service';
import { ReconstructorService } from './services/reconstructor/reconstructor.service';
import { DatabaseModule } from 'src/database/database.module';
import { ClassifierService } from './services/classifier/classifier.service';

@Module({
  imports: [DatabaseModule],
  controllers: [TransactionController],
  providers: [
    TransactionService,
    CleanerService,
    ReconstructorService,
    ClassifierService,
  ],
})
export class TransactionModule {}
