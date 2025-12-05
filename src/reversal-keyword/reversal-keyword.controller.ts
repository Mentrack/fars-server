import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  ParseBoolPipe,
  ParseUUIDPipe,
} from '@nestjs/common';
import { ReversalKeywordService } from './reversal-keyword.service';
import { CreateReversalKeywordDto } from './dto/create-reversal-keyword.dto';
import { UpdateReversalKeywordDto } from './dto/update-reversal-keyword.dto';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('Reversal Keywords') // Group endpoints in Swagger UI
@Controller('reversal-keywords')
export class ReversalKeywordController {
  constructor(
    private readonly reversalKeywordService: ReversalKeywordService,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Create a new reversal keyword' })
  @ApiCreatedResponse({
    description: 'The reversal keyword has been successfully created.',
    type: CreateReversalKeywordDto,
  })
  create(@Body() createReversalKeywordDto: CreateReversalKeywordDto) {
    return this.reversalKeywordService.create(createReversalKeywordDto);
  }

  @Get()
  @ApiOperation({ summary: 'Find all reversal keywords' })
  @ApiQuery({
    name: 'bankId',
    required: false,
    type: String,
    description: 'Filter keywords by a specific bank ID.',
  })
  @ApiQuery({
    name: 'isGlobal',
    required: false,
    type: Boolean,
    description:
      'Filter keywords based on their global status (true or false).',
  })
  @ApiOkResponse({
    description: 'A list of reversal keywords.',
    type: [CreateReversalKeywordDto],
  })
  findAll(
    @Query('bankId', new ParseUUIDPipe({ optional: true, version: '4' }))
    bankId?: string,
    @Query('isGlobal', new ParseBoolPipe({ optional: true }))
    isGlobal?: boolean,
  ) {
    // We pass the query parameters to the service layer to handle the logic
    return this.reversalKeywordService.findAll({ bankId, isGlobal });
  }

  @Get(':id')
  @ApiOperation({ summary: 'Find a reversal keyword by ID' })
  @ApiOkResponse({
    description: 'The reversal keyword has been successfully found.',
    type: CreateReversalKeywordDto,
  })
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.reversalKeywordService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a reversal keyword by ID' })
  @ApiOkResponse({
    description: 'The reversal keyword has been successfully updated.',
    type: CreateReversalKeywordDto,
  })
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateReversalKeywordDto: UpdateReversalKeywordDto,
  ) {
    return this.reversalKeywordService.update(id, updateReversalKeywordDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a reversal keyword by ID' })
  @ApiOkResponse({
    description: 'The reversal keyword has been successfully deleted.',
  })
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.reversalKeywordService.remove(id);
  }
}
