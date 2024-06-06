import { ObjectId } from 'mongoose';

export interface ITestimonial {
  createdBy: ObjectId;
  message: string;
  rating: number;
}
