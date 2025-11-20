import { Injectable, NotFoundException } from '@nestjs/common';
import { PerformAnalysisDto } from './dto/perform-analysis.dto';
import { DatabaseService } from 'src/database/database.service';
import { CamfAnalyzer } from './strategies/camf.strategy';

@Injectable()
export class AnalysisService {
  constructor(private readonly databaseService: DatabaseService) {}

  async performAnalysis(dto: PerformAnalysisDto) {
    if (dto.type === 'CAMF') {
      const analyzer = new CamfAnalyzer(this.databaseService);
      return analyzer.compute(dto.bankAccounts);
    }

    throw new NotFoundException(`Unsupported analysis type: ${dto.type}`);
  }

  async getAllAnalysisTypes(dto: { isActive?: boolean }) {
    const whereClause = {
      // If dto.isActive is true or false (boolean), it's included.
      // If dto.isActive is undefined (i.e., not supplied in the query),
      // the property is omitted from the object, and Prisma returns all.
      isActive: dto.isActive,
    };

    // Clean up 'undefined' properties before passing to Prisma
    const finalWhereClause = Object.fromEntries(
      Object.entries(whereClause).filter(([, v]) => v !== undefined),
    );

    return this.databaseService.analysisType.findMany({
      where: finalWhereClause,
    });
  }
}
