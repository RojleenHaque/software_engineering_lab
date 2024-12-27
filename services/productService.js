const Product = require('../models/product');

// Get all products
const getProducts = async () => {
  return await Product.find({});
};

// Get product by ID
const getProductById = async (id) => {
  return await Product.findById(id);
};

// Create a new product
const createProduct = async (data) => {
  const product = new Product(data);
  return await product.save();
};

// Update a product
const updateProduct = async (id, data) => {
  return await Product.findByIdAndUpdate(id, data, { new: true });
};

// Delete a product
const deleteProduct = async (id) => {
  return await Product.findByIdAndDelete(id);
};

module.exports = {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
