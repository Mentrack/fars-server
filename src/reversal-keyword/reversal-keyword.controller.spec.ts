import { Test, TestingModule } from '@nestjs/testing';
import { ReversalKeywordController } from './reversal-keyword.controller';
import { ReversalKeywordService } from './reversal-keyword.service';

describe('ReversalKeywordController', () => {
  let controller: ReversalKeywordController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReversalKeywordController],
      providers: [ReversalKeywordService],
    }).compile();

    controller = module.get<ReversalKeywordController>(ReversalKeywordController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
