import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class AssignStaffDto {
  @ApiProperty({
    description: 'The ID of the user to be assigned',
    example: '123e4567-e89b-12d3-a456-426614174000',
  })
  @IsString()
  @IsNotEmpty()
  @IsUUID()
  userId: string;

  @ApiProperty({
    description:
      'The ID of the bank account to which the user is being assigned',
    example: '123e4567-e89b-12d3-a456-426614174001',
  })
  @IsString()
  @IsNotEmpty()
  @IsUUID()
  accountId: string;
}

export class AssignStaffResponseDto {
  @ApiProperty({
    description:
      'The message indicating the result of the assignment operation',
    example: 'Staff assigned successfully',
  })
  @IsString()
  message: string;
}
