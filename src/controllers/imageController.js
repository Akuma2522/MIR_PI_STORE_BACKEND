import { uploadImage } from '../services/imageService.js'; // Asegúrate de tener la lógica para subir la imagen en este servicio

export async function uploadSingleImage(req, res) {
  const { buffer, size } = req.file;
  const maxSize = 1024 * 1024 * 2; // 2MB

  if (size > maxSize) {
    return res.status(400).json({ message: 'File is too large' });
  }

  try {
    // Pasa el buffer directamente al servicio de subida
    const result = await uploadImage(buffer);
    return res.json(result);
  } catch (error) {
    console.error('Error uploading image:', error);
    return res.status(500).json({ message: 'Failed to upload image', error });
  }
}
