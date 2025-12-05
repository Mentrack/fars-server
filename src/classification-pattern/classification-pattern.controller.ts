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
} from '@nestjs/common';
import { ClassificationPatternService } from './classification-pattern.service';
import { CreateClassificationPatternDto } from './dto/create-classification-pattern.dto';
import { UpdateClassificationPatternDto } from './dto/update-classification-pattern.dto';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiExtraModels,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { FindAllPatternsQueryDto } from './dto/find-all-patterns.dto';

@ApiBearerAuth()
@ApiTags('Classification Patterns') // Group endpoints in Swagger UI
@Controller('classification-patterns')
// Ensure Swagger knows about the DTOs used in type definitions
@ApiExtraModels(CreateClassificationPatternDto, FindAllPatternsQueryDto)
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
  @ApiOperation({
    summary: 'Find all classification patterns with pagination and filtering',
  })
  @ApiOkResponse({
    description: 'A paginated list of classification patterns.',
    // Assuming you want to return a list of the Create DTOs:
    type: [CreateClassificationPatternDto],
  })
  findAll(@Query() query: FindAllPatternsQueryDto) {
    const { page, limit, ...filters } = query;
    const skip = (page - 1) * limit;

    return this.classificationPatternService.findAll(filters, skip, limit);
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
