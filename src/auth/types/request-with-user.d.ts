import { Request } from 'express';
import { Role } from '../enum/role.enum';

export interface RequestWithUser extends Request {
  user: {
    id: string;
    role: Role;
    // optionally add: email, role, etc., depending on what you inject into `user`
  };
}
