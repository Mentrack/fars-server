import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseUUIDPipe,
  Query,
  ParseBoolPipe,
} from '@nestjs/common';
import { ClassificationPatternService } from './classification-pattern.service';
import { CreateClassificationPatternDto } from './dto/create-classification-pattern.dto';
import { UpdateClassificationPatternDto } from './dto/update-classification-pattern.dto';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiQuery,
} from '@nestjs/swagger';

@ApiBearerAuth()
@Controller('classification-patterns')
export class ClassificationPatternController {
  constructor(
    private readonly classificationPatternService: ClassificationPatternService,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Create a new classification pattern' })
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: CreateClassificationPatternDto,
  })
  create(
    @Body() createClassificationPatternDto: CreateClassificationPatternDto,
  ) {
    return this.classificationPatternService.create(
      createClassificationPatternDto,
    );
  }

  @Get()
  @ApiOperation({ summary: 'Find all classification patterns' })
  @ApiQuery({
    name: 'isGlobal',
    required: false,
    type: Boolean,
    description:
      'Filter patterns based on their global status (true or false).',
  })
  @ApiQuery({
    name: 'bankId',
    required: false,
    type: String,
    description: 'Filter patterns by a specific bank ID.',
  })
  @ApiQuery({
    name: 'classificationId',
    required: false,
    type: String,
    description: 'Filter patterns by a specific classification ID.',
  })
  @ApiOkResponse({
    description: 'A list of classification patterns.',
    type: [CreateClassificationPatternDto],
  })
  findAll(
    @Query('bankId', new ParseUUIDPipe({ optional: true, version: '4' }))
    bankId?: string,
    @Query(
      'classificationId',
      new ParseUUIDPipe({ optional: true, version: '4' }),
    )
    classificationId?: string,
    @Query('isGlobal', new ParseBoolPipe({ optional: true }))
    isGlobal?: boolean,
  ) {
    return this.classificationPatternService.findAll({
      isGlobal,
      bankId,
      classificationId,
    });
  }

  @Get(':id')
  @ApiOperation({ summary: 'Find a classification pattern by ID' })
  @ApiOkResponse({
    description: 'The record has been successfully retrieved.',
    type: CreateClassificationPatternDto,
  })
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.classificationPatternService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update classification pattern by ID' })
  @ApiOkResponse({
    description: 'The record has been successfully updated.',
    type: CreateClassificationPatternDto,
  })
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateClassificationPatternDto: UpdateClassificationPatternDto,
  ) {
    return this.classificationPatternService.update(
      id,
      updateClassificationPatternDto,
    );
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete classification pattern by ID' })
  @ApiOkResponse({
    description: 'The classification pattern has been successfully deleted.',
  })
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.classificationPatternService.remove(id);
  }
}
