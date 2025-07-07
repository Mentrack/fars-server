import { Test, TestingModule } from '@nestjs/testing';
import { ClassificationPatternService } from './classification-pattern.service';

describe('ClassificationPatternService', () => {
  let service: ClassificationPatternService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClassificationPatternService],
    }).compile();

    service = module.get<ClassificationPatternService>(ClassificationPatternService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
