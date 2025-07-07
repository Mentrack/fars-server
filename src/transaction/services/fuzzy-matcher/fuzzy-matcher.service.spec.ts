import { Test, TestingModule } from '@nestjs/testing';
import { FuzzyMatcherService } from './fuzzy-matcher.service';

describe('FuzzyMatcherService', () => {
  let service: FuzzyMatcherService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FuzzyMatcherService],
    }).compile();

    service = module.get<FuzzyMatcherService>(FuzzyMatcherService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
