// src/classification-pattern/dto/find-all-patterns.dto.ts

import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsInt, IsOptional, Min, IsUUID, IsBoolean } from 'class-validator';
import { FindAllPatternsFilters } from './create-classification-pattern.dto';

export class PaginationParamsDto {
  @ApiPropertyOptional({
    description: 'The page number to fetch (1-based index)',
    default: 1,
    minimum: 1,
  })
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @IsOptional()
  page: number = 1; // <-- Set the default here

  @ApiPropertyOptional({
    description: 'The number of items per page',
    default: 10,
    minimum: 1,
  })
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @IsOptional()
  limit: number = 10; // <-- Set the default here
}

// Extend the PaginationParamsDto with your existing filters
export class FindAllPatternsQueryDto extends PaginationParamsDto {
  @ApiPropertyOptional({
    description: 'Filter patterns by a specific bank ID.',
    type: String,
  })
  @IsUUID('4')
  @IsOptional()
  bankId?: string;

  @ApiPropertyOptional({
    description:
      'Filter patterns based on their global status (true or false).',
    type: Boolean,
  })
  @Type(() => Boolean)
  @IsBoolean()
  @IsOptional()
  isGlobal?: boolean;

  @ApiPropertyOptional({
    description: 'Filter patterns by a specific classification ID.',
    type: String,
  })
  @IsUUID('4')
  @IsOptional()
  classificationId?: string;
}
