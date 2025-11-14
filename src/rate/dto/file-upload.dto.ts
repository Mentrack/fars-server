import { ApiProperty } from '@nestjs/swagger';

export class FileUploadDto {
  @ApiProperty({
    type: 'string',
    format: 'binary',
    description: 'The file to upload (e.g., PDF, DOCX).',
  })
  file: any; // Type for the file

  @ApiProperty({
    type: 'string',
    description:
      'Metadata for the file as a JSON string (e.g., {"title": "Contract Policy", "rateIds":[ "123e4567-e89b-12d3-a456-426614174000","123e4567-e89b-12d3-a456-426614174001"]}).',
  })
  metadata: string; // Type for the metadata string
}
