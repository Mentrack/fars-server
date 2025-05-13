import { Test, TestingModule } from '@nestjs/testing';
import { StaffAssignmentController } from './staff-assignment.controller';
import { StaffAssignmentService } from './staff-assignment.service';

describe('StaffAssignmentController', () => {
  let controller: StaffAssignmentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StaffAssignmentController],
      providers: [StaffAssignmentService],
    }).compile();

    controller = module.get<StaffAssignmentController>(StaffAssignmentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
