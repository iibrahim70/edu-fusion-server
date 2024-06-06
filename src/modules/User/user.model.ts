import { Schema, model } from 'mongoose';
import { IUser } from './user.interface';

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

// method to remove sensitive fields before returning User object as JSON
userSchema.methods.toJSON = function () {
  const userObject = this.toObject();
  delete userObject?.role;
  return userObject;
};

// create the User model using the schema
export const User = model<IUser>('User', userSchema);
