// controllers/AdminController.js
const asyncHandler = require("express-async-handler");
const Product = require("../models/product");
const User = require("../models/User");
const Order = require("../models/order");

// Get all users (admin route)
const getAllUsers = asyncHandler(async (req, res) => {
  const users = await User.find({});
  res.json(users);
});

// Get all orders (admin route)
const getAllOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({})
    .populate("user", "id name")
    .populate("orderItems.product", "name price");
  res.json(orders);
});

// Get order details by ID (admin route)
const getOrderById = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id).populate(
    "user",
    "id name"
  );

  if (order) {
    res.json(order);
  } else {
    res.status(404).json({ message: "Order not found" });
  }
});

// Delete a product (admin route)
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    await product.remove();
    res.json({ message: "Product removed successfully" });
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});

// Update product details (admin route)
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

// Create new product (admin route)
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

module.exports = {
  getAllUsers,
  getAllOrders,
  getOrderById,
  deleteProduct,
  updateProduct,
  createProduct,
};
