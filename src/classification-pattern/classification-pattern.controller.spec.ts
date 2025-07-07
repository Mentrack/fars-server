import { Test, TestingModule } from '@nestjs/testing';
import { ClassificationPatternController } from './classification-pattern.controller';
import { ClassificationPatternService } from './classification-pattern.service';

describe('ClassificationPatternController', () => {
  let controller: ClassificationPatternController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClassificationPatternController],
      providers: [ClassificationPatternService],
    }).compile();

    controller = module.get<ClassificationPatternController>(ClassificationPatternController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
