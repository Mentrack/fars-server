import { Request } from 'express';

export interface RequestWithUser extends Request {
  user: {
    id: string;
    // optionally add: email, role, etc., depending on what you inject into `user`
  };
}
