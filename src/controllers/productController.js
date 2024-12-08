import {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProductById
} from '../services/productService';

export async function getProductsHandler(req, res) {
  try {
    const { category, minPrice, maxPrice } = req.query;
    const products = await getAllProducts(category, minPrice, maxPrice);
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export async function createProductHandler(req, res) {
  try {
    const product = await createProduct(req.body, req.file);
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


export async function updateProductHandler(req, res) {
  try {
    const updatedProduct = await updateProduct(req.params.id, req.body, req.file);
    res.json(updatedProduct);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export async function deleteProductHandler(req, res) {
  try {
    await deleteProductById(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

