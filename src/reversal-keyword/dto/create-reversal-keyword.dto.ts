import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateReversalKeywordDto {
  @ApiProperty({
    description: 'Keyword to match for reversals',
    example: 'REVERSE',
  })
  @IsNotEmpty()
  @IsString()
  keyword: string;

  @ApiProperty({ description: 'If true, applies to all banks', example: true })
  @IsBoolean()
  isGlobal?: boolean;

  @ApiPropertyOptional({
    description: 'Optional bank ID if not global',
    example: '123e4567-e89b-12d3-a456-426614174000',
  })
  @IsUUID()
  bankId?: string;
}
