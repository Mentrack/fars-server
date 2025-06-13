import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRateDto } from './dto/create-rate.dto';
import { UpdateRateDto } from './dto/update-rate.dto';
import { DatabaseService } from 'src/database/database.service';
import { transformRateDtoToPrismaPayload } from './rate.transformer';

@Injectable()
export class RateService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createRateDto: CreateRateDto) {
    //Check if the client exists
    const clientExists = await this.databaseService.client.findUnique({
      where: { id: createRateDto.clientId },
    });
    if (!clientExists) {
      throw new NotFoundException('Client not found');
    }

    // Transform the rate type to json if it's not already

    const data = transformRateDtoToPrismaPayload(createRateDto);

    // Create a new rate
    return await this.databaseService.accountRate.create({
      data: {
        ...data,
        clientId: createRateDto.clientId,
      },
      include: {
        client: true, // Include client details in the response
      },
    });
  }

  async findAll() {
    const rates = await this.databaseService.accountRate.findMany({
      include: {
        client: true, // Include client details in the response
      },
    });

    // Check if there are any rates
    if (rates.length === 0) {
      throw new NotFoundException('No rates found');
    }

    // Return the list of rates
    return rates;
  }

  async findOne(id: string) {
    const rate = await this.databaseService.accountRate.findUnique({
      where: { id },
      include: {
        client: true, // Include client details in the response
      },
    });

    // Check if the rate exists
    if (!rate) {
      throw new NotFoundException('Rate not found');
    }

    // Return the rate details
    return rate;
  }

  async update(id: string, updateRateDto: UpdateRateDto) {
    //Check if the rate exists
    const rateExist = await this.databaseService.accountRate.findUnique({
      where: { id },
    });
    if (!rateExist) {
      throw new NotFoundException('Rate not found');
    }

    // Transform the rate type to json if it's not already
    const data = transformRateDtoToPrismaPayload(updateRateDto);

    // Update the rate
    return await this.databaseService.accountRate.update({
      where: { id },
      data: { ...data },
      include: {
        client: true, // Include client details in the response
      },
    });
  }

  async remove(id: string) {
    // Check if the rate exists
    const rateExist = await this.databaseService.accountRate.findUnique({
      where: { id },
      include: {
        client: true, // Include client details in the response
      },
    });
    if (!rateExist) {
      throw new NotFoundException('Rate not found');
    }

    return await this.databaseService.accountRate.delete({
      where: { id },
    });
  }
}
