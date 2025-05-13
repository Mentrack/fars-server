import { Test, TestingModule } from '@nestjs/testing';
import { StaffAssignmentService } from './staff-assignment.service';

describe('StaffAssignmentService', () => {
  let service: StaffAssignmentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StaffAssignmentService],
    }).compile();

    service = module.get<StaffAssignmentService>(StaffAssignmentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
