import { Test, TestingModule } from '@nestjs/testing';
import { ReversalKeywordService } from './reversal-keyword.service';

describe('ReversalKeywordService', () => {
  let service: ReversalKeywordService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReversalKeywordService],
    }).compile();

    service = module.get<ReversalKeywordService>(ReversalKeywordService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
