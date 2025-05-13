import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class UnassignStaffDto {
  @ApiProperty({
    description:
      'The ID of the bank account to which the user is being unassigned',
    example: '123e4567-e89b-12d3-a456-426614174001',
  })
  @IsString()
  @IsNotEmpty()
  @IsUUID()
  accountId: string;
}

export class UnassignStaffResponseDto {
  @ApiProperty({
    description:
      'The message indicating the result of the unassignment operation',
    example: 'Staff unassigned successfully',
  })
  @IsString()
  message: string;
}
