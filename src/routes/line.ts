import { Router } from 'express';
import * as lineControllers from '../controllers/lineControllers';

const router = Router();

router.get('/line', lineControllers.line);

export default router;
