import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { TokenModule } from './token/token.module';
import { MailModule } from './mail/mail.module';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';
import { MyLoggerModule } from './my-logger/my-logger.module';
import { ClientModule } from './client/client.module';
import { BankAccountModule } from './bank-account/bank-account.module';
import { StaffAssignmentModule } from './staff-assignment/staff-assignment.module';
import { ClassificationModule } from './classification/classification.module';
import { RateModule } from './rate/rate.module';
import { BankModule } from './bank/bank.module';
import { TransactionModule } from './transaction/transaction.module';
import { ReversalKeywordModule } from './reversal-keyword/reversal-keyword.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      expandVariables: true,
    }),
    DatabaseModule,
    UserModule,
    AuthModule,
    TokenModule,
    MailModule,
    ThrottlerModule.forRoot([
      {
        name: 'short',
        ttl: 1000,
        limit: 3,
      },
      {
        name: 'long',
        ttl: 60000,
        limit: 100,
      },
    ]),
    MyLoggerModule,
    ClientModule,
    BankAccountModule,
    StaffAssignmentModule,
    ClassificationModule,
    RateModule,
    BankModule,
    TransactionModule,
    ReversalKeywordModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
})
export class AppModule {}
