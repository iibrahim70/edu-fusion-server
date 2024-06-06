import { ObjectId } from 'mongoose';

export interface IUser {
  fullName: string;
  email: string;
  role: 'student' | 'tutor' | 'admin';
  avatar: string;
}

export interface ITestimonial {
  createdBy: ObjectId;
  userName: string;
  avatar: string;
  message: string;
  rating: number;
}
