import { Schema, model } from 'mongoose';
import { ICourse } from './course.interface';

const courseSchema = new Schema<ICourse>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    title: {
      type: String,
      required: true,
      unique: true,
    },
    bannerImages: {
      type: [String],
      required: true,
    },
    description: {
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
    feedback: {
      type: String,
    },
    rejectionReason: {
      type: String,
    },
    isPaid: {
      type: Boolean,
      required: true,
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
