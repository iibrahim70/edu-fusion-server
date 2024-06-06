import { ObjectId } from 'mongoose';

// Course Interface
export interface ICourse {
  _id: ObjectId;
  createdBy: ObjectId;
  courseTitle: string;
  bannerImages: string[];
  courseDescription: string;
  registrationStartDate: Date;
  registrationEndDate: Date;
  classStartDate: Date;
  classEndDate: Date;
  courseDuration: string;
  registrationFee: number;
  category: string;
  level: string;
  status: 'pending' | 'approve' | 'rejected';
}

// Module Interface
export interface IModule {
  _id: ObjectId;
  courseId: ObjectId; // Reference to the Course
  moduleId: number;
  title: string;
  description: string;
  subModules?: ISubModule[];
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
  comments?: IComment[];
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
