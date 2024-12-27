// routes/adminRoutes.js
const express = require("express");
const {
  getAllUsers,
  getAllOrders,
  getOrderById,
  deleteProduct,
  updateProduct,
  createProduct,
} = require("../controllers/AdminController");
const { protect, admin } = require("../middleware/auth");

const router = express.Router();

// Admin routes (protected by admin middleware)
router.get("/users", protect, admin, getAllUsers);
router.get("/orders", protect, admin, getAllOrders);
router.get("/orders/:id", protect, admin, getOrderById);
router.delete("/products/:id", protect, admin, deleteProduct);
router.put("/products/:id", protect, admin, updateProduct);
router.post("/products", protect, admin, createProduct);

module.exports = router;

