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
import { ChangePasswordDto } from './dto/change-password.dto';
import { ForgotPasswordDto } from './dto/forgot-password.dto';
import { nanoid } from 'nanoid';
import { TokenService } from 'src/token/token.service';
import { MailService } from 'src/mail/mail.service';
import { ResetPasswordDto } from './dto/reset-password.dto';
import { randomInt } from 'crypto';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly tokenService: TokenService,
    private readonly jwtService: JwtService,
    private readonly mailService: MailService,
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
    const isPasswordValid = await argon2.verify(user.password, password);
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

  async changePassword(userId: string, changePasswordDto: ChangePasswordDto) {
    // Check if the user exists
    const user = await this.userService.findOne(userId);
    if (!user) throw new UnauthorizedException('User not found');

    // Check if the old password is correct
    const isOldPasswordValid = await argon2.verify(
      user.password,
      changePasswordDto.oldPassword,
    );

    if (!isOldPasswordValid)
      throw new UnauthorizedException('Invalid credentials');

    // Hash the new password and update it in the database
    const hashedNewPassword = await argon2.hash(changePasswordDto.newPassword);
    await this.userService.updatePassword(userId, hashedNewPassword);

    return { message: 'Password changed successfully' };
  }

  async forgotPassword(forgotPasswordDto: ForgotPasswordDto) {
    // Check if the user exists
    const user = await this.userService.findByEmail(forgotPasswordDto.email);

    if (user) {
      const expiresIn = new Date();
      expiresIn.setHours(expiresIn.getHours() + 1); // Set expiration time to 1 hour

      const resetToken = randomInt(100000, 1000000).toString(); // 6-digit string

      // Save the reset token to the database
      await this.tokenService.createToken({
        userId: user.id,
        token: resetToken,
        expiresIn,
      });

      // Send the token to the user's email
      await this.mailService.sendResetPasswordEmail(
        user.firstName,
        forgotPasswordDto.email,
        resetToken,
      );
    }

    return { message: 'If this user exists, you will recieve and email.' };
  }

  async resetPassword(resetPasswordDto: ResetPasswordDto) {
    const { resetToken, password } = resetPasswordDto;
    // Check if the token exists

    const token = await this.tokenService.validateToken(resetToken);

    // Hash the new password and update it in the database
    const hashedNewPassword = await argon2.hash(password);
    const user = await this.userService.updatePassword(
      token.userId,
      hashedNewPassword,
    );

    // Delete the token from the database
    await this.tokenService.deleteToken(resetToken);

    // Send a success email to the user
    await this.mailService.sendResetPasswordSuccessEmail(
      user.firstName,
      user.email,
    );

    return { message: 'Password reset successfully' };
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
