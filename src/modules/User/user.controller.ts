import httpStatus from 'http-status';
import catchAsync from '../../helpers/catchAsync';
import sendResponse from '../../helpers/sendResponse';
import { UserServices } from './user.service';

const createUser = catchAsync(async (req, res) => {
  const result = await UserServices?.createUserIntoDB(req?.body);

  sendResponse(res, {
    statusCode: httpStatus?.CREATED,
    success: true,
    message: 'User created successfully!',
    data: result,
  });
});

const getUsers = catchAsync(async (req, res) => {
  const result = await UserServices?.getUsersFromDB();

  sendResponse(res, {
    statusCode: httpStatus?.OK,
    success: true,
    message: 'User list retrieved successfully!',
    data: result,
  });
});

export const UserControllers = {
  createUser,
  getUsers,
};
