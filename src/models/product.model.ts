import { PrismaClient, Product } from "@prisma/client";

const prisma = new PrismaClient();

// Fetch all products
export const fetchAllProducts = async () => {
  return await prisma.product.findMany();
};

// Fetch a product by id
export const fetchProductById = async (id: number) => {
  return await prisma.product.findUnique({ where: { id } });
};

// Create a product
export const createProduct = async (data: Omit<Product, "id">) => {
  return await prisma.product.create({ data });
};

// Update a product
export const updateProduct = async (
  id: number,
  data: Partial<Omit<Product, "id">>
) => {
  return await prisma.product.update({ where: { id }, data });
};

// Delete a product
export const deleteProduct = async (id: number) => {
  return await prisma.product.delete({ where: { id } });
};

export default {
  fetchAllProducts,
  fetchProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
