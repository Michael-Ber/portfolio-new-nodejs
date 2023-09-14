import { Router } from 'express';
import { sendMail } from '../controllers/mailer.js';

const router = new Router();

router.post("/send_mail", sendMail)

export default router;