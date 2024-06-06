import httpStatus from 'http-status';
import catchAsync from '../../helpers/catchAsync';
import sendResponse from '../../helpers/sendResponse';
import { TutorServices } from './tutor.service';

const createCourse = catchAsync(async (req, res) => {
  const courseData = req.body;
  const result = await TutorServices.createCourseIntoDB(courseData);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Course created successfully!',
    data: result,
  });
});

export const TutorControllers = {
  createCourse,
};
