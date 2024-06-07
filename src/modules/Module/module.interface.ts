import { ObjectId } from 'mongoose';

export interface IModule {
  courseId: ObjectId; // Reference to the Course
  moduleNum: number;
  title: string;
  description: string;
}
