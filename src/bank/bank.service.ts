import { Injectable } from '@nestjs/common';
import { CreateBankDto } from './dto/create-bank.dto';
import { UpdateBankDto } from './dto/update-bank.dto';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class BankService {
  constructor(private readonly databaseService: DatabaseService) {}
  async create(createBankDto: CreateBankDto) {
    return await this.databaseService.bank.create({ data: createBankDto });
  }

  async findAll() {
    return await this.databaseService.bank.findMany({
      orderBy: { name: 'asc' },
    });
  }

  async findOne(id: string) {
    return await this.databaseService.bank.findUnique({ where: { id } });
  }

  async update(id: string, updateBankDto: UpdateBankDto) {
    return await this.databaseService.bank.update({
      where: { id },
      data: updateBankDto,
    });
  }

  async remove(id: string) {
    return await this.databaseService.bank.delete({ where: { id } });
  }
}
