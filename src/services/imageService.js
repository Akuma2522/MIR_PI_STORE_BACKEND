import cloudinary from '../utils/cloudinaryConfig.js';

export async function uploadImage(buffer) {
  try {
    let result;
    const stream = cloudinary.uploader.upload_stream(
      {
        resource_type: 'image',
        folder: 'products'
      },

      (error, response) => {
        if (error) throw new Error('Error uploading image to Cloudinary');
        result = response;
      }
    );
    stream.end(buffer);

    while (!result) {
      await new Promise((resolve) => setTimeout(resolve, 10)); // Small delay to wait for the stream to finish
    }
    return result;
  } catch (error) {
    throw new Error('Error uploading image to Cloudinary');
  }
}

