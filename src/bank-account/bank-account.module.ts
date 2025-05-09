import { Module } from '@nestjs/common';
import { BankAccountService } from './bank-account.service';
import { BankAccountController } from './bank-account.controller';
import { DatabaseService } from 'src/database/database.service';

@Module({
  controllers: [BankAccountController],
  providers: [BankAccountService, DatabaseService],
})
export class BankAccountModule {}
