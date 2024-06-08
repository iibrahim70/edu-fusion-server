import { ObjectId } from 'mongoose';

export interface ICourse {
  userId: ObjectId;
  title: string;
  bannerImages: string[];
  description: string;
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
  rejectionReason?: string;
  isPaid: boolean;
}
