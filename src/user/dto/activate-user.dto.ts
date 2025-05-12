import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class ActivateUserResponseDto {
  @ApiProperty({
    description: 'Message indicating the result of the activation',
    example: 'User has been successfully activated',
  })
  @IsString()
  message: string;
}
