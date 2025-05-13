import { Module } from '@nestjs/common';
import { StaffAssignmentService } from './staff-assignment.service';
import { StaffAssignmentController } from './staff-assignment.controller';
import { DatabaseService } from 'src/database/database.service';
import { MailModule } from 'src/mail/mail.module';

@Module({
  imports: [MailModule],
  controllers: [StaffAssignmentController],
  providers: [StaffAssignmentService, DatabaseService],
})
export class StaffAssignmentModule {}
