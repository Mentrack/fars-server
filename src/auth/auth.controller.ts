import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Patch,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth/local-auth.guard';
import { RefreshAuthGuard } from './guards/refresh-auth/refresh-auth.guard';
import { RequestWithUser } from './types/request-with-user';
import { ChangePasswordDto } from './dto/change-password.dto';
import { ForgotPasswordDto } from './dto/forgot-password.dto';
import { ResetPasswordDto } from './dto/reset-password.dto';
import { ApiBearerAuth, ApiOkResponse, ApiOperation } from '@nestjs/swagger';
import { LoginRequestDto, LoginResponseDto } from './dto/login.dto';
import { RefreshAccessTokenResponseDto } from './dto/refresh-token.dto';
import { CreateUserResponseDto } from 'src/user/dto/create-user.dto';
import { Public } from './decorators/public.decorator';
import { MyLoggerService } from 'src/my-logger/my-logger.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly myLoggerService: MyLoggerService,
  ) {}

  @Public()
  @HttpCode(HttpStatus.OK)
  @UseGuards(LocalAuthGuard)
  @ApiOperation({ summary: 'Login user' })
  @ApiOkResponse({
    description: 'User logged in successfully',
    type: LoginResponseDto,
  })
  @Post('login')
  async login(@Request() req: RequestWithUser, @Body() body: LoginRequestDto) {
    this.myLoggerService.log(
      `Login attempt: ${body.email}`,
      AuthController.name,
    );
    return await this.authService.login(req.user.id);
  }

  @Public()
  @HttpCode(HttpStatus.OK)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Refresh access token' })
  @ApiOkResponse({
    description: 'Access token refreshed successfully',
    type: RefreshAccessTokenResponseDto,
  })
  @UseGuards(RefreshAuthGuard)
  @Post('refresh')
  async refresh(@Request() req: RequestWithUser) {
    return await this.authService.refreshToken(req.user.id);
  }

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('forgot-password')
  @ApiOperation({ summary: 'Forgot password' })
  @ApiOkResponse({
    description: 'Forgot password email sent successfully',
  })
  async forgotPassword(@Body() forgotPasswordDto: ForgotPasswordDto) {
    return await this.authService.forgotPassword(forgotPasswordDto);
  }

  @HttpCode(HttpStatus.OK)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Logout user' })
  @ApiOkResponse({
    description: 'User logged out successfully',
    type: CreateUserResponseDto,
  })
  @Post('logout')
  async logout(@Request() req: RequestWithUser) {
    return await this.authService.logout(req.user.id);
  }

  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get user profile' })
  @ApiOkResponse({
    description: 'User profile fetched successfully',
    type: CreateUserResponseDto,
  })
  @Get('profile')
  async profile(@Request() req: RequestWithUser) {
    return await this.authService.profile(req.user.id);
  }

  @ApiBearerAuth()
  @ApiOperation({ summary: 'Change password' })
  @ApiOkResponse({
    description: 'User password changed successfully',
  })
  @Patch('change-password')
  async changePassword(
    @Request() req: RequestWithUser,
    @Body() changePasswordDto: ChangePasswordDto,
  ) {
    return await this.authService.changePassword(
      req.user.id,
      changePasswordDto,
    );
  }

  @Public()
  @ApiOperation({ summary: 'Request reset password' })
  @ApiOkResponse({
    description: 'Password reset successfully',
  })
  @Patch('reset-password')
  async resetPassword(@Body() resetPasswordDto: ResetPasswordDto) {
    return await this.authService.resetPassword(resetPasswordDto);
  }
}
