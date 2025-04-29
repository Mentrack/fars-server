import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { DatabaseService } from 'src/database/database.service';
import { Role } from './enum/role.enum';

@Injectable()
export class UsersService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createUserDto: CreateUserDto) {
    try {
      // Prepare the data object
      const { permissions, ...userData } = createUserDto;
      const data: any = { ...userData };

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
      return await this.databaseService.user.create({
        data,
      });
    } catch (error) {
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
        });

        if (users.length === 0) {
          throw new NotFoundException('No users found');
        }

        return users;
      }
      return await this.databaseService.user.findMany({});
    } catch (error) {
      throw new BadRequestException(`Valid role required`);
    }
  }

  async findOne(id: string) {
    try {
      const user = await this.databaseService.user.findUnique({
        where: { id },
      });

      if (!user) {
        throw new NotFoundException(`User not found`);
      }

      return user;
    } catch (error) {
      throw new BadRequestException(`Valid id required`);
    }
  }

  async findByEmail(email: string) {
    try {
      const user = await this.databaseService.user.findUnique({
        where: { email },
      });

      if (!user) {
        throw new NotFoundException(`User not found`);
      }

      return user;
    } catch (error) {
      throw new BadRequestException(`Valid email required`);
    }
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    try {
      // Prepare the data object
      const { permissions, ...userData } = updateUserDto;
      const data: any = { ...userData };

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
      return await this.databaseService.user.update({
        where: { id },
        data,
      });
    } catch (error: any) {
      if (error.code === 'P2025') {
        throw new NotFoundException(`User not found`);
      }

      throw new BadRequestException(`Failed to update user`);
    }
  }

  async remove(id: string) {
    try {
      return await this.databaseService.user.delete({
        where: { id },
      });
    } catch (error) {
      throw new BadRequestException(`User not found.`);
    }
  }
}
