import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, Matches, MinLength } from 'class-validator';

export class ResetPasswordDto {
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
  @ApiProperty({ description: 'New password', example: 'NewPassword123!' })
  password: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Reset token',
    example: 'cjT_B08a89xexlwwfRP7WOHYm1JeLo_iz1sdtSr0Jbpeo2ZDcReCk7GXHaw_y2lV',
  })
  resetToken: string;
}
