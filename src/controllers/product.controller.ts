import { Request, Response } from "express";
import productModel from "../models/product.model";
import { Product } from "@prisma/client";

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const products = await productModel.fetchAllProducts();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

const getProductById = async (req: Request, res: Response) => {
  try {
    const product = await productModel.fetchProductById(
      parseInt(req.params.id)
    );
    if (!product) {
      res.status(404).json({ error: "Product not found" });
      return;
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

const createProduct = async (req: Request, res: Response) => {
  try {
    const product = await productModel.createProduct(req.body);
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

const updateProduct = async (
  req: Request<{ id: string }, {}, Partial<Omit<Product, "id">>>,
  res: Response
) => {
  try {
    const { productName, price } = req.body;
    const product = await productModel.updateProduct(parseInt(req.params.id), {
      productName,
      price,
    });
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

const deleteProduct = async (req: Request, res: Response) => {
  try {
    await productModel.deleteProduct(parseInt(req.params.id));
    res.status(204).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export default {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
