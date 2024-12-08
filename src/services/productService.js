import { PrismaClient } from '@prisma/client';
const cloudinary = require("../utils/cloudinaryConfig");

const prisma = new PrismaClient();

export async function getAllProducts(category, minPrice, maxPrice) {
  const filters = {};

  if (category) {
    filters.category = category;
  }
  if (minPrice) {
    filters.price = { gte: parseFloat(minPrice) };
  }
  if (maxPrice) {
    filters.price = { lte: parseFloat(maxPrice) };
  }

  return prisma.product.findMany({
    where: filters,
  });
};

export async function createProduct(data, imageFile) {
  let imageUrl = "";

  if (imageFile) {
    const uploadResponse = await cloudinary.uploader.upload(imageFile.path);
    imageUrl = uploadResponse.secure_url;
  }

  return prisma.product.create({
    data: {
      name: data.name,
      description: data.description,
      price: parseFloat(data.price),
      category: data.category,
      image: imageUrl,
    },
  });
};

export async function updateProduct(productId, data, imageFile) {
  let updateData = { ...data };

  if (imageFile) {
    const uploadResponse = await cloudinary.uploader.upload(imageFile.path);
    updateData.image = uploadResponse.secure_url;
  }

  return prisma.product.update({
    where: { id: parseInt(productId) },
    data: updateData,
  });
};

export async function deleteProductById(productId) {
  return prisma.product.delete({
    where: { id: parseInt(productId) },
  });
};
