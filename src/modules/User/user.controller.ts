import httpStatus from 'http-status';
import catchAsync from '../../helpers/catchAsync';
import sendResponse from '../../helpers/sendResponse';
import { UserServices } from './user.service';

const createStudent = catchAsync(async (req, res) => {
  const userData = req?.body;

  const result = UserServices.createStudentIntoDB(userData);

  sendResponse(res, {
    statusCode: httpStatus?.OK,
    success: true,
    message: 'Student is created successfully!',
    data: result,
  });
});

export const UserControllers = {
  createStudent,
};
