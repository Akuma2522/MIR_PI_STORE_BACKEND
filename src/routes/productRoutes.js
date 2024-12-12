import express from 'express';
import multer from 'multer';
import {
  createProductHandler,
  getProductsHandler,
  getProductByIdHandler,
  updateProductHandler,
  deleteProductHandler
} from '../controllers/productController.js';
import { uploadSingleImage } from '../controllers/imageController.js';
import { authenticateUser, authorizeAdmin } from '../auth/auth.js';

const router = express.Router();
const upload = multer({ dest: './temp' }); // Middleware para manejar archivos

router.get("/", getProductsHandler);
router.get("/:id", getProductByIdHandler);
router.post("/", authenticateUser, authorizeAdmin, createProductHandler);
router.post("/upload", authenticateUser, authorizeAdmin, upload.single("image"), uploadSingleImage);
router.put("/:id", authenticateUser, authorizeAdmin, upload.single("image"), updateProductHandler);
router.delete("/:id", authenticateUser, authorizeAdmin, deleteProductHandler);


export default router;
