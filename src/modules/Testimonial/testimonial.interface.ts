import { ObjectId } from 'mongoose';

export interface ITestimonial {
  createdBy: ObjectId;
  review: string;
  rating: number;
}
