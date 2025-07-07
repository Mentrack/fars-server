import { Module } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { TransactionController } from './transaction.controller';
import { CleanerService } from './services/cleaner/cleaner.service';
import { ReconstructorService } from './services/reconstructor/reconstructor.service';
import { DatabaseModule } from 'src/database/database.module';
import { ClassifierService } from './services/classifier/classifier.service';
import { ValidatorService } from './services/validator/validator.service';
import { FuzzyMatcherService } from './services/fuzzy-matcher/fuzzy-matcher.service';
import { ConfigModule } from '@nestjs/config';
import googleAiConfig from './config/google-ai.config';

@Module({
  imports: [DatabaseModule, ConfigModule.forFeature(googleAiConfig)],
  controllers: [TransactionController],
  providers: [
    TransactionService,
    CleanerService,
    ReconstructorService,
    ClassifierService,
    ValidatorService,
    FuzzyMatcherService,
  ],
})
export class TransactionModule {}
