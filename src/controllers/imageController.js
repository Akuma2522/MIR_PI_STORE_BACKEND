import { uploadImage } from '../services/imageService.js'; // Asegúrate de tener la lógica para subir la imagen en este servicio
import fs from 'fs'
export async function uploadSingleImage(req, res) {
  const { path, size } = req.file; // as Express.Multer.File;
  const maxSize = 1024 * 1024 * 2; // 2mb
  if (size > maxSize) {
    fs.unlinkSync(path);
    return res.status(400).json({ message: 'File is too large' });
  }
  try {
    const result = await uploadImage(path);
    return res.status(201).json(result);
  } catch (error) {
    return res.status(500).json(error);
  } finally {
    fs.unlinkSync(path);
  }
}
