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

      if (!!bankId) {
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
      }

      if (!bankId) {
        const classification =
          await this.databaseService.transactionClassification.findUnique({
            where: { id: classificationId },
          });

        if (!classification) {
          throw new NotFoundException(
            `Classification with ID '${classificationId}' not found.`,
          );
        }
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

  async findAll(
    filters: FindAllPatternsFilters,
    skip: number, // <-- offset parameter
    limit: number, // <-- limit parameter
  ) {
    const where: any = {};

    // Apply Classification Filter (must be present if provided)
    if (filters.classificationId) {
      where.classificationId = filters.classificationId;
    }

    // Apply Bank ID Filter
    if (filters.bankId) {
      // If a specific bankId is provided, ONLY return patterns for that bank.
      where.bankId = filters.bankId;
    }

    // Apply Global Filter
    if (filters.isGlobal !== undefined) {
      if (filters.isGlobal === true) {
        // If isGlobal=true, ensure bankId is null (the definition of global)
        where.bankId = null;
      } else {
        // If isGlobal=false, ensure bankId is NOT null.
        where.bankId = {
          not: null,
        };
      }
    }

    const patterns = await this.databaseService.classificationPattern.findMany({
      where,
      skip: skip, // Apply offset
      take: limit, // Apply limit
    });

    const total = await this.databaseService.classificationPattern.count({
      where,
    });

    return {
      data: patterns,
      meta: {
        total,
        page: Math.floor(skip / limit) + 1,
        limit,
        pages: Math.ceil(total / limit),
      },
    };
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
