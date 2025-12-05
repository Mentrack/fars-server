import { Test, TestingModule } from '@nestjs/testing';
import { RateCommentService } from './rate-comment.service';

describe('RateCommentService', () => {
  let service: RateCommentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RateCommentService],
    }).compile();

    service = module.get<RateCommentService>(RateCommentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
