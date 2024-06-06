import { ObjectId } from 'mongoose';

export interface IUser {
  fullName: string;
  email: string;
  role: 'student' | 'tutor' | 'admin';
  avatar: string;
}

export interface ITestimonial {
  createdBy: ObjectId;
  message: string;
  rating: number;
}
