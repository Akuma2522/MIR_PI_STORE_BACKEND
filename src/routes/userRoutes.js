
import { registerUserHandler, loginHandler } from '../controllers/userController.js';
import { Router } from 'express';

const router = Router();
router.post("/register", registerUserHandler);
router.post("/login", loginHandler);

export default router;
