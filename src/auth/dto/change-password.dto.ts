import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, Matches, MinLength } from 'class-validator';

export class ChangePasswordDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Old password of the user',
    example: 'OldPassword123!',
  })
  oldPassword: string;

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
      'New password must include uppercase, lowercase, number, special character, and be at least 8 characters',
    example: 'NewPassword123!',
  })
  newPassword: string;
}
