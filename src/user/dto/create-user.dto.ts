import {
  IsArray,
  IsBoolean,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  Matches,
  MinLength,
} from 'class-validator';
import { Role } from '../../user/enum/role.enum';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { UserRole } from '@prisma/client';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'First name of the user', example: 'John' })
  firstName: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Last name of the user', example: 'Doe' })
  lastName: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @ApiProperty({
    description: 'Username must be at least 3 characters long',
    example: 'STAFF0001',
  })
  username: string;

  @IsString()
  @IsEmail()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Email must be a valid email address',
    example: 'example@mail.com',
  })
  email: string;

  @ApiPropertyOptional({
    description: 'Phone number must be a valid Nigerian mobile number',
    example: '+2347012345678',
  })
  @IsString()
  @IsOptional()
  @Matches(/^(?:0|\+234)(7|8|9)[01]\d{8}$/, {
    message: 'Phone number must be a valid Nigerian mobile number',
  })
  phone?: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({
    description: 'User avatar URL',
    default:
      'https://gravatar.com/avatar/48c3863a0f03a81d67916d28fdaa0ea6?s=400&d=mp&r=pg',
  })
  avatarUrl?: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  @Matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    {
      message:
        'Password must include uppercase, lowercase, number, special character, and be at least 8 characters',
    },
  )
  @ApiProperty({
    description:
      'Password must include uppercase, lowercase, number, special character, and be at least 8 characters',
    example: 'P@ssw0rd123',
  })
  password: string;

  @IsEnum(Role, { message: 'Valid role required' })
  @IsOptional()
  @ApiPropertyOptional({
    description: 'User role',
    enum: Role,
    default: Role.STAFF,
  })
  role?: UserRole;

  @IsArray()
  @IsOptional()
  @ApiPropertyOptional({
    description: 'User permissions',
    type: [String],
    example: ['VIEW_CLIENTS', 'EDIT_TRANSACTIONS'],
  })
  permissions?: string[];

  @IsBoolean()
  @IsOptional()
  @ApiPropertyOptional({
    description: 'Is user active',
    default: true,
  })
  isActive?: boolean;
}

// The CreateUserResponseDto is used to define the structure of the response
export class CreateUserResponseDto {
  @IsString()
  @ApiProperty({ example: 'John' })
  firstName: string;

  @IsString()
  @ApiProperty({ example: 'Doe' })
  lastName: string;

  @IsString()
  @ApiProperty({
    example: 'STAFF0001',
  })
  username: string;

  @IsString()
  @IsEmail()
  @ApiProperty({
    example: 'example@mail.com',
  })
  email: string;

  @ApiPropertyOptional({
    example: '+2347012345678',
  })
  @IsString()
  @IsOptional()
  phone?: string;

  @IsString()
  @ApiPropertyOptional({
    example:
      'https://gravatar.com/avatar/48c3863a0f03a81d67916d28fdaa0ea6?s=400&d=mp&r=pg',
  })
  avatarUrl: string;

  @IsEnum(Role, { message: 'Valid role required' })
  @ApiPropertyOptional({
    example: Role.STAFF,
  })
  role: Role;

  @IsArray()
  @ApiPropertyOptional({
    example: ['VIEW_CLIENTS', 'EDIT_TRANSACTIONS'],
  })
  permissions: string[];

  @IsBoolean()
  @IsOptional()
  @ApiPropertyOptional({
    example: true,
  })
  isActive: boolean;

  @ApiPropertyOptional({
    description:
      'Only on POST /users. false means the account was created but the credentials email failed; the user should use "forgot password".',
    example: true,
  })
  welcomeEmailSent?: boolean;
}
