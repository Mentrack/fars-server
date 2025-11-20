import {
  Controller,
  Post,
  Body,
  Get,
  Query,
  ParseBoolPipe,
} from '@nestjs/common';
import { AnalysisService } from './analysis.service';
import { PerformAnalysisDto } from './dto/perform-analysis.dto';
import { ApiBearerAuth, ApiOperation, ApiQuery } from '@nestjs/swagger';
@ApiBearerAuth()
@Controller('analysis')
export class AnalysisController {
  constructor(private readonly analysisService: AnalysisService) {}

  @ApiOperation({
    summary: 'Perform analysis on account transactions',
    description:
      'This endpoint performs analysis on account transactions based on the provided type.',
  })
  @Post('perform')
  async performAnalysis(@Body() dto: PerformAnalysisDto) {
    return this.analysisService.performAnalysis(dto);
  }

  // GET ALL ANALYSIS TYPES
  @ApiOperation({
    summary: 'Get all available analysis types',
    description:
      'This endpoint retrieves all available analysis types that can be performed.',
  })
  @ApiQuery({ name: 'isActive', required: false, type: Boolean })
  @Get('types')
  async getAllAnalysisTypes(
    @Query('isActive', new ParseBoolPipe()) isActive?: boolean,
  ) {
    return this.analysisService.getAllAnalysisTypes({ isActive });
  }
}
