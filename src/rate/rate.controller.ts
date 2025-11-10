import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseUUIDPipe,
  UseInterceptors,
  UploadedFile,
  Request,
  BadRequestException,
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
import { FileInterceptor } from '@nestjs/platform-express';
import { RequestWithUser } from 'src/auth/types/request-with-user';
import { UploadRateDocumentDto } from './dto/upload-rate-document.dto';
import * as Multer from 'multer';
import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';

@ApiBearerAuth()
@Controller('rates')
export class RateController {
  constructor(private readonly rateService: RateService) {}

  // CREATE AND NEW RATE
  @ApiOperation({ summary: 'Create a new contract' })
  @ApiCreatedResponse({
    description: 'The contract has been successfully created.',
    type: CreateRateResponseDto,
  })
  @Post()
  async create(@Body() createRateDto: CreateRateDto) {
    return await this.rateService.create(createRateDto);
  }

  // GET ALL RATES
  @ApiOperation({ summary: 'Get all rates' })
  @ApiOkResponse({
    description: 'List of all rates',
    type: [CreateRateResponseDto],
  })
  @Get()
  async findAll() {
    return await this.rateService.findAll();
  }

  // GET ALL CONTRACTS DOCUMENTS
  @ApiOperation({ summary: 'Get all contracts documents' })
  @ApiOkResponse({
    description: 'List of all documents',
    type: [UploadRateDocumentDto],
  })
  @Get('contract-documents')
  async getAllDocuments() {
    return await this.rateService.findAllDocuments();
  }

  // GET RATE BY ID
  @ApiOperation({ summary: 'Get a rate by ID' })
  @ApiOkResponse({
    description: 'The rate has been successfully retrieved.',
    type: CreateRateResponseDto,
  })
  @Get(':id')
  async findOne(@Param('id', ParseUUIDPipe) id: string) {
    return await this.rateService.findOne(id);
  }

  // UPDATE RATE BY ID
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

  // DELETE RATE BY ID
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

  // UPLOAD DOCUMENTS FOR A RATE
  @ApiOperation({
    summary: 'Upload a document for a rate: field name "file"',
  })
  @ApiCreatedResponse({
    description: 'The document has been successfully uploaded.',
    type: UploadRateDocumentDto,
  })
  @Post('upload-document')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: Multer.memoryStorage(), // Store file in memory
      limits: { fileSize: 10 * 1024 * 1024 }, // optional: limit to 10MB
    }),
  )
  async uploadDocument(
    @UploadedFile() file: Express.Multer.File,
    @Body('metadata') metadata: string,
    @Request() req: RequestWithUser,
  ) {
    const parsed = JSON.parse(metadata);

    // Validate using DTO
    const uploadRateDocumentDto = plainToInstance(
      UploadRateDocumentDto,
      parsed,
    );
    const errors = await validate(uploadRateDocumentDto);
    if (errors.length) {
      throw new BadRequestException(errors);
    }

    return await this.rateService.uploadRateDocument(
      file,
      uploadRateDocumentDto,
      req.user.id,
    );
  }

  // UPDATE DOCUMENTS FOR A RATE
  @ApiOperation({ summary: 'Update a document for a rate' })
  @ApiOkResponse({
    description: 'The document has been successfully updated.',
    type: UploadRateDocumentDto,
  })
  @Patch('document/:id')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: Multer.memoryStorage(), // Store file in memory
      limits: { fileSize: 10 * 1024 * 1024 }, // optional: limit to 10MB
    }),
  )
  async updateDocument(
    @Param('id', ParseUUIDPipe) id: string,
    @UploadedFile() file: Express.Multer.File,
    @Body('metadata') metadata: string,
  ) {
    const parsed = JSON.parse(metadata);

    // Validate using DTO
    const uploadRateDocumentDto = plainToInstance(
      UploadRateDocumentDto,
      parsed,
    );
    const errors = await validate(uploadRateDocumentDto);
    if (errors.length) {
      throw new BadRequestException(errors);
    }

    return await this.rateService.updateRateDocument(
      id,
      file,
      uploadRateDocumentDto,
    );
  }

  // GET ALL DOCUMENTS FOR A RATE
  @ApiOperation({ summary: 'Get all documents for a rate' })
  @ApiOkResponse({
    description: 'List of all documents for the specified rate',
    type: [UploadRateDocumentDto],
  })
  @Get(':rateId/documents')
  async getDocuments(@Param('rateId', ParseUUIDPipe) rateId: string) {
    return await this.rateService.findAllRateDocuments(rateId);
  }

  // DELETE A CONTRACT DOCUMENT BY ID
  @ApiOperation({ summary: 'Delete a document by ID' })
  @ApiOkResponse({
    description: 'The document has been successfully deleted.',
    type: UploadRateDocumentDto,
  })
  @Delete('document/:id')
  async deleteDocument(@Param('id', ParseUUIDPipe) id: string) {
    return await this.rateService.deleteDocument(id);
  }
}
