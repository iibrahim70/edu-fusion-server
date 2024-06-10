import { ObjectId } from 'mongoose';
import { CourseCategory, CourseLevel, CourseStatus } from './course.constant';

export interface ICourse {
  userId: ObjectId;
  courseTitle: string;
  courseDescription: string;
  thumbnail: string;
  bannerImages?: string[];
  registrationStartDate: Date;
  registrationEndDate: Date;
  classStartDate: Date;
  classEndDate: Date;
  courseDuration: string;
  registrationFee: number;
  certificateAvailability: boolean;
  courseCategory: CourseCategory;
  courseLevel: CourseLevel;
  courseStatus?: CourseStatus;
  feedback?: string;
  rejectionReason?: string;
  isPaid: boolean;
  courseOverviewVideoLink?: string;
}
