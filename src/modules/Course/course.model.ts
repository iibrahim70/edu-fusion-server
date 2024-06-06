import { Schema, model } from 'mongoose';
import {
  IComment,
  ICourse,
  IModule,
  IRating,
  ISubModule,
} from './course.interface';

const courseSchema = new Schema<ICourse>(
  {
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    courseTitle: {
      type: String,
      required: true,
      unique: true,
    },
    bannerImages: {
      type: [String],
      required: true,
    },
    courseDescription: {
      type: String,
      required: true,
    },
    registrationStartDate: {
      type: Date,
      required: true,
    },
    registrationEndDate: {
      type: Date,
      required: true,
    },
    classStartDate: {
      type: Date,
      required: true,
    },
    classEndDate: {
      type: Date,
      required: true,
    },
    courseDuration: {
      type: String,
      required: true,
    },
    registrationFee: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    level: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ['pending', 'approve', 'rejected'],
      default: 'pending',
    },
  },
  { timestamps: true },
);

// method to remove sensitive fields before returning course object as JSON
courseSchema.methods.toJSON = function () {
  const courseObject = this.toObject();
  delete courseObject?.status;
  return courseObject;
};

export const Course = model<ICourse>('Course', courseSchema);

const moduleSchema = new Schema<IModule>(
  {
    courseId: {
      type: Schema.Types.ObjectId,
      ref: 'Course',
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    subModules: [
      {
        type: Schema.Types.ObjectId,
        ref: 'SubModule',
      },
    ],
  },
  { timestamps: true },
);

export const Module = model<IModule>('Module', moduleSchema);

const subModuleSchema = new Schema<ISubModule>(
  {
    moduleId: {
      type: Schema.Types.ObjectId,
      ref: 'Module',
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: [String],
    },
    videoUrl: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Comment',
      },
    ],
  },
  { timestamps: true },
);

export const SubModule = model<ISubModule>('SubModule', subModuleSchema);

const ratingSchema = new Schema<IRating>(
  {
    moduleId: {
      type: Schema.Types.ObjectId,
      ref: 'Module',
      required: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    comment: {
      type: String,
    },
  },
  { timestamps: true },
);

export const Rating = model<IRating>('Rating', ratingSchema);

const commentSchema = new Schema<IComment>(
  {
    subModuleId: {
      type: Schema.Types.ObjectId,
      ref: 'SubModule',
      required: true,
    },
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    comment: { type: String, required: true },
  },
  { timestamps: true },
);

export const Comment = model<IComment>('Comment', commentSchema);
