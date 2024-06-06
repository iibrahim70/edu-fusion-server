import { Router } from 'express';
import { ModuleControllers } from './module.controller';

const router = Router();

router.get('/');
router.post('/create-module', ModuleControllers?.createModule);

// SubModule Routes
router.post('/modules/:moduleId/subModules');
router.get('/modules/:moduleId/subModules');

// Rating Routes
router.post('/modules/:moduleId/ratings');

// Comment Routes
router.post('/subModules/:subModuleId/comments');

export const ModuleRoutes = router;
