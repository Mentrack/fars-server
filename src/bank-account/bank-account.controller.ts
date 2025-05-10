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
import { BankAccountService } from './bank-account.service';
import {
  CreateBankAccountDto,
  CreateBankAccountResponseDto,
} from './dto/create-bank-account.dto';
import { UpdateBankAccountDto } from './dto/update-bank-account.dto';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
} from '@nestjs/swagger';

@ApiBearerAuth()
@Controller('bank-accounts')
export class BankAccountController {
  constructor(private readonly bankAccountService: BankAccountService) {}

  @ApiOperation({ summary: 'Create a new bank account with account contract' })
  @ApiCreatedResponse({
    description: 'Bank account created successfully',
    type: CreateBankAccountResponseDto,
  })
  @Post()
  async create(@Body() createBankAccountDto: CreateBankAccountDto) {
    return await this.bankAccountService.create(createBankAccountDto);
  }

  @ApiOperation({ summary: 'Get all bank accounts include account contract' })
  @ApiOkResponse({
    description: 'List of all bank accounts include contracts',
    type: [CreateBankAccountResponseDto],
  })
  @Get()
  async findAll() {
    return await this.bankAccountService.findAll();
  }

  @ApiOperation({
    summary: 'Get a bank account by ID include account contract',
  })
  @ApiOkResponse({
    description: 'Bank account details include contract',
    type: CreateBankAccountResponseDto,
  })
  @Get(':id')
  async findOne(@Param('id', ParseUUIDPipe) id: string) {
    return await this.bankAccountService.findOne(id);
  }

  @ApiOperation({ summary: 'Update a bank account by ID and account contract' })
  @ApiOkResponse({
    description: 'Bank account and account contract updated successfully',
    type: CreateBankAccountResponseDto,
  })
  @Patch(':id')
  async update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateBankAccountDto: UpdateBankAccountDto,
  ) {
    return await this.bankAccountService.update(id, updateBankAccountDto);
  }

  @ApiOperation({ summary: 'Delete a bank account by ID include the contract' })
  @ApiOkResponse({
    description: 'Bank account and contract deleted successfully',
    type: CreateBankAccountResponseDto,
  })
  @Delete(':id')
  async remove(@Param('id', ParseUUIDPipe) id: string) {
    return await this.bankAccountService.remove(id);
  }
}
