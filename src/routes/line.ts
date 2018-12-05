import { Router } from 'express';
import * as echoControllers from '../controllers/lineControllers';

const router = Router();

router.get('/line', echoControllers.echo);

export default router;
