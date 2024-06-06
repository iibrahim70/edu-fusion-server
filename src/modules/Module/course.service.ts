import { COURSE_STATUS } from './course.constant';
import { ICourse } from './module.interface';
import { Course } from './module.model';

const createCourseIntoDB = async (payload: ICourse) => {
  // enforce status to be pending
  payload.status = COURSE_STATUS?.pending;

  const result = await Course?.create(payload);
  return result;
};

const getCoursesFromDB = async () => {
  const result = await Course?.find()?.populate({
    path: 'createdBy',
    select: '-role', // Exclude the role field
  });
  return result;
};

export const CourseServices = {
  createCourseIntoDB,
  getCoursesFromDB,
};
