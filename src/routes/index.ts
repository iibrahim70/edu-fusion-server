import { Router } from 'express';
import { UserRoutes } from '../modules/User/user.route';
import { TutorRoutes } from '../modules/Tutor/tutor.route';
import { TestimonialRoutes } from '../modules/Testimonial/testimonial.route';

const router = Router();

const routes = [
  { path: '/users', route: UserRoutes },
  { path: '/tutors', route: TutorRoutes },
  { path: '/testimonials', route: TestimonialRoutes },
];

routes?.forEach((route) => router?.use(route?.path, route?.route));

export default router;
