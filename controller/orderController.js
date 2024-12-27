// controllers/ProductController.js
const asyncHandler = require("express-async-handler");
const Product = require("../models/product");

// Get all products
const getAllProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

// Get product by ID
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});

// Create a new product
const createProduct = asyncHandler(async (req, res) => {
  const { name, price, description, image } = req.body;

  const product = new Product({
    name,
    price,
    description,
    image,
  });

  const createdProduct = await product.save();
  res.status(201).json(createdProduct);
});

// Update product details
const updateProduct = asyncHandler(async (req, res) => {
  const { name, price, description, image } = req.body;

  const product = await Product.findById(req.params.id);

  if (product) {
    product.name = name || product.name;
    product.price = price || product.price;
    product.description = description || product.description;
    product.image = image || product.image;

    const updatedProduct = await product.save();
    res.json(updatedProduct);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});

// Delete a product
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    await product.remove();
    res.json({ message: "Product removed successfully" });
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
