import { Router } from 'express';
import { sendMail } from '../controllers/mailer.js';

const router = new Router();

router.post("/", sendMail)

export default router;