import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt';
import { UserService } from 'src/user/user.service';
import { AuthJwtPayload } from './types/auth-jwtPayload';
import refreshJwtConfig from './config/refresh-jwt.config';
import { ConfigType } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
    @Inject(refreshJwtConfig.KEY)
    private readonly refreshJwtConfiguration: ConfigType<
      typeof refreshJwtConfig
    >,
  ) {}

  async validateUser(email: string, password: string) {
    // Check if the user exists
    const user = await this.userService.findByEmail(email);
    if (!user) throw new UnauthorizedException('User not found');

    // Check if the password is correct
    const isPasswordValid = await compare(password, user.password);
    if (!isPasswordValid)
      throw new UnauthorizedException('Invalid credentials');

    // If everything is fine, return the user ID
    return { id: user.id };
  }

  async login(userId: string) {
    // Generate a JWT token for the user
    const payload: AuthJwtPayload = { sub: userId };
    const accessToken = await this.jwtService.signAsync(payload);
    const refreshToken = await this.jwtService.signAsync(
      payload,
      this.refreshJwtConfiguration,
    );

    return { id: userId, accessToken, refreshToken };
  }

  async refreshToken(userId: string) {
    // Generate a JWT token for the user
    const payload: AuthJwtPayload = { sub: userId };
    const accessToken = await this.jwtService.signAsync(payload);

    return { id: userId, accessToken };
  }

  async profile(userId: string) {
    // Fetch the user profile based on the user ID
    return await this.userService.findOne(userId);
  }
}
