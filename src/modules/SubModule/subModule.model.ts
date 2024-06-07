import { Schema, model } from 'mongoose';
import { IComment, IRating, ISubModule } from './submodule.interface';

const subModuleSchema = new Schema<ISubModule>(
  {
    moduleId: {
      type: Schema.Types.ObjectId,
      ref: 'Module',
      required: true,
    },
    subModuleNum: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    imageUrls: {
      type: [String],
    },
    videoUrl: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
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
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

export const Comment = model<IComment>('Comment', commentSchema);
