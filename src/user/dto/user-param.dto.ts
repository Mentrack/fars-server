import { IsString, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UserParamDto {
  @ApiProperty({
    description: 'User ID',
    example: '6f8d38b4-3b2f-4617-bb48-383a3cbba1eb',
  })
  @IsString()
  @IsUUID()
  id: string;
}
