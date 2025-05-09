import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateClientResponseDto {
  @ApiProperty({ example: 'John' })
  @ApiPropertyOptional()
  @IsString()
  firstName: string;

  @ApiProperty({ example: 'Doe' })
  @ApiPropertyOptional()
  @IsString()
  lastName: string;

  @ApiProperty({
    example: 'Tech Corp',
  })
  @ApiPropertyOptional()
  @IsString()
  companyName: string;

  @ApiProperty({ example: '123 Main St' })
  @ApiPropertyOptional()
  @IsString()
  address: string;

  @ApiProperty({
    example: 'info@techcorp.com',
  })
  @ApiPropertyOptional()
  @IsString()
  email: string;

  @ApiProperty({
    example: '+2347012345678',
  })
  @ApiPropertyOptional()
  @IsString()
  phone: string;

  @ApiProperty({
    example: 'password123',
  })
  @ApiPropertyOptional()
  @IsString()
  country: string;

  @ApiProperty({ example: 'Lagos' })
  @ApiPropertyOptional()
  @IsString()
  state: string;

  @ApiProperty({ example: 'Ikeja' })
  @ApiPropertyOptional()
  @IsString()
  city: string;
}
