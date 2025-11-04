import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { DatabaseService } from 'src/database/database.service';
import { Role } from './enum/role.enum';
import * as argon2 from 'argon2';
import { omit } from 'src/utils/omit.util';
import { DeactivateUserDto } from './dto/deactivate-user.dto';
import { MailService } from 'src/mail/mail.service';

@Injectable()
export class UserService {
  constructor(
    private readonly databaseService: DatabaseService,
    private readonly mailService: MailService,
  ) {}

  async create(createUserDto: CreateUserDto) {
    try {
      // Prepare the data object
      const { permissions, ...userData } = createUserDto;
      const data: any = { ...userData };

      // Hash the password
      data.password = await argon2.hash(userData.password);

      // If permissions are provided, handle the connection
      if (permissions && permissions.length > 0) {
        const permissionRecords =
          await this.databaseService.permission.findMany({
            where: {
              name: { in: createUserDto.permissions },
            },
          });

        data.permissions = {
          connect: permissionRecords.map((permission) => ({
            id: permission.id,
          })),
        };
      }

      // Create the user
      const newUser = await this.databaseService.user.create({
        data,
      });

      // If the user is created successfully, send a welcome email
      await this.mailService.sendAccountCreationEmail(
        newUser.email,
        newUser.firstName,
        newUser.email,
        createUserDto.password,
      );

      // Return the user without sensitive information
      return omit(newUser, ['id', 'password', 'refreshToken']);
    } catch (error) {
      // Handle specific error codes from Prisma
      if (error.code === 'P2002') {
        throw new ConflictException('User already exists');
      }
      if (error.code === 'P2016') {
        throw new NotFoundException('Permission not found');
      }
      // Handle other errors
      throw new BadRequestException(`Failed to create user`);
    }
  }

  async findAll(role?: Role) {
    try {
      if (role) {
        const users = await this.databaseService.user.findMany({
          where: {
            role,
          },
          select: {
            id: true,
            firstName: true,
            lastName: true,
            username: true,
            email: true,
            phone: true,
            avatarUrl: true,
            role: true,
            permissions: true,
            isActive: true,
            createdAt: true,
            updatedAt: true,
            // Exclude sensitive fields
            password: false,
            refreshToken: false,
          },
        });

        if (users.length === 0) {
          throw new NotFoundException('No users found');
        }

        return users;
      }
      return await this.databaseService.user.findMany({
        select: {
          id: true,
          firstName: true,
          lastName: true,
          username: true,
          email: true,
          phone: true,
          avatarUrl: true,
          role: true,
          permissions: true,
          isActive: true,
          createdAt: true,
          updatedAt: true,
          // Exclude sensitive fields
          password: false,
          refreshToken: false,
        },
      });
    } catch (error) {
      // Handle specific error codes from Prisma
      if (error.code === 'P2025') {
        throw new NotFoundException('No users found');
      }
    }
  }

  async findOne(id: string) {
    const user = await this.databaseService.user.findUnique({
      where: { id },
    });

    if (!user) {
      throw new NotFoundException(`User not found`);
    }

    return user;
  }

  async findByEmail(email: string) {
    return await this.databaseService.user.findUnique({
      where: { email },
    });
  }

  async checkEmail(email: string) {
    const user = await this.databaseService.user.findUnique({
      where: { email },
    });

    return user ? { available: false } : { available: true };
  }

  async checkUsername(username: string) {
    const user = await this.databaseService.user.findUnique({
      where: { username },
    });

    return user ? { available: false } : { available: true };
  }

  async checkPhone(phone: string) {
    const user = await this.databaseService.user.findUnique({
      where: { phone },
    });

    return user ? { available: false } : { available: true };
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    try {
      // Prepare the data object
      const { permissions, ...userData } = updateUserDto;
      const data: any = { ...userData };

      // Hash the password if it is provided
      // if (userData.password) {
      //   delete data.password;
      // }

      if (permissions && permissions.length > 0) {
        // You can find by ID or name, here we assume `name`:
        const foundPermissions = await this.databaseService.permission.findMany(
          {
            where: { name: { in: permissions } }, // or { id: { in: permissions } }
          },
        );

        data.permissions = {
          set: [], // optional: clear existing permissions
          connect: foundPermissions.map((p) => ({ id: p.id })),
        };
      }

      // Update the user
      const updatedUser = await this.databaseService.user.update({
        where: { id },
        data,
      });

      return omit(updatedUser, ['id', 'password', 'refreshToken']);
    } catch (error) {
      // Handle specific error codes from Prisma
      if (error.code === 'P2002') {
        throw new ConflictException('User already exists');
      }
      if (error.code === 'P2016') {
        throw new NotFoundException('Permission not found');
      }
      if (error.code === 'P2025') {
        throw new NotFoundException(`User not found`);
      }
      // Handle other errors
      throw new BadRequestException(`Failed to update user`);
    }
  }

  async updateRefreshToken(id: string, refreshToken: string | null) {
    return await this.databaseService.user.update({
      where: { id },
      data: { refreshToken },
    });
  }

  async updatePassword(id: string, password: string) {
    return await this.databaseService.user.update({
      where: { id },
      data: { password },
    });
  }

  async deactivateUser(
    adminId: string,
    userId: string,
    deactivateUserDto: DeactivateUserDto,
  ) {
    try {
      // Check if user exists
      await this.findOne(userId);

      await this.databaseService.user.update({
        where: { id: userId },
        data: {
          isActive: false,
          deactivatedAt: new Date(),
          deactivatedById: adminId,
          deactivationReason: deactivateUserDto.reason,
        },
      });

      return {
        message: 'User has been successfully deactivated',
      };
    } catch (error) {
      // Handle specific error codes from Prisma
      if (error.code === 'P2025') {
        throw new NotFoundException(`User not found`);
      }
      // Handle other errors
      throw new BadRequestException(`Failed to deactivate user`);
    }
  }

  async activateUser(userId: string) {
    try {
      // Check if user exists
      await this.findOne(userId);

      await this.databaseService.user.update({
        where: { id: userId },
        data: {
          isActive: true,
          deactivatedAt: null,
          deactivatedById: null,
          deactivationReason: null,
        },
      });

      return {
        message: 'User has been successfully activated',
      };
    } catch (error) {
      // Handle specific error codes from Prisma
      if (error.code === 'P2025') {
        throw new NotFoundException(`User not found`);
      }
      // Handle other errors
      throw new BadRequestException(`Failed to activate user`);
    }
  }

  async remove(id: string) {
    try {
      return await this.databaseService.user.delete({
        where: { id },
      });
    } catch (error) {
      // Handle specific error codes from Prisma
      if (error.code === 'P2025') {
        throw new NotFoundException(`User not found`);
      }
      // Handle other errors
      throw new BadRequestException(`Failed to delete user`);
    }
  }
}
