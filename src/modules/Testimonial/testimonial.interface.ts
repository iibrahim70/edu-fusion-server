import { ObjectId } from 'mongoose';

export interface ITestimonial {
  _id: ObjectId;
  createdBy: ObjectId;
  message: string;
  rating: number;
}
