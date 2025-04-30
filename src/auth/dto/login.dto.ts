import { IsEmail, IsJWT, IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class LoginDto {
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
export class LoginResponseDto {
  @IsString()
  @IsUUID()
  id: string;

  @IsString()
  @IsJWT()
  accessToken: string;

  @IsString()
  @IsJWT()
  refreshToken: string;
}
