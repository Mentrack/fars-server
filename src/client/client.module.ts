import { Module } from '@nestjs/common';
import { ClientService } from './client.service';
import { ClientController } from './client.controller';
import { DatabaseService } from 'src/database/database.service';
import { MailModule } from 'src/mail/mail.module';

@Module({
  imports: [MailModule],
  controllers: [ClientController],
  providers: [ClientService, DatabaseService],
})
export class ClientModule {}
