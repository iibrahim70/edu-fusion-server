import { Router } from 'express';
import { SubModuleControllers } from './subModule.controller';

const router = Router();

router.get('/');
router.post('/create-subModule', SubModuleControllers?.createModule);

export const SubModuleRoutes = router;
