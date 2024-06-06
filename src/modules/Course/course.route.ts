import { Router } from 'express';
import { CourseControllers } from './course.controller';

const router = Router();

router.post('/create-course', CourseControllers?.createCourse);

router.get('/courses/:courseId');
// Module Routes
router.post('/courses/:courseId/modules');
router.get('/courses/:courseId/modules');

// SubModule Routes
router.post('/modules/:moduleId/subModules');
router.get('/modules/:moduleId/subModules');

// Rating Routes
router.post('/modules/:moduleId/ratings');

// Comment Routes
router.post('/subModules/:subModuleId/comments');

export const CourseRoutes = router;
