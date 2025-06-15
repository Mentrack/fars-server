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
import { BankService } from './bank.service';
import { CreateBankDto, CreateBankResponseDto } from './dto/create-bank.dto';
import { UpdateBankDto } from './dto/update-bank.dto';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
} from '@nestjs/swagger';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { Role } from 'src/user/enum/role.enum';

@ApiBearerAuth()
@Roles(Role.ADMIN, Role.SUPER_ADMIN)
@Controller('banks')
export class BankController {
  constructor(private readonly bankService: BankService) {}

  @ApiOperation({ summary: 'Create a new bank' })
  @ApiCreatedResponse({
    description: 'Bank created successfully',
    type: CreateBankResponseDto,
  })
  @Post()
  async create(@Body() createBankDto: CreateBankDto) {
    return this.bankService.create(createBankDto);
  }

  @ApiOperation({ summary: 'Get all banks' })
  @ApiOkResponse({
    description: 'List of all banks',
    type: [CreateBankResponseDto],
  })
  @Get()
  async findAll() {
    return this.bankService.findAll();
  }

  @ApiOperation({ summary: 'Get a bank by ID' })
  @ApiOkResponse({
    description: 'Bank details',
    type: CreateBankResponseDto,
  })
  @Get(':id')
  async findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.bankService.findOne(id);
  }

  @ApiOperation({ summary: 'Update a bank by ID' })
  @ApiOkResponse({
    description: 'Bank updated successfully',
    type: CreateBankResponseDto,
  })
  @Patch(':id')
  async update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateBankDto: UpdateBankDto,
  ) {
    return this.bankService.update(id, updateBankDto);
  }

  @ApiOperation({ summary: 'Delete a bank by ID' })
  @ApiOkResponse({
    description: 'Bank deleted successfully',
    type: CreateBankResponseDto,
  })
  @Delete(':id')
  async remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.bankService.remove(id);
  }
}
