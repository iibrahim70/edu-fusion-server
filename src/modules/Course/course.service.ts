import httpStatus from 'http-status';
import ApiError from '../../errors/ApiError';
import { COURSE_STATUS } from './course.constant';
import { ICourse } from './course.interface';
import { Course } from './course.model';

const createCourseIntoDB = async (payload: ICourse) => {
  // enforce status to be pending
  payload.status = COURSE_STATUS?.pending;

  const result = await Course?.create(payload);
  return result;
};

const getCoursesFromDB = async () => {
  const result = await Course?.find()?.populate({
    path: 'createdBy',
    select: '-role', // exclude the role field
  });
  return result;
};

const getCourseDetailsFromDB = async (courseId: string) => {
  // Verify Course Existence
  const courseExists = await Course.findById(courseId);
  if (!courseExists) {
    throw new ApiError(httpStatus?.NOT_FOUND, 'Course Not Found');
  }

  const result = await Course?.aggregate([
    // stage 1
    {
      $lookup: {
        from: 'modules', // Ensure this matches the actual collection name
        localField: '_id',
        foreignField: 'courseId',
        as: 'modules',
      },
    },
  ]);
  return result[0];
};

export const CourseServices = {
  createCourseIntoDB,
  getCoursesFromDB,
  getCourseDetailsFromDB,
};
