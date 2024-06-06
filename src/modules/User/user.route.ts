import { Router } from 'express';
import { UserControllers } from './user.controller';

const router = Router();

router.get('/', UserControllers?.getUsers);
router.post('/create-user', UserControllers?.createUser);

export const UserRoutes = router;
