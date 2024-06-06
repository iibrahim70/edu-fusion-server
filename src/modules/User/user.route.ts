import { Router } from 'express';
import { UserControllers } from './user.controller';

const router = Router();

router.get('/', UserControllers?.getUsers);
router.get('/testimonials', UserControllers?.getTestimonials);

router.post('/create-user', UserControllers?.createUser);
router.post('/create-testimonial', UserControllers?.createTestimonial);

export const UserRoutes = router;
