import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsUUID } from 'class-validator';

export class GetAllStaffAssignedToBankAccountResponseDto {
  @IsString()
  @IsUUID()
  @ApiProperty({ example: '123e4567-e89b-12d3-a456-426614174000' })
  id: string;

  @IsString()
  @ApiProperty({ example: 'Bukayo' })
  firstName: string;

  @IsString()
  @ApiProperty({ example: 'Saka' })
  lastName: string;

  @IsString()
  @ApiProperty({ example: '' })
  email: 'saka360@gmail.com';
}

export class GetAllBankAccountsAssignedToStaffResponseDto {
  @IsString()
  @IsUUID()
  @ApiProperty({ example: '123e4567-e89b-12d3-a456-426614174000' })
  id: string;

  @IsString()
  @ApiProperty({ example: 'RespecTech-HR LTD' })
  accountName: string;

  @IsString()
  @ApiProperty({ example: '1234567890' })
  accountNumber: string;

  @IsString()
  @ApiProperty({ example: 'CURRENT' })
  accountType: string;

  @IsString()
  @IsUUID()
  @ApiProperty({ example: 'f895f8fd-acaf-46b9-aa0b-b2aebdcb7c2c' })
  clientId: string;
}

export class GetAllAssignmentsResponseDto {
  @IsString()
  @IsUUID()
  @ApiProperty({ example: '123e4567-e89b-12d3-a456-426614174000' })
  id: string;

  @ApiProperty({ type: () => GetAllStaffAssignedToBankAccountResponseDto })
  user: GetAllStaffAssignedToBankAccountResponseDto;

  @ApiProperty({ type: () => GetAllBankAccountsAssignedToStaffResponseDto })
  bankAccount: GetAllBankAccountsAssignedToStaffResponseDto;
}
