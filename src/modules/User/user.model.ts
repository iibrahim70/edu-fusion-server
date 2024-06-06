import { Schema, model } from 'mongoose';
import { ITestimonial, IUser } from './user.interface';

// define the User schema
const userSchema = new Schema<IUser>(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true, // convert email to lowercase
      trim: true, // trim whitespace from email
    },
    avatar: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ['student', 'tutor', 'admin'], // only allow specific roles
      default: 'student', // default role is 'student'
    },
  },
  { timestamps: true },
);

// method to remove sensitive fields before returning user object as JSON
userSchema.methods.toJSON = function () {
  const userObject = this.toObject();
  delete userObject?.role;
  return userObject;
};

// create the User model using the schema
export const User = model<IUser>('User', userSchema);

// define the Testimonial schema
const testimonialSchema = new Schema<ITestimonial>(
  {
    createdBy: {
      type: Schema.Types.ObjectId, // reference to a User
      required: true,
      ref: 'User', // reference to the User model
    },
    userName: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 1, // minimum value for rating
      max: 5, // maximum value for rating
    },
  },
  { timestamps: true },
);

// create the Testimonial model using the schema
export const Testimonial = model<ITestimonial>(
  'Testimonial',
  testimonialSchema,
);
