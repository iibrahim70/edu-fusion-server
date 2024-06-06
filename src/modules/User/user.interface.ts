import { ObjectId } from 'mongoose';

export interface IUser {
  _id: ObjectId;
  fullName: string;
  email: string;
  role: 'student' | 'tutor' | 'admin';
  avatar: string;
}
