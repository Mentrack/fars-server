import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsJWT, IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class LoginRequestDto {
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  @ApiProperty({ description: 'User email', example: 'rose360@gmail.com' })
  email: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description:
      'Password must include uppercase, lowercase, number, special character, and be at least 8 characters',
    example: '@iRose2025',
  })
  password: string;
}

export class LoginResponseDto {
  @IsString()
  @IsUUID()
  @ApiProperty({
    example: '6f8d38b4-3b2f-4617-bb48-383a3cbba1eb',
  })
  id: string;

  @IsString()
  @IsJWT()
  @ApiProperty({
    example:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhMmY4MGFkMy1mMDAxLTRhNWUtODFmYS03ZGRhN2ZiOWUwMzEiLCJpYXQiOjE3NDYxOTE0NjYsImV4cCI6MTc0NjE5NTA2Nn0.pnGyFGnkFzQaeIwtXgdC7qxuxs6Av5bKAUiRULuUzrQ',
  })
  accessToken: string;

  @IsString()
  @IsJWT()
  @ApiProperty({
    example:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhMmY4MGFkMy1mMDAxLTRhNWUtODFmYS03ZGRhN2ZiOWUwMzEiLCJpYXQiOjE3NDYxOTE0NjYsImV4cCI6MTc0NjE5NTA2Nn0.pnGyFGnkFzQaeIwtXgdC7qxuxs6Av5bKAUiRULuUzrQ',
  })
  refreshToken: string;
}
