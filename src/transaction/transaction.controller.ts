import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  ParseUUIDPipe,
  UploadedFile,
  Query,
  Res,
  Request,
  DefaultValuePipe,
  ParseIntPipe,
} from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { BatchItem, ClassifyBatchDto } from './dto/classify-batch.dto';
import * as Multer from 'multer';
import { Response } from 'express';
import {
  CreateTransactionArrayDto,
  CreateTransactionResponseDto,
} from './dto/create-transaction.dto';
import { RequestWithUser } from 'src/auth/types/request-with-user';
import {
  ApiBearerAuth,
  ApiBody,
  ApiConsumes,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiQuery,
} from '@nestjs/swagger';
import { UploadTransactionResponseDto } from './dto/upload-transaction.dto';

@ApiBearerAuth()
@Controller('transactions')
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  // ✅ 1. Create transactions
  @ApiOperation({ summary: 'Create transactions' })
  @ApiCreatedResponse({
    description: 'Transactions created successfully',
    type: [CreateTransactionResponseDto],
  })
  @ApiBody({
    type: CreateTransactionArrayDto,
    isArray: true,
  })
  @Post(':accountId/create')
  async create(
    @Param('accountId', ParseUUIDPipe) accountId: string,
    @Body() createTransactionsDto: CreateTransactionArrayDto,
    @Request() req: RequestWithUser,
  ) {
    return this.transactionService.createTransctions(
      accountId,
      req.user.id,
      createTransactionsDto.items,
    );
  }

  // ✅ 2. Upload & Process
  @ApiOperation({
    summary: 'Upload and process transactions from bank statement',
  })
  @ApiCreatedResponse({
    description: 'Transactions uploaded and processed successfully',
    type: [UploadTransactionResponseDto],
  })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  @Post(':accountId/upload')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: Multer.memoryStorage(), // Store file in memory
      limits: { fileSize: 10 * 1024 * 1024 }, // optional: limit to 10MB
    }),
  )
  async uploadFile(
    @Param('accountId', ParseUUIDPipe) accountId: string,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return this.transactionService.uploadAndProcess(accountId, file);
  }

  // ✅ 3. Get One Transaction
  @ApiOperation({ summary: 'Get a single transaction by ID' })
  @ApiOkResponse({
    description: 'Get a single transaction by ID',
    type: CreateTransactionResponseDto,
  })
  @Get(':id')
  async findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.transactionService.findOne(id);
  }

  // ✅ 4. Get All Processed
  @ApiOperation({ summary: 'Get all transactions for an account' })
  @ApiOkResponse({
    description: 'Get all transactions for an account successfully',
    type: [CreateTransactionResponseDto],
  })
  @ApiQuery({
    name: 'from',
    required: false,
    type: String,
    example: '2023-01-01',
  })
  @ApiQuery({
    name: 'to',
    required: false,
    type: String,
    example: '2023-12-31',
  })
  @ApiQuery({
    name: 'classificationId',
    required: false,
    type: String,
    example: '123e4567-e89b-12d3-a456-426614174000',
  })
  @ApiQuery({ name: 'page', required: false, type: Number, example: 1 })
  @ApiQuery({ name: 'limit', required: false, type: Number, example: 50 })
  @Get(':accountId/all')
  async findAll(
    @Param('accountId', ParseUUIDPipe) accountId: string,
    @Query('from') from?: string,
    @Query('to') to?: string,
    @Query('classificationId') classificationId?: string,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page?: number,
    @Query('limit', new DefaultValuePipe(50), ParseIntPipe) limit?: number,
  ) {
    return this.transactionService.findAll(accountId, {
      from,
      to,
      classificationId,
      page,
      limit,
    });
  }

  // ✅ 5. Export
  @ApiOperation({ summary: 'Export transactions to CSV or XLSX' })
  @ApiOkResponse({
    description: 'Transactions exported successfully',
    type: String, // This will be a file download, so we use String for the response type
  })
  @ApiQuery({
    name: 'format',
    required: false,
    type: String,
    example: 'csv',
  })
  @Get(':accountId/export')
  async export(
    @Param('accountId', ParseUUIDPipe) accountId: string,
    @Query('format', new DefaultValuePipe('csv'))
    format: 'csv' | 'xlsx' = 'csv',
    @Res() res: Response,
  ) {
    const file = await this.transactionService.exportTransactions(
      accountId,
      format,
    );

    if (format === 'csv') {
      res.setHeader('Content-Type', 'text/csv');
      res.setHeader(
        'Content-Disposition',
        'attachment; filename=transactions.csv',
      );
      res.send(file);
    } else {
      res.setHeader(
        'Content-Type',
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      );
      res.setHeader(
        'Content-Disposition',
        'attachment; filename=transactions.xlsx',
      );
      res.send(file);
    }
  }

  // ✅ 6. Batch Classify
  @ApiOperation({ summary: 'Batch classify transactions' })
  @ApiOkResponse({
    description: 'Batch classify transactions successfully',
    type: [CreateTransactionResponseDto],
  })
  @ApiBody({
    type: BatchItem,
    isArray: true,
    examples: {
      example1: {
        summary: 'Example batch classification',
        value: {
          items: [
            {
              transactionId: '123e4567-e89b-12d3-a456-426614174001',
              classificationId: '123e4567-e89b-12d3-a456-426614174000',
            },
            {
              transactionId: '223e4567-e89b-12d3-a456-426614174002',
              classificationId: '223e4567-e89b-12d3-a456-426614174003',
            },
          ],
        },
      },
    },
  })
  @Patch('classify-batch')
  async batchClassify(@Body() dto: ClassifyBatchDto) {
    return this.transactionService.batchClassify(dto);
  }

  // ✅ 7. update transaction
  @ApiOperation({ summary: 'Update a transaction' })
  @ApiOkResponse({
    description: 'Transaction updated successfully',
    type: CreateTransactionResponseDto,
  })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTransactionDto: UpdateTransactionDto,
  ) {
    return this.transactionService.update(id, updateTransactionDto);
  }

  // ✅ 8. Delete transaction
  @ApiOperation({ summary: 'Delete a transaction' })
  @ApiOkResponse({
    description: 'Transaction deleted successfully',
    type: CreateTransactionResponseDto,
  })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.transactionService.remove(id);
  }
}
