import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateClassificationDto } from './dto/create-classification.dto';
import { UpdateClassificationDto } from './dto/update-classification.dto';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class ClassificationService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createClassificationDto: CreateClassificationDto) {
    try {
      // Check if classification with the same code and bankId already exists
      const existingClassification =
        await this.databaseService.transactionClassification.findFirst({
          where: {
            code: createClassificationDto.code,
          },
        });
      if (existingClassification) {
        throw new ConflictException('Classification already exists');
      }

      // Create the new classification
      return await this.databaseService.transactionClassification.create({
        data: createClassificationDto,
      });
    } catch (error) {
      // Handle other errors
      throw error;
    }
  }

  async findAll() {
    try {
      // Fetch all classifications
      const classifications =
        await this.databaseService.transactionClassification.findMany();

      if (!classifications || classifications.length === 0) {
        throw new NotFoundException('No classifications found');
      }
      // Return the classifications
      return classifications;
    } catch (error) {
      // Handle specific error codes from Prisma
      if (error.code === 'P2025') {
        throw new NotFoundException(`No classifications found`);
      }
      // Handle other errors
      throw error;
    }
  }

  async findOne(id: string) {
    try {
      const classification =
        await this.databaseService.transactionClassification.findUnique({
          where: { id },
        });

      // Handle not found case
      if (!classification) {
        throw new NotFoundException(`Classification not found`);
      }

      return classification;
    } catch (error) {
      // Handle specific error codes from Prisma
      if (error.code === 'P2025') {
        throw new NotFoundException(`Classification not found`);
      }
      // Handle other errors
      throw error;
    }
  }

  async update(id: string, updateClassificationDto: UpdateClassificationDto) {
    try {
      // Update the classification
      return await this.databaseService.transactionClassification.update({
        where: { id },
        data: updateClassificationDto,
      });
    } catch (error) {
      // Handle specific error codes from Prisma
      if (error.code === 'P2002') {
        throw new ConflictException('Classification already exists');
      }
      if (error.code === 'P2025') {
        throw new NotFoundException(`Classification not found`);
      }
      // Handle other errors
      throw error;
    }
  }

  async remove(id: string) {
    try {
      return await this.databaseService.transactionClassification.delete({
        where: { id },
      });
    } catch (error) {
      // Handle specific error codes from Prisma
      if (error.code === 'P2025') {
        throw new NotFoundException(`Classification not found`);
      }
      // Handle other errors
      throw error;
    }
  }
}
