import express from "express";
import { validateToken } from "../controllers/authController.js";

const router = express.Router();

router.post("/validate-token", validateToken);

export default router;
