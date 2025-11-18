import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsUUID, ArrayMinSize } from 'class-validator';

export class DeleteTransactionsDto {
  @ApiProperty({
    description: 'Array of transaction IDs to delete.',
    example: [
      '123e4567-e89b-12d3-a456-426614174000',
      '2a8c5f90-1e2b-4d3c-8a7b-6c5d4e3f2a10',
    ],
    isArray: true,
  })
  @IsArray()
  @ArrayMinSize(1) // Ensures at least one ID is present
  @IsUUID('4', { each: true }) // Ensures every item in the array is a valid UUID
  ids: string[];
}

export class BulkDeleteResponseDto {
  @ApiProperty({
    example: 5,
    description: 'The number of transactions deleted.',
  })
  deletedCount: number;

  @ApiProperty({
    example: '5 transactions deleted successfully.',
    description: 'Confirmation message.',
  })
  message: string;
}
