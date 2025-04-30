import { Injectable, UnauthorizedException } from '@nestjs/common';
import { compare } from 'bcrypt';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

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
}
