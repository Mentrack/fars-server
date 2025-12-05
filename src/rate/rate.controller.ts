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
  ApiBody,
  ApiConsumes,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiProperty,
  ApiPropertyOptional,
  ApiTags,
} from '@nestjs/swagger';
import { Role } from 'src/auth/enum/role.enum';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { FileInterceptor } from '@nestjs/platform-express';
import { RequestWithUser } from 'src/auth/types/request-with-user';
import { UploadRateDocumentDto } from './dto/upload-rate-document.dto';
import * as Multer from 'multer';
import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { UpdateRateDocumentDto } from './dto/update-rate-document.dto';
import { FileUploadDto } from './dto/file-upload.dto';
import { UpdateFileUploadDto } from './dto/update-file-upload.dto';

@ApiBearerAuth()
@ApiTags('Bank Account Rates') // Group endpoints in Swagger UI
@Controller('rates')
export class RateController {
  constructor(private readonly rateService: RateService) {}

  // CREATE AND NEW RATE
  @ApiOperation({ summary: 'Create a new rate' })
  @ApiCreatedResponse({
    description: 'The rate has been successfully created.',
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

  // GET ALL RATE DOCUMENTS
  @ApiOperation({ summary: 'Get all rate documents' })
  @ApiOkResponse({
    description: 'List of all documents',
    type: [UploadRateDocumentDto],
  })
  @Get('documents')
  async getAllDocuments() {
    return await this.rateService.findAllDocuments();
  }

  // GET RATE BY CLIENT ID
  @ApiOperation({ summary: 'Get rates by Client ID' })
  @ApiOkResponse({
    description: 'The rates have been successfully retrieved.',
    type: [CreateRateResponseDto],
  })
  @Get('client/:clientId')
  async findByClientId(@Param('clientId', ParseUUIDPipe) clientId: string) {
    return await this.rateService.findByClientId(clientId);
  }

  // GET RATE BY BANK ID
  @ApiOperation({ summary: "Get a client's rates by Bank ID" })
  @ApiOkResponse({
    description: 'The rates have been successfully retrieved.',
    type: [CreateRateResponseDto],
  })
  @Get('client/:clientId/bank/:bankId')
  async findByBankId(
    @Param('clientId', ParseUUIDPipe) clientId: string,
    @Param('bankId', ParseUUIDPipe) bankId: string,
  ) {
    return await this.rateService.findByBankId(clientId, bankId);
  }

  // GET A CONTRACT DOCUMENT BY ID
  @ApiOperation({ summary: 'Get a document by ID' })
  @ApiOkResponse({
    description: 'The document has been successfully retrieved.',
    type: UploadRateDocumentDto,
  })
  @Get('document/:id')
  async getDocumentById(@Param('id', ParseUUIDPipe) id: string) {
    return await this.rateService.findDocumentById(id);
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

  // UPLOAD DOCUMENT FOR  RATE/RATES
  @ApiOperation({
    summary: 'Upload a document for rate/rates',
    description: 'Field name "file", metadata is a JSON string',
  })
  @ApiCreatedResponse({
    description: 'The document has been successfully uploaded.',
    type: UploadRateDocumentDto,
  })
  @Post('document')
  @ApiConsumes('multipart/form-data')
  @ApiBody({ type: FileUploadDto })
  @UseInterceptors(
    FileInterceptor('file', {
      storage: Multer.memoryStorage(),
      limits: { fileSize: 10 * 1024 * 1024 },
    }),
  )
  async uploadDocument(
    @UploadedFile() file: Express.Multer.File,
    @Body('metadata') metadata: string,
    @Request() req: RequestWithUser,
  ) {
    // Your existing validation and business logic remains correct
    // Check for missing file
    if (!file) {
      throw new BadRequestException(
        'The file is required and must be provided under the field name "file".',
      );
    }

    // Check for missing metadata string
    if (!metadata) {
      throw new BadRequestException(
        'The document metadata (as a JSON string) is required under the field name "metadata".',
      );
    }

    let parsed: any;
    try {
      parsed = JSON.parse(metadata);
    } catch (error) {
      throw new BadRequestException('Invalid JSON format for metadata.');
    }

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
  @ApiOperation({
    summary: 'Update a document for a rate',
    description:
      'Field name "file" is optional, "metadata" is a required JSON string for data updates.',
  })
  @ApiOkResponse({
    description: 'The document has been successfully updated.',
    type: UpdateRateDocumentDto,
  })
  @Patch('document/:id')
  @ApiConsumes('multipart/form-data')
  @ApiBody({ type: UpdateFileUploadDto })
  @UseInterceptors(
    FileInterceptor('file', {
      storage: Multer.memoryStorage(),
      limits: { fileSize: 10 * 1024 * 1024 },
    }),
  )
  async updateDocument(
    @Param('id', ParseUUIDPipe) id: string,
    @UploadedFile() file: Express.Multer.File,
    @Body('metadata') metadata: string,
  ) {
    // Check for missing metadata string required for updates
    if (!metadata) {
      throw new BadRequestException(
        'The document metadata (as a JSON string) is required under the field name "metadata".',
      );
    }

    let parsed: any;
    try {
      // Attempt to parse the metadata string
      parsed = JSON.parse(metadata);
    } catch (error) {
      // Catch invalid JSON format
      throw new BadRequestException('Invalid JSON format for metadata.');
    }

    // Validate metadata structure against DTO
    const updateRateDocumentDto = plainToInstance(
      UpdateRateDocumentDto,
      parsed,
    );

    const errors = await validate(updateRateDocumentDto);
    if (errors.length) {
      // This catches issues like missing required fields or incorrect types.
      throw new BadRequestException(errors);
    }

    // Pass the ID, the optional file (which will be null if not provided), and the DTO to the service
    return await this.rateService.updateRateDocument(
      id,
      file,
      updateRateDocumentDto,
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

  // ASSIGN DOCUMENT TO A RATE
  @ApiOperation({ summary: 'Assign a document to a rate' })
  @ApiOkResponse({
    description: 'The document has been successfully assigned to the rate.',
    type: UploadRateDocumentDto,
  })
  @Patch('document/:documentId/assign/:rateId')
  async assignDocument(
    @Param('documentId', ParseUUIDPipe) documentId: string,
    @Param('rateId', ParseUUIDPipe) rateId: string,
  ) {
    return await this.rateService.assignDocumentToRate(documentId, rateId);
  }

  // UNASSIGN DOCUMENT FROM A RATE
  @ApiOperation({ summary: 'Unassign a document from a rate' })
  @ApiOkResponse({
    description: 'The document has been successfully unassigned from the rate.',
    type: UploadRateDocumentDto,
  })
  @Patch('document/:documentId/unassign/:rateId')
  async unassignDocument(
    @Param('documentId', ParseUUIDPipe) documentId: string,
    @Param('rateId', ParseUUIDPipe) rateId: string,
  ) {
    return await this.rateService.unassignDocumentFromRate(documentId, rateId);
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
