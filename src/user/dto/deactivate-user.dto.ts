import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class DeactivateUserDto {
  @ApiProperty({
    description: 'Reason for deactivation',
    example: 'User requested deactivation',
  })
  @IsString()
  @IsNotEmpty()
  reason: string;
}

export class DeactivateUserResponseDto {
  @ApiProperty({
    description: 'Message indicating the result of the deactivation',
    example: 'User has been successfully deactivated',
  })
  @IsString()
  message: string;
}
