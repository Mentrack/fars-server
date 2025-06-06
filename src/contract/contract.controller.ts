import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseUUIDPipe,
} from '@nestjs/common';
import { ContractService } from './contract.service';
import {
  CreateAccountContractResponseDto,
  CreateContractDto,
} from './dto/create-contract.dto';
import { UpdateContractDto } from './dto/update-contract.dto';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
} from '@nestjs/swagger';
import { Role } from 'src/auth/enum/role.enum';
import { Roles } from 'src/auth/decorators/roles.decorator';

@ApiBearerAuth()
@Controller('contracts')
export class ContractController {
  constructor(private readonly contractService: ContractService) {}

  @ApiOperation({ summary: 'Create a new contract' })
  @ApiCreatedResponse({
    description: 'The contract has been successfully created.',
    type: CreateAccountContractResponseDto,
  })
  @Post()
  async create(@Body() createContractDto: CreateContractDto) {
    return await this.contractService.create(createContractDto);
  }

  @ApiOperation({ summary: 'Get all contracts' })
  @ApiOkResponse({
    description: 'List of all contracts',
    type: [CreateAccountContractResponseDto],
  })
  @Get()
  async findAll() {
    return await this.contractService.findAll();
  }

  @ApiOperation({ summary: 'Get a contract by ID' })
  @ApiOkResponse({
    description: 'The contract has been successfully retrieved.',
    type: CreateAccountContractResponseDto,
  })
  @Get(':id')
  async findOne(@Param('id', ParseUUIDPipe) id: string) {
    return await this.contractService.findOne(id);
  }

  @ApiOperation({ summary: 'Update a contract by ID' })
  @ApiOkResponse({
    description: 'The contract has been successfully updated.',
    type: CreateAccountContractResponseDto,
  })
  @Patch(':id')
  async update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateContractDto: UpdateContractDto,
  ) {
    return await this.contractService.update(id, updateContractDto);
  }

  @ApiOperation({ summary: 'Delete a contract by ID' })
  @ApiOkResponse({
    description: 'The contract has been successfully deleted.',
    type: CreateAccountContractResponseDto,
  })
  @Roles(Role.ADMIN, Role.SUPER_ADMIN)
  @Delete(':id')
  async remove(@Param('id', ParseUUIDPipe) id: string) {
    return await this.contractService.remove(id);
  }
}
