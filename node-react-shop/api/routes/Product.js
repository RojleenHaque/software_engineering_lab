const express = require('express');
const asyncHandler = require('express-async-handler');  // Make sure asyncHandler is imported
const productRoute = express.Router();  // Rename the router to productRoute
const Product = require('../models/product'); // Import the Product model

// Get all products
productRoute.get('/', 
  asyncHandler(async (req, res) => {  // Wrap the async function with asyncHandler
    const products = await Product.find({});  // Use the Product model directly
    res.json(products);
  })
);

// Get product by ID
productRoute.get('/:id', 
  asyncHandler(async (req, res) => {  // Wrap the async function with asyncHandler
    const products = await Product.findById(req.params.id);  // Use the Product model directly to find by ID
    if (!products) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json(products);
  })
);

// // Create a product
// productRoute.post('/', 
//   asyncHandler(async (req, res) => {  // Wrap the async function with asyncHandler
//     const newProduct = new Product(req.body);  // Create a new product instance using the data from the request body
//     const savedProduct = await newProduct.save();  // Save the new product to the database
//     res.status(201).json(savedProduct);  // Return the saved product
//   })
// );

// // Update a product
// productRoute.put('/:id', 
//   asyncHandler(async (req, res) => {  // Wrap the async function with asyncHandler
//     const updatedProduct = await Product.findByIdAndUpdate(
//       req.params.id,
//       req.body,
//       { new: true }  // Return the updated document
//     );
//     if (!updatedProduct) {
//       return res.status(404).json({ message: "Product not found" });
//     }
//     res.json(updatedProduct);  // Return the updated product
//   })
// );

// // Delete a product
// productRoute.delete('/:id', 
//   asyncHandler(async (req, res) => {  // Wrap the async function with asyncHandler
//     const deletedProduct = await Product.findByIdAndDelete(req.params.id);  // Delete the product by ID
//     if (!deletedProduct) {
//       return res.status(404).json({ message: "Product not found" });
//     }
//     res.json({ message: 'Product deleted successfully' });  // Return a success message
//   })
// );

module.exports = productRoute;
