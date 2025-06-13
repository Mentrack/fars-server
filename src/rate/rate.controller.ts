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
import { RateService } from './rate.service';
import { CreateRateResponseDto, CreateRateDto } from './dto/create-rate.dto';
import { UpdateRateDto } from './dto/update-rate.dto';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
} from '@nestjs/swagger';
import { Role } from 'src/auth/enum/role.enum';
import { Roles } from 'src/auth/decorators/roles.decorator';

@ApiBearerAuth()
@Controller('rates')
export class RateController {
  constructor(private readonly rateService: RateService) {}

  @ApiOperation({ summary: 'Create a new contract' })
  @ApiCreatedResponse({
    description: 'The contract has been successfully created.',
    type: CreateRateResponseDto,
  })
  @Post()
  async create(@Body() createRateDto: CreateRateDto) {
    return await this.rateService.create(createRateDto);
  }

  @ApiOperation({ summary: 'Get all rates' })
  @ApiOkResponse({
    description: 'List of all rates',
    type: [CreateRateResponseDto],
  })
  @Get()
  async findAll() {
    return await this.rateService.findAll();
  }

  @ApiOperation({ summary: 'Get a rate by ID' })
  @ApiOkResponse({
    description: 'The rate has been successfully retrieved.',
    type: CreateRateResponseDto,
  })
  @Get(':id')
  async findOne(@Param('id', ParseUUIDPipe) id: string) {
    return await this.rateService.findOne(id);
  }

  @ApiOperation({ summary: 'Update a rate by ID' })
  @ApiOkResponse({
    description: 'The rate has been successfully updated.',
    type: CreateRateResponseDto,
  })
  @Patch(':id')
  async update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateRateDto: UpdateRateDto,
  ) {
    return await this.rateService.update(id, updateRateDto);
  }

  @ApiOperation({ summary: 'Delete a rate by ID' })
  @ApiOkResponse({
    description: 'The rate has been successfully deleted.',
    type: CreateRateResponseDto,
  })
  @Roles(Role.ADMIN, Role.SUPER_ADMIN)
  @Delete(':id')
  async remove(@Param('id', ParseUUIDPipe) id: string) {
    return await this.rateService.remove(id);
  }
}
