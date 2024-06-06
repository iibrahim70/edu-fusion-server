import httpStatus from 'http-status';
import catchAsync from '../../helpers/catchAsync';
import sendResponse from '../../helpers/sendResponse';
import { UserServices } from './user.service';

const createUser = catchAsync(async (req, res) => {
  const userData = req?.body;

  const result = await UserServices?.createUserIntoDB(userData);

  sendResponse(res, {
    statusCode: httpStatus?.OK,
    success: true,
    message: 'Student created successfully!',
    data: result,
  });
});

const getStudents = catchAsync(async (req, res) => {
  const result = await UserServices?.getAllStudentsFromDB();

  sendResponse(res, {
    statusCode: httpStatus?.OK,
    success: true,
    message: 'Retrieved student list successfully!',
    data: result,
  });
});

export const UserControllers = {
  createUser,
  getStudents,
};
