import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString } from 'class-validator';

export class AccessErrorResponseDto {
  @ApiProperty({
    example: 'Invalid credentials',
  })
  @IsString()
  message: string;

  @ApiProperty({
    example: 'Unauthorized',
  })
  @IsString()
  error: string;

  @ApiProperty({
    example: 401,
  })
  @IsInt()
  statusCode: number;
}
