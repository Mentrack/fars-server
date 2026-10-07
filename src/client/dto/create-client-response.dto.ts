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

  @ApiProperty({
    example:
      'https://gravatar.com/avatar/48c3863a0f03a81d67916d28fdaa0ea6?s=400&d=mp&r=pg',
  })
  @ApiPropertyOptional()
  @IsString()
  avatarUrl?: string;

  @ApiPropertyOptional({
    description:
      'Only on POST /clients. false means the login was created but the credentials email failed; the client should use "forgot password".',
    example: true,
  })
  welcomeEmailSent?: boolean;
}
