import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from 'src/auth/decorators/roles.decorator';
import { Role } from 'src/auth/enum/role.enum';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}
  canActivate(context: ExecutionContext): boolean {
    const authorizedRoles = this.reflector.getAllAndOverride<Role[]>(
      ROLES_KEY,
      [context.getHandler(), context.getClass()],
    );

    const user = context.switchToHttp().getRequest().user;
    const hasAuthorizedRole = authorizedRoles.some(
      (role) => role === user.role,
    );
    return hasAuthorizedRole;
  }
}
