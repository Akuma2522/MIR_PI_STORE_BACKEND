import cloudinary from '../utils/cloudinaryConfig.js';

export async function uploadImage(image) {
  try {
    const result = await cloudinary.uploader.upload(image, {
      folder: 'upload-images/productos',
      use_filename: true,
      unique_filename: false,
    });
    return result;
  } catch (error) {
    console.log('🚀 ~ file: upload.service.js:42 ~ uploadImage ~ error', error);
    return error;
  }
}

