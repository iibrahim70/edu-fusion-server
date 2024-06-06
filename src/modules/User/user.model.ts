import { Schema, model } from 'mongoose';
import { IUser } from './user.interface';

const userSchema = new Schema<IUser>({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  avatar: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['student', 'tutor', 'admin'],
    default: 'student',
  },
});

// method to remove sensitive fields before returning user object as JSON
userSchema.methods.toJSON = function () {
  const userObject = this.toObject();
  delete userObject?.role;
  return userObject;
};

// create the user model using the schema
export const User = model<IUser>('User', userSchema);
