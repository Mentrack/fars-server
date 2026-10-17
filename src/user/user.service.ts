import {
  BadRequestException,
  ConflictException,
  ForbiddenException,
  Injectable,
  Logger,
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
import { CurrentUser } from 'src/auth/types/current-user';
import { Role as AuthRole } from 'src/auth/enum/role.enum';
import { UserRole } from '@prisma/client';

// Roles an ADMIN may assign when creating a user. Any other role, and every
// role change after creation, is reserved for SUPER_ADMIN.
const ADMIN_ASSIGNABLE_ROLES: UserRole[] = [UserRole.STAFF, UserRole.CLIENT];

// Fields a STAFF or CLIENT user may change on their own account. Everything
// else (email, username, isActive, permissions, role) needs an admin.
const SELF_EDITABLE_FIELDS: (keyof UpdateUserDto)[] = [
  'firstName',
  'lastName',
  'phone',
  'avatarUrl',
];

@Injectable()
export class UserService {
  private readonly logger = new Logger(UserService.name);

  constructor(
    private readonly databaseService: DatabaseService,
    private readonly mailService: MailService,
  ) {}

  async create(createUserDto: CreateUserDto, actor: CurrentUser) {
    const { role } = createUserDto;
    if (
      role &&
      actor.role !== AuthRole.SUPER_ADMIN &&
      !ADMIN_ASSIGNABLE_ROLES.includes(role)
    ) {
      throw new ForbiddenException(
        'Only a super admin can create admin or super admin users',
      );
    }

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

      // The account is already saved, so a mail failure is flagged in the
      // response rather than turned into "Failed to create user".
      let welcomeEmailSent = true;
      try {
        await this.mailService.sendAccountCreationEmail(
          newUser.email,
          newUser.firstName,
          newUser.email,
          createUserDto.password,
        );
      } catch (error) {
        welcomeEmailSent = false;
        this.logger.warn(
          `User ${newUser.id} created but the welcome email failed: ${error instanceof Error ? error.message : String(error)}`,
        );
      }

      // Return the user without sensitive information
      return {
        ...omit(newUser, ['id', 'password', 'refreshToken']),
        welcomeEmailSent,
      };
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

  async findAllStaff() {
    return await this.databaseService.user.findMany({
      where: {
        OR: [{ role: Role.ADMIN }, { role: Role.STAFF }],
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
  }

  async update(id: string, updateUserDto: UpdateUserDto, actor: CurrentUser) {
    await this.assertCanUpdate(id, updateUserDto, actor);

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

  // Who may edit whom. The email is what password reset trusts, so editing
  // another user's account is an admin action, and admin accounts are
  // reserved for super admins.
  private async assertCanUpdate(
    targetId: string,
    updateUserDto: UpdateUserDto,
    actor: CurrentUser,
  ) {
    const isSelf = actor.id === targetId;
    const isSuperAdmin = actor.role === AuthRole.SUPER_ADMIN;
    const isAdmin = isSuperAdmin || actor.role === AuthRole.ADMIN;
    const newRole = updateUserDto.role;

    if (!isSelf && !isAdmin) {
      throw new ForbiddenException('You can only edit your own profile');
    }

    if (newRole !== undefined) {
      if (!isSuperAdmin) {
        throw new ForbiddenException(
          'Only a super admin can change user roles',
        );
      }
      if (isSelf) {
        throw new ForbiddenException('You cannot change your own role');
      }
    }

    if (!isAdmin) {
      const restricted = Object.entries(updateUserDto)
        .filter(
          ([field, value]) =>
            value !== undefined &&
            !SELF_EDITABLE_FIELDS.includes(field as keyof UpdateUserDto),
        )
        .map(([field]) => field);
      if (restricted.length > 0) {
        throw new ForbiddenException(
          `You cannot change your own ${restricted.join(', ')}`,
        );
      }
    }

    const target = await this.findOne(targetId);

    if (
      !isSelf &&
      !isSuperAdmin &&
      !ADMIN_ASSIGNABLE_ROLES.includes(target.role)
    ) {
      throw new ForbiddenException(
        'Only a super admin can edit admin accounts',
      );
    }

    if (newRole === undefined || target.role === newRole) return;

    // Client logins belong to a Client record, so they are not moved in or out
    // of the CLIENT role here.
    if (target.role === UserRole.CLIENT || newRole === UserRole.CLIENT) {
      throw new BadRequestException(
        'Client logins are managed from the client record; their role cannot be changed here',
      );
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
