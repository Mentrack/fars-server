import { Controller, Post, Body } from '@nestjs/common';
import { AnalysisService } from './analysis.service';
import { PerformAnalysisDto } from './dto/perform-analysis.dto';
import { ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
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
}
