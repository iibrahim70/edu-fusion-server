import { Router } from 'express';

const router = Router();

router.get('/');
router.post('/create-module');

// SubModule Routes
router.post('/modules/:moduleId/subModules');
router.get('/modules/:moduleId/subModules');

// Rating Routes
router.post('/modules/:moduleId/ratings');

// Comment Routes
router.post('/subModules/:subModuleId/comments');

export const ModuleRoutes = router;
