import httpStatus from 'http-status';
import ApiError from '../../errors/ApiError';
import { IUser } from './user.interface';
import { User } from './user.model';

const createStudentIntoDB = async (payload: IUser) => {
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

export const UserServices = {
  createStudentIntoDB,
};
