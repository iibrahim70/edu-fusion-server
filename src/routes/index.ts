import { Router } from 'express';
import { UserRoutes } from '../modules/User/user.route';
import { CourseRoutes } from '../modules/Course/course.route';
import { TestimonialRoutes } from '../modules/Testimonial/testimonial.route';

const router = Router();

const routes = [
  { path: '/users', route: UserRoutes },
  { path: '/courses', route: CourseRoutes },
  { path: '/testimonials', route: TestimonialRoutes },
];

routes?.forEach((route) => router?.use(route?.path, route?.route));

export default router;
