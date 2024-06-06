import httpStatus from 'http-status';
import catchAsync from '../../helpers/catchAsync';
import sendResponse from '../../helpers/sendResponse';
import { UserServices } from './user.service';

const createUser = catchAsync(async (req, res) => {
  const result = await UserServices?.createUserIntoDB(req?.body);

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

const createTestimonial = catchAsync(async (req, res) => {
  const result = await UserServices?.createTestimonialIntoDB(req?.body);

  sendResponse(res, {
    statusCode: httpStatus?.OK,
    success: true,
    message: 'Testimonial created successfully!',
    data: result,
  });
});

export const UserControllers = {
  createUser,
  getStudents,
  createTestimonial,
};
