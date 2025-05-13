import { Module } from '@nestjs/common';
import { StaffAssignmentService } from './staff-assignment.service';
import { StaffAssignmentController } from './staff-assignment.controller';
import { DatabaseService } from 'src/database/database.service';

@Module({
  controllers: [StaffAssignmentController],
  providers: [StaffAssignmentService, DatabaseService],
})
export class StaffAssignmentModule {}
