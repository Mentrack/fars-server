import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateRateCommentDto {
  @ApiProperty({
    description: 'Content of the rate comment',
    example: 'Signatory is missing',
  })
  @IsString()
  @IsNotEmpty()
  content: string;
}

export class UserResponse {
  @ApiProperty({ example: 'd9f7f4da-5d22-42bb-9ac0-de864199eecc' }) id: string;
  @ApiProperty({ example: 'Elisha' }) firstName: string;
  @ApiProperty({ example: 'Benjamin' }) lastName: string;
  @ApiProperty({ example: 'AD001' }) username: string;
}

export class AccountRateResponse {
  @ApiProperty({ example: '7c4b0d06-f78d-4f40-8eed-e7786f697ba9' }) id: string;
  @ApiProperty({ example: 'ARC-37432931' }) code: string;
}

export class RateCommentResponse {
  @ApiProperty({ example: '905fee0f-b420-4cd6-ba00-e4579ec6db9c' }) id: string;
  @ApiProperty({ example: 'Missing signatry from the contract!' })
  content: string;
  @ApiProperty({ example: '7c4b0d06-f78d-4f40-8eed-e7786f697ba9' })
  accountRateId: string;
  @ApiProperty({ example: 'd9f7f4da-5d22-42bb-9ac0-de864199eecc' })
  userId: string;
  @ApiProperty({ example: '2025-12-04T20:30:18.932Z' }) createdAt: string;
  @ApiProperty({ example: '2025-12-04T20:30:18.932Z' }) updatedAt: string;
  @ApiProperty({ type: UserResponse }) user: UserResponse;
  @ApiProperty({ type: AccountRateResponse }) accountRate: AccountRateResponse;
}
