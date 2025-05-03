import { ApiProperty } from '@nestjs/swagger';
import { IsJWT, IsString, IsUUID } from 'class-validator';

export class RefreshAccessTokenResponseDto {
  @ApiProperty({
    example: 'a2f80ad3-f001-4a5e-81fa-7dda7fb9e031',
  })
  @IsString()
  @IsUUID()
  id: string;

  @ApiProperty({
    example:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhMmY4MGFkMy1mMDAxLTRhNWUtODFmYS03ZGRhN2ZiOWUwMzEiLCJpYXQiOjE3NDYxOTE0NjYsImV4cCI6MTc0NjE5NTA2Nn0.pnGyFGnkFzQaeIwtXgdC7qxuxs6Av5bKAUiRULuUzrQ',
  })
  @IsJWT()
  @IsString()
  accessToken: string;

  @ApiProperty({
    example:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhMmY4MGFkMy1mMDAxLTRhNWUtODFmYS03ZGRhN2ZiOWUwMzEiLCJpYXQiOjE3NDYxOTE0NjYsImV4cCI6MTc0NjE5NTA2Nn0.pnGyFGnkFzQaeIwtXgdC7qxuxs6Av5bKAUiRULuUzrQ',
  })
  @IsJWT()
  @IsString()
  refreshToken: string;
}
