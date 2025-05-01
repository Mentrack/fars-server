import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { AuthJwtPayload } from './types/auth-jwtPayload';
import refreshJwtConfig from './config/refresh-jwt.config';
import { ConfigType } from '@nestjs/config';
import * as argon2 from 'argon2';
import { omit } from 'src/utils/omit.util';
import { CurrentUser } from './types/current-user';
import { Role } from './enum/role.enum';

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
    const isPasswordValid = await argon2.verify(password, user.password);
    if (!isPasswordValid)
      throw new UnauthorizedException('Invalid credentials');

    // If everything is fine, return the user ID
    return { id: user.id };
  }

  async validateJwtUser(userId: string) {
    // Check if the user exists
    const user = await this.userService.findOne(userId);
    if (!user) throw new UnauthorizedException('User not found!');

    // If everything is fine, return the user ID and role
    const currentUser: CurrentUser = { id: user.id, role: user.role as Role };
    return currentUser;
  }

  async validateRefreshToken(userId: string, refreshToken: string) {
    // Check if the user exists
    const user = await this.userService.findOne(userId);

    if (!user || !user.refreshToken) {
      throw new UnauthorizedException('Invalid refresh token');
    }

    // Check if the refresh token is valid
    const isRefreshTokenValid = await argon2.verify(
      user.refreshToken,
      refreshToken,
    );

    if (!isRefreshTokenValid) {
      throw new UnauthorizedException('Invalid refresh token');
    }

    // If everything is fine, return the user ID
    return { id: user.id };
  }

  async login(userId: string) {
    // Generate a JWT token for the user
    const { accessToken, refreshToken } = await this.generateToken(userId);
    const hashedRefreshToken = await argon2.hash(refreshToken);
    // Save the hashed refresh token to the database
    await this.userService.updateRefreshToken(userId, hashedRefreshToken);

    return { id: userId, accessToken, refreshToken };
  }

  async generateToken(userId: string) {
    // Generate a JWT token for the user
    const payload: AuthJwtPayload = { sub: userId };

    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(payload),
      this.jwtService.signAsync(payload, this.refreshJwtConfiguration),
    ]);

    return { accessToken, refreshToken };
  }

  async refreshToken(userId: string) {
    // Generate a JWT token for the user
    const { accessToken, refreshToken } = await this.generateToken(userId);
    const hashedRefreshToken = await argon2.hash(refreshToken);

    // Save the hashed refresh token to the database
    await this.userService.updateRefreshToken(userId, hashedRefreshToken);

    // refresh token rotation
    return { id: userId, accessToken, refreshToken };
  }

  async profile(userId: string) {
    // Fetch the user profile based on the user ID
    const user = await this.userService.findOne(userId);
    // Exclude sensitive information

    return omit(user, ['id', 'password', 'refreshToken']);
  }

  async logout(userId: string) {
    // Remove the refresh token from the database
    await this.userService.updateRefreshToken(userId, null);

    return { message: 'Logged out successfully' };
  }
}
