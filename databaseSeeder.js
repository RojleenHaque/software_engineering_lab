//databaseSeeder
const router = require('express').Router();
const User = require('./models/User');
const users = require('./Data/Users');
const Product = require('./models/product');
const products = require('./Data/products');
const AsynHandeler= require("express-async-handler")

// Seed users
router.post("/users", AsynHandeler(async(req, res) => {
    await User.deleteMany({});  // Delete existing users to avoid duplicates
    const UserSeeder = await User.insertMany(users);
    res.send({ UserSeeder });
}));

// Seed products
router.post("/products", AsynHandeler(async (req, res) => {
    await Product.deleteMany({});  // Delete existing products to avoid duplicates
    const ProductSeeder = await Product.insertMany(products);
    res.send({ ProductSeeder });
}));

module.exports = router;
