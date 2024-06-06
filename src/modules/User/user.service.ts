import httpStatus from 'http-status';
import ApiError from '../../errors/ApiError';
import { IUser } from './user.interface';
import { User } from './user.model';
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

const getAllStudentsFromDB = async () => {
  const result = await User.find();
  return result;
};

export const UserServices = {
  createUserIntoDB,
  getAllStudentsFromDB,
};
