// const express = require('express');
// const cors = require('cors');
// const mongoose = require('mongoose');

// const app = express();
// app.use(cors());
// app.use(express.json());

// // MongoDB connection
// mongoose.connect('mongodb://localhost:27017/medstore', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// // Product schema
// const productSchema = new mongoose.Schema({
//   name: String,
//   price: Number,
//   category: String,
//   stock: Number,
// });

// const Product = mongoose.model('Product', productSchema);

// // Routes
// app.get('/api/products', async (req, res) => {
//   const products = await Product.find();
//   res.json(products);
// });

// app.post('/api/products', async (req, res) => {
//   const product = new Product(req.body);
//   await product.save();
//   res.json(product);
// });

// app.delete('/api/products/:id', async (req, res) => {
//   const { id } = req.params;
//   await Product.findByIdAndDelete(id);
//   res.json({ message: 'Product deleted' });
// });

// // Start server
// app.listen(5000, () => {
//   console.log('Server running on http://localhost:5000');
// });
