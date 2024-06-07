import { ObjectId } from 'mongoose';

export interface ITestimonial {
  createdBy: ObjectId; // Reference to the User
  review: string;
  rating: number;
}
