import httpStatus from 'http-status';
import ApiError from '../../errors/ApiError';
import { ITestimonial, IUser } from './tutor.interface';
import { Testimonial, User } from './tutor.model';
import { USER_ROLE } from './user.constant';

const createUserIntoDB = async (payload: IUser) => {
  const allowedRoles = [USER_ROLE?.student, USER_ROLE?.tutor, USER_ROLE?.admin];

  if (!allowedRoles?.includes(payload?.role)) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Invalid role!');
  }

  if (payload?.role === 'admin') {
    throw new ApiError(httpStatus?.FORBIDDEN, 'Admin creation not allowed!');
  }

  const existingUser = await User.findOne({ email: payload?.email });
  if (existingUser) {
    throw new ApiError(httpStatus?.CONFLICT, 'User already exists!');
  }

  const result = await User?.create(payload);
  return result;
};

const getUsersFromDB = async () => {
  const result = await User?.find();
  return result;
};

const createTestimonialIntoDB = async (payload: ITestimonial) => {
  const result = await Testimonial?.create(payload);
  return result;
};

const getTestimonialsFromDB = async () => {
  const result = await Testimonial?.find();
  return result;
};

export const UserServices = {
  createUserIntoDB,
  getUsersFromDB,
  createTestimonialIntoDB,
  getTestimonialsFromDB,
};
