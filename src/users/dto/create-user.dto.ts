import { Role } from '../enum/role.enum';
import { Prisma } from 'generated/prisma';

export class CreateUserDto {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  role: Role;
  permissions: Prisma.PermissionCreateNestedManyWithoutUsersInput;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}
