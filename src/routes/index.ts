import { Router } from 'express';
import { UserRoutes } from '../modules/User/user.route';
import { TutorRoutes } from '../modules/Tutor/tutor.route';

const router = Router();

const routes = [
  { path: '/users', route: UserRoutes },
  { path: '/tutors', route: TutorRoutes },
];

routes?.forEach((route) => router?.use(route?.path, route?.route));

export default router;
