import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateClassificationPatternDto {
  @ApiProperty({
    description: 'The keyword to classify',
    example: 'Commission On Turn Over',
  })
  @IsString()
  @IsNotEmpty()
  keyword: string; // or regex

  @ApiProperty({
    description: 'If true, the keyword is a regex pattern',
    example: false,
  })
  @IsBoolean()
  isRegex?: boolean;

  @ApiProperty({
    description: 'The bank ID this pattern applies to, if not global',
    example: '123e4567-e89b-12d3-a456-426614174000',
  })
  @IsUUID()
  bankId?: string;

  @ApiProperty({
    description: 'The classification ID this pattern applies to',
    example: '123e4567-e89b-12d3-a456-426614174001',
  })
  @IsUUID()
  classificationId: string;
}
export class FindAllPatternsFilters {
  bankId?: string; // optional, if not provided, will return global patterns
  isGlobal?: boolean; // true to filter global patterns
  classificationId?: string; // optional, to filter by specific classification
}
