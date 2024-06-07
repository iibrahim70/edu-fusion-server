import { Router } from 'express';

const router = Router();

router.post('/create-subModule');
router.get('/');

// Rating Routes
router.post('/modules/:moduleId/ratings');

// Comment Routes
router.post('/subModules/:subModuleId/comments');

export const SubModuleRoutes = router;
