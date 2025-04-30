import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt';
import { UserService } from 'src/user/user.service';
import { AuthJwtPayload } from './types/auth-jwtPayload';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
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
    return await this.jwtService.signAsync(payload);
  }

  async profile(userId: string) {
    // Fetch the user profile based on the user ID
    return await this.userService.findOne(userId);
  }
}
