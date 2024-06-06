import { COURSE_STATUS } from './course.constant';
import { ICourse } from './course.interface';
import { Course } from './course.model';

const createCourseIntoDB = async (payload: ICourse) => {
  // enforce status to be pending
  payload.status = COURSE_STATUS?.pending;

  const result = await Course?.create(payload);
  return result;
};

export const CourseServices = {
  createCourseIntoDB,
};
