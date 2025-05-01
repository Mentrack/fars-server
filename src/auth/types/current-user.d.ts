import { Request } from 'express';
import { Role } from '../enum/role.enum';

export type CurrentUser = {
  id: string;
  role: Role;
};
