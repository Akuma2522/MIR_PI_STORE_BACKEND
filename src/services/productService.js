import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getAllProducts() {
  return await prisma.product.findMany();
};


export async function createProduct(data) {


  return prisma.product.create({
    data: {
      name: data.name,
      description: data.description,
      price: parseFloat(data.price),
      category: data.category,
      image: data.image,
    },
  });
};


export async function getProductById(productId) {
  return prisma.product.findUnique({
    where: { id: parseInt(productId) },
  });
}

export async function updateProduct(productId, data) {
  let updateData = data;
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
