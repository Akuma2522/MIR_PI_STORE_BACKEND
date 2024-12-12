import {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProductById

} from '../services/productService.js';

export async function getProductsHandler(req, res) {
  try {
    const products = await getAllProducts();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export async function getProductByIdHandler(req, res) {
  try {
    const product = await getProductById(req.params.id);
    res.json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export async function createProductHandler(req, res) {
  try {
    const product = await createProduct(req.body);
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
export async function updateProductHandler(req, res) {
  try {
    const updatedProduct = await updateProduct(req.params.id, req.body);
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


