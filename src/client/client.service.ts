import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class ClientService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createClientDto: CreateClientDto) {
    const { email, companyName } = createClientDto;
    const userExist = await this.databaseService.client.findFirst({
      where: {
        OR: [{ email }, { companyName }],
      },
    });

    if (userExist) throw new ConflictException('Client already exist');
    return await this.databaseService.client.create({
      data: createClientDto,
    });
  }

  async findAll() {
    return await this.databaseService.client.findMany({});
  }

  async findOne(id: string) {
    try {
      const client = await this.databaseService.client.findUnique({
        where: { id },
      });

      // Handle not found case
      if (!client) {
        throw new NotFoundException(`Client with ID ${id} not found`);
      }

      return client;
    } catch (error) {
      // Handle specific error codes from Prisma
      if (error.code === 'P2025') {
        throw new NotFoundException(`Client not found`);
      }

      throw error;
    }
  }

  async update(id: string, updateClientDto: UpdateClientDto) {
    try {
      return await this.databaseService.client.update({
        where: { id },
        data: updateClientDto,
      });
    } catch (error) {
      // Handle specific error codes from Prisma
      if (error.code === 'P2002') {
        throw new ConflictException('Client already exists');
      }
      if (error.code === 'P2016') {
        throw new NotFoundException('Record to update not found.');
      }
      if (error.code === 'P2025') {
        throw new NotFoundException(`User not found`);
      }
      // Handle other errors
      throw error;
    }
  }

  async remove(id: string) {
    try {
      const client = await this.databaseService.client.delete({
        where: { id },
      });

      if (!client) {
        throw new NotFoundException(`Client with ID ${id} not found`);
      }
    } catch (error) {
      // Handle specific error codes from Prisma
      if (error.code === 'P2025') {
        throw new NotFoundException(`Client not found`);
      }
      // Handle other errors
      throw error;
    }
  }
}
