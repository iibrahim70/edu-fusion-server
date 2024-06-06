import { ObjectId } from 'mongoose';

export interface IModule {
  _id: ObjectId;
  courseId: ObjectId; // Reference to the Course
  moduleId: number;
  title: string;
  description: string;
}

// SubModule Interface
export interface ISubModule {
  _id: ObjectId;
  moduleId: ObjectId; // Reference to the Module
  subModuleId: number;
  title: string;
  imageUrl?: string[];
  videoUrl: string;
  description: string;
}

// Rating Interface
export interface IRating {
  _id: ObjectId;
  moduleId: ObjectId; // Reference to the Module
  userId: ObjectId;
  rating: number; // Rating value, e.g., from 1 to 5
  comment: string;
}

// Comment Interface
export interface IComment {
  _id: ObjectId;
  subModuleId: ObjectId; // Reference to the SubModule
  userId: ObjectId;
  comment: string;
}
