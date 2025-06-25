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
} from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { ReclassifyTransactionDto } from './dto/reclassify-transaction.dto';
import { ClassifyBatchDto } from './dto/classify-batch.dto';
import { FlagTransactionDto } from './dto/flag-transaction.dto';
import * as Multer from 'multer';

@Controller('transactions')
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  // ✅ 1. Upload & Process
  @Post('upload/:accountId')
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

  // ✅ 2. Reprocess
  @Post('reprocess/:accountId')
  async reprocess(@Param('accountId', ParseUUIDPipe) accountId: string) {
    return this.transactionService.reprocessTransactions(accountId);
  }

  // ✅ 3. Get All Processed
  @Get(':accountId')
  async findAll(
    @Param('accountId', ParseUUIDPipe) accountId: string,
    @Query('from') from?: string,
    @Query('to') to?: string,
    @Query('classification') classification?: string,
    @Query('flagged') flagged?: boolean,
  ) {
    return this.transactionService.findAll(accountId, {
      from,
      to,
      classification,
      flagged,
    });
  }

  // ✅ 4. Get Raw
  @Get('raw/:accountId')
  async getRaw(@Param('accountId', ParseUUIDPipe) accountId: string) {
    return this.transactionService.getRaw(accountId);
  }

  // ✅ 5. Get Flags Only
  @Get(':accountId/flags')
  async getFlags(@Param('accountId', ParseUUIDPipe) accountId: string) {
    return this.transactionService.getFlags(accountId);
  }

  // ✅ 6. Get Single
  @Get('single/:id')
  async findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.transactionService.findOne(id);
  }

  // ✅ 7. Manual Classify
  @Patch(':id/classify')
  async reclassify(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: ReclassifyTransactionDto,
  ) {
    return this.transactionService.reclassify(id, dto);
  }

  // ✅ 8. Batch Classify
  @Post('classify-batch')
  async batchClassify(@Body() dto: ClassifyBatchDto) {
    return this.transactionService.batchClassify(dto);
  }

  // ✅ 9. Flag
  @Patch(':id/flag')
  async flag(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: FlagTransactionDto,
  ) {
    return this.transactionService.flagTransaction(id, dto);
  }

  // ✅ 10. Unflag
  @Patch(':id/unflag')
  async unflag(@Param('id', ParseUUIDPipe) id: string) {
    return this.transactionService.unflagTransaction(id);
  }

  // ✅ 11. Export
  @Get(':accountId/export')
  async export(@Param('accountId', ParseUUIDPipe) accountId: string) {
    return this.transactionService.exportTransactions(accountId);
  }

  @Post()
  create(@Body() createTransactionDto: CreateTransactionDto) {
    return this.transactionService.create(createTransactionDto);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTransactionDto: UpdateTransactionDto,
  ) {
    return this.transactionService.update(id, updateTransactionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.transactionService.remove(id);
  }
}
