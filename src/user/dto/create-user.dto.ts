import {
  IsArray,
  IsBoolean,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import { Role } from '../../user/enum/role.enum';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsOptional()
  avatarUrl: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsEnum(Role, { message: 'Valid role required' })
  @IsOptional()
  role: Role;

  @IsArray()
  @IsOptional()
  permissions: string[];

  @IsBoolean()
  @IsOptional()
  isActive: boolean;
}
