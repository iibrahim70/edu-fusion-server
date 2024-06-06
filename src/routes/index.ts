import { Router } from 'express';
import { UserRoutes } from '../modules/User/user.route';
import { CourseRoutes } from '../modules/Course/course.route';
import { TestimonialRoutes } from '../modules/Testimonial/testimonial.route';
import { ModuleRoutes } from '../modules/Module/module.route';

const router = Router();

const routes = [
  { path: '/users', route: UserRoutes },
  { path: '/courses', route: CourseRoutes },
  { path: '/modules', route: ModuleRoutes },
  { path: '/testimonials', route: TestimonialRoutes },
];

routes?.forEach((route) => router?.use(route?.path, route?.route));

export default router;
