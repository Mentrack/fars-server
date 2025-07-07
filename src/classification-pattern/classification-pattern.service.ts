import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import {
  CreateClassificationPatternDto,
  FindAllPatternsFilters,
} from './dto/create-classification-pattern.dto';
import { UpdateClassificationPatternDto } from './dto/update-classification-pattern.dto';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class ClassificationPatternService {
  constructor(private readonly databaseService: DatabaseService) {}
  async create(createClassificationPatternDto: CreateClassificationPatternDto) {
    try {
      const { bankId, classificationId } = createClassificationPatternDto;

      const [bank, classification] = await Promise.all([
        this.databaseService.bank.findUnique({ where: { id: bankId } }),
        this.databaseService.transactionClassification.findUnique({
          where: { id: classificationId },
        }),
      ]);

      if (!bank && bankId) {
        throw new NotFoundException(`Bank with ID '${bankId}' not found.`);
      }

      if (!classification) {
        throw new NotFoundException(
          `Classification with ID '${classificationId}' not found.`,
        );
      }

      return this.databaseService.classificationPattern.create({
        data: createClassificationPatternDto,
      });
    } catch (error: any) {
      if (error.code === 'P2002') {
        throw new ConflictException(
          `Classification pattern with keyword '${createClassificationPatternDto.keyword}' already exists.`,
        );
      }

      throw error; // rethrow other errors
    }
  }

  async findAll(findAllClassificationPatternDto: FindAllPatternsFilters) {
    const { bankId, classificationId, isGlobal } =
      findAllClassificationPatternDto;

    const patterns = await this.databaseService.classificationPattern.findMany({
      where: {
        classificationId: findAllClassificationPatternDto.classificationId,
        bankId: findAllClassificationPatternDto.bankId,
      },
    });

    if (isGlobal) {
      return patterns.filter((pattern) => pattern.bankId === null);
    }

    if (isGlobal === false) {
      return patterns.filter((pattern) => pattern.bankId !== null);
    }

    return patterns;
  }

  findOne(id: string) {
    const pattern = this.databaseService.classificationPattern.findUnique({
      where: { id },
    });

    if (!pattern) {
      throw new NotFoundException(
        `Classification pattern with ID '${id}' not found.`,
      );
    }

    // If the pattern is found, we can return it
    return pattern;
  }

  update(
    id: string,
    updateClassificationPatternDto: UpdateClassificationPatternDto,
  ) {
    try {
      // Check if the classification pattern exists
      const existingPattern =
        this.databaseService.classificationPattern.findUnique({
          where: { id },
        });
      if (!existingPattern) {
        throw new NotFoundException(
          `Classification pattern with ID '${id}' not found.`,
        );
      }
      return this.databaseService.classificationPattern.update({
        where: { id },
        data: updateClassificationPatternDto,
      });
    } catch (error) {
      if (error.code === 'P2002') {
        throw new ConflictException(
          `Classification pattern with keyword '${updateClassificationPatternDto.keyword}' already exists.`,
        );
      }
      throw error; // rethrow other errors
    }
  }

  remove(id: string) {
    const existingPattern =
      this.databaseService.classificationPattern.findUnique({
        where: { id },
      });

    if (!existingPattern) {
      throw new NotFoundException(
        `Classification pattern with ID '${id}' not found.`,
      );
    }

    return this.databaseService.classificationPattern.delete({
      where: { id },
    });
  }
}
