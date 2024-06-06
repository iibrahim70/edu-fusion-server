import { ICourse } from './tutor.interface';
import { Course } from './tutor.model';

const createCourseIntoDB = async (payload: ICourse) => {
  const result = await Course?.create(payload);
  return result;
};

export const TutorServices = {
  createCourseIntoDB,
};
