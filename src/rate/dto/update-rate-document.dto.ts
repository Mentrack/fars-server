import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsUUID, IsArray } from 'class-validator';

export class UpdateRateDocumentDto {
  @ApiPropertyOptional({ example: 'Policy File' })
  @IsString()
  title?: string;

  @ApiPropertyOptional({
    example: [
      '123e4567-e89b-12d3-a456-426614174000',
      '123e4567-e89b-12d3-a456-426614174001',
    ],
  })
  @IsArray()
  @IsUUID('all', { each: true })
  rateIds?: string[];
}
export class UpdateRateDocumentResponseDto {
  @ApiProperty({
    example: 'Document updated successfully',
  })
  message: string;

  @ApiProperty({
    example: 'RDC-123456',
  })
  documentCode: string;

  @ApiProperty({
    example: 'https://example.com/document.pdf',
  })
  documentUrl: string;
}
