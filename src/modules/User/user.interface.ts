/* eslint-disable no-unused-vars */

import { UserRole } from './user.constant';

export interface IUser {
  fullName: string;
  email: string;
  role: UserRole;
  avatar: string;
  toJSON(options?: { includeRole?: boolean }): IUser;
}
