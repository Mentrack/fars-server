import { Module } from '@nestjs/common';
import { RateService } from './rate.service';
import { RateController } from './rate.controller';
import { DatabaseModule } from 'src/database/database.module';
import { MulterModule } from '@nestjs/platform-express';
import { RateS3Service } from './rate.s3.service';
import { ConfigModule } from '@nestjs/config';
import s3Config from './config/s3.config';

@Module({
  imports: [
    ConfigModule.forFeature(s3Config),
    DatabaseModule,
    MulterModule.register({
      dest: './uploads', // Directory where files will be stored
    }),
  ],
  controllers: [RateController],
  providers: [RateService, RateS3Service],
})
export class RateModule {}
