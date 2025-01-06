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

  if (products) {
    res.json(products);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});

// Create a new product
const createProduct = asyncHandler(async (req, res) => {
  const { name, price, description, image } = req.body;

  const products = new Product({
    name,
    price,
    description,
    image,
  });

  const createdProduct = await products.save();
  res.status(201).json(createdProduct);
});

// Update product details
const updateProduct = asyncHandler(async (req, res) => {
  const { name, price, description, image } = req.body;

  const products = await Product.findById(req.params.id);

  if (product) {
    products.name = name || products.name;
    products.price = price || products.price;
    products.description = description || product.description;
    products.image = image || products.image;

    const updatedProduct = await products.save();
    res.json(updatedProduct);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});

// Delete a product
const deleteProduct = asyncHandler(async (req, res) => {
  const products = await Product.findById(req.params.id);

  if (products) {
    await products.remove();
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
