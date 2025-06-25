import { Test, TestingModule } from '@nestjs/testing';
import { ReconstructorService } from './reconstructor.service';

describe('ReconstructorService', () => {
  let service: ReconstructorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReconstructorService],
    }).compile();

    service = module.get<ReconstructorService>(ReconstructorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
