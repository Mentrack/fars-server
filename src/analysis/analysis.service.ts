import { Injectable, NotFoundException } from '@nestjs/common';
import { PerformAnalysisDto } from './dto/perform-analysis.dto';
import { DatabaseService } from 'src/database/database.service';
import { CamfAnalyzer } from './strategies/camf.strategy';

@Injectable()
export class AnalysisService {
  constructor(private readonly db: DatabaseService) {}

  async performAnalysis(dto: PerformAnalysisDto) {
    if (dto.type === 'CAMF') {
      const analyzer = new CamfAnalyzer(this.db);
      return analyzer.compute(dto.bankAccounts);
    }

    throw new NotFoundException(`Unsupported analysis type: ${dto.type}`);
  }
}
