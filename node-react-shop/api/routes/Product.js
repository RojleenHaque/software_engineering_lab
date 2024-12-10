const express = require("express");
const productRoute = express.Router();
const asyncHandler = require("express-async-handler");
const Product = require("../models/product"); // Assuming you have a Product model

// Fetch all products
productRoute.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await Product.find({}); // Fetch all products from the database
    res.json(products); // Send the products as a response
  })
);

//get product
productRoute.get(
  "/:id",
  asyncHandler(async (req, res) => {
    try {
      // Find the product by ID using req.params.id
      const product = await Product.findById(req.params.id);

      if (product) {
        res.json(product); // If the product is found, send it as a response
      } else {
        res.status(404).json({ message: "Product not found" }); // If the product is not found, send 404
      }
    } catch (error) {
      res.status(500).json({ message: "Error fetching product", error: error.message });
    }
  })
);

module.exports = productRoute;
