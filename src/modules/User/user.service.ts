import httpStatus from 'http-status';
import ApiError from '../../errors/ApiError';
import { IUser } from './user.interface';
import { User } from './user.model';
import { USER_ROLE } from './user.constant';

const createUserIntoDB = async (payload: IUser) => {
  const allowedRoles = [USER_ROLE?.student, USER_ROLE?.tutor, USER_ROLE?.admin];

  // check if the provided role is valid
  if (!allowedRoles?.includes(payload?.role)) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Invalid role!');
  }

  // disallow creation of admin users through this controller
  if (payload?.role === 'admin') {
    throw new ApiError(httpStatus?.FORBIDDEN, 'Admin creation not allowed!');
  }

  // check if a user with the same email already exists
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

export const UserServices = {
  createUserIntoDB,
  getUsersFromDB,
};
