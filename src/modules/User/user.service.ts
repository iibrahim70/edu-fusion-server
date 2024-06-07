import httpStatus from 'http-status';
import ApiError from '../../errors/ApiError';
import { IUser } from './user.interface';
import { User } from './user.model';
import { USER_ROLE, UserSearchableFields } from './user.constant';
import { createToken } from '../../helpers/jwt';
import config from '../../config';
import QueryBuilder from '../../builder/QueryBuilder';

const createUserIntoDB = async (payload: IUser) => {
  const allowedRoles = [USER_ROLE?.student, USER_ROLE?.tutor, USER_ROLE?.admin];

  // Set default role to 'student' if no role is provided
  if (!payload?.role) {
    payload.role = USER_ROLE?.student;
  }

  // check if the provided role is valid
  if (!allowedRoles?.includes(payload?.role)) {
    throw new ApiError(httpStatus?.BAD_REQUEST, 'Invalid role!');
  }

  // disallow creation of admin users through this route
  if (payload?.role === 'admin') {
    throw new ApiError(httpStatus?.FORBIDDEN, 'Admin creation not allowed!');
  }

  // check if a user with the same email already exists
  const existingUser = await User?.findOne({ email: payload?.email });
  if (existingUser) {
    throw new ApiError(httpStatus?.CONFLICT, 'User already exists!');
  }

  const result = await User?.create(payload);
  return result;
};

const getUsersFromDB = async (query: Record<string, unknown>) => {
  const usersQuery = new QueryBuilder(User?.find(), query)
    .search(UserSearchableFields)
    .sort()
    .paginate()
    .fields();

  const result = await usersQuery?.modelQuery;
  return result;
};

const createJwtTokenIntoDB = async (email: string) => {
  // Find user by email
  const existingUser = await User?.findOne({ email });
  if (!existingUser) {
    throw new ApiError(httpStatus?.NOT_FOUND, 'User not found!');
  }

  // Create JWT payload for token generation
  const jwtPayload = {
    email: existingUser?.email,
    role: existingUser?.role as string,
  };

  // Generate access token for the user
  const accessToken = createToken(
    jwtPayload,
    config?.jwtAccessSecret as string,
    config?.jwtAccessExpiresIn as string,
  );

  return {
    accessToken,
  };
};

export const UserServices = {
  createUserIntoDB,
  getUsersFromDB,
  createJwtTokenIntoDB,
};
