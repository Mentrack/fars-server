import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  Matches,
  MinLength,
} from 'class-validator';

export class CreateClientDto {
  @ApiProperty({ description: 'First name of the client', example: 'John' })
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  firstName: string;

  @ApiProperty({ description: 'Last name of the client', example: 'Doe' })
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  lastName: string;

  @ApiProperty({
    description: 'Company name of the client',
    example: 'Tech Corp',
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  companyName: string;

  @ApiProperty({ description: 'Address of the client', example: '123 Main St' })
  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  address?: string;

  @ApiProperty({
    description: 'Email of the client',
    example: 'info@techcorp.com',
  })
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    description: 'Phone number of the client',
    example: '+2347012345678',
  })
  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  @Matches(/^(?:0|\+234)(7|8|9)[01]\d{8}$/, {
    message: 'Phone number must be a valid Nigerian mobile number',
  })
  phone?: string;

  @ApiProperty({
    description: 'Password of the client',
    example: 'password123',
  })
  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  country?: string;

  @ApiProperty({ description: 'State of the client', example: 'Lagos' })
  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  state?: string;

  @ApiProperty({ description: 'City of the client', example: 'Ikeja' })
  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  city?: string;
}
