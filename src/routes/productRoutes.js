import express from 'express';
import multer from 'multer';
import {
  createProductHandler,
  getProductsHandler,
  updateProductHandler,
  deleteProductHandler
} from '../controllers/productController';
import { authenticateUser, authorizeAdmin } from '../auth/auth';

const router = express.Router();
const upload = multer(); // Middleware para manejar archivos

router.get("/", getProductsHandler);
router.post("/", authenticateUser, authorizeAdmin, upload.single("image"), createProductHandler);
router.put("/:id", authenticateUser, authorizeAdmin, upload.single("image"), updateProductHandler);
router.delete("/:id", authenticateUser, authorizeAdmin, deleteProductHandler);

export default router;
