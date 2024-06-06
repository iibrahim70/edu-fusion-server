import { Schema, model } from 'mongoose';
import { ICourse } from './course.interface';

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
