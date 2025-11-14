import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateFileUploadDto {
  @ApiPropertyOptional({
    type: 'string',
    format: 'binary',
    description:
      'Optional: New file to replace the existing one (e.g., PDF, DOCX).',
  })
  file?: any;

  @ApiPropertyOptional({
    type: 'string',
    description:
      'Metadata for the document (partial update allowed) as a JSON string (e.g., {"rateIds":[ "123e4567-e89b-12d3-a456-426614174000"]}).',
  })
  metadata: string;
}
