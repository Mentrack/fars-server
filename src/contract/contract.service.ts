import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateContractDto } from './dto/create-contract.dto';
import { UpdateContractDto } from './dto/update-contract.dto';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class ContractService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createContractDto: CreateContractDto) {
    //Check if the client exists
    const clientExists = await this.databaseService.client.findUnique({
      where: { id: createContractDto.clientId },
    });
    if (!clientExists) {
      throw new NotFoundException('Client not found');
    }

    // Create a new contract
    return await this.databaseService.accountContract.create({
      data: {
        ...createContractDto,
        clientId: createContractDto.clientId,
      },
      include: {
        client: true, // Include client details in the response
      },
    });
  }

  async findAll() {
    const contracts = await this.databaseService.accountContract.findMany({
      include: {
        client: true, // Include client details in the response
      },
    });

    // Check if there are any contracts
    if (contracts.length === 0) {
      throw new NotFoundException('No contracts found');
    }

    // Return the list of contracts
    return contracts;
  }

  async findOne(id: string) {
    const contract = await this.databaseService.accountContract.findUnique({
      where: { id },
      include: {
        client: true, // Include client details in the response
      },
    });

    // Check if the contract exists
    if (!contract) {
      throw new NotFoundException('Contract not found');
    }

    // Return the contract details
    return contract;
  }

  async update(id: string, updateContractDto: UpdateContractDto) {
    //Check if the contract exists
    const contractExists =
      await this.databaseService.accountContract.findUnique({
        where: { id },
      });
    if (!contractExists) {
      throw new NotFoundException('Contract not found');
    }

    // Update the contract
    return await this.databaseService.accountContract.update({
      where: { id },
      data: { ...updateContractDto },
      include: {
        client: true, // Include client details in the response
      },
    });
  }

  async remove(id: string) {
    // Check if the contract exists
    const contractExists =
      await this.databaseService.accountContract.findUnique({
        where: { id },
        include: {
          client: true, // Include client details in the response
        },
      });
    if (!contractExists) {
      throw new NotFoundException('Contract not found');
    }

    return await this.databaseService.accountContract.delete({
      where: { id },
    });
  }
}
