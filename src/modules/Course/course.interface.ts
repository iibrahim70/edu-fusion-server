import { ObjectId } from 'mongoose';

export interface ICourse {
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
  feedback?: string;
}
