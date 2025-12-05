import { Test, TestingModule } from '@nestjs/testing';
import { RateCommentController } from './rate-comment.controller';
import { RateCommentService } from './rate-comment.service';

describe('RateCommentController', () => {
  let controller: RateCommentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RateCommentController],
      providers: [RateCommentService],
    }).compile();

    controller = module.get<RateCommentController>(RateCommentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
