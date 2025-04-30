import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth/local-auth.guard';
import { JwtAuthGuard } from './guards/jwt-auth/jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req: any) {
    const accessToken = await this.authService.login(req.user.id);
    return { id: req.user.id, accessToken };
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  async profile(@Request() req: any) {
    return await this.authService.profile(req.user.id);
  }
}
