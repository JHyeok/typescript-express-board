import { Router } from 'express';
import * as echoControllers from '../controllers/echo';

const router = Router();

router.get('/echo', echoControllers.echo);

export default router;
