import { Router } from 'express';
import { NoteControllers } from './note.controller';

const router = Router();

router.get('/');
router.post('/create-note', NoteControllers?.createNote);

export const NoteRoutes = router;
