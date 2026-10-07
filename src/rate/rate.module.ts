import { Module } from '@nestjs/common';
import { RateService } from './rate.service';
import { RateController } from './rate.controller';
import { DatabaseModule } from 'src/database/database.module';
import { MulterModule } from '@nestjs/platform-express';
import { RateStorageService } from './rate.storage.service';
import { ConfigModule } from '@nestjs/config';
import storageConfig from './config/storage.config';

@Module({
  imports: [
    ConfigModule.forFeature(storageConfig),
    DatabaseModule,
    MulterModule.register({
      dest: './uploads', // Directory where files will be stored
    }),
  ],
  controllers: [RateController],
  providers: [RateService, RateStorageService],
})
export class RateModule {}
