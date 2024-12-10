const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
//const products = require("./Data/products"); // Changed to products to avoid naming conflict
const mongoose= require("mongoose");
const databaseSeeder=require('./databaseSeeder');
const userRoute = require("./routes/User");
const productRoute= require("./routes/Product");
const orderRoute = require("./routes/Order");

const app = express();
const PORT = process.env.PORT || 9000; // Default to 9000 if PORT is not set

app.use(express.json());



// // Route to return all products
// app.get("/api/products", (req, res) => {
//     res.json(products); // Send the products array as a response
// });
// // Route to return a specific product by id
// app.get("/api/products/:id", (req, res) => {
//     const productId = parseInt(req.params.id, 10); // Convert the param to an integer (if it's a number)

//     // Find the product by id
//     const foundProduct = products.find((product) => product.id === productId);

//     if (foundProduct) {
//         res.json(foundProduct); // Return the product if found
//     } else {
//         res.status(404).json({ message: "Product not found" }); // Return 404 if not found
//     }
// });



// // Route to return all user
// app.get("/api/Users", (req, res) => {
//     res.json(Users); // Send the products array as a response
// });
// // Route to return a specific product by id
// app.get("/api/Users/:id", (req, res) => {
//     const productId = parseInt(req.params.id, 10); // Convert the param to an integer (if it's a number)

//     // Find the product by id
//     const foundProduct = products.find((User) => product.id === productId);

//     if (foundProduct) {
//         res.json(foundProduct); // Return the product if found
//     } else {
//         res.status(404).json({ message: "Product not found" }); // Return 404 if not found
//     }
// });


// Routes for seeding data
app.use('/api/seed', databaseSeeder);

// Routes for login
app.use('/api/users', userRoute);

//route for product
app.use("/api/products",productRoute);

//route for order
app.use("/api/orders",orderRoute);


//connect to mongoDB
mongoose.connect(process.env.MONGOOSEDB_URL)
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.error("Error connecting to MongoDB", err);
    });
//rojleenhaque
//3kK3Oz0bzxUQuhNC
//mongodb+srv://rojleenhaque:3kK3Oz0bzxUQuhNC@cluster0.bxzuh.mongodb.net/


// Start the server
app.listen(PORT || 9000, () => {
    console.log(`Server listening on port ${PORT}`); // Correct use of backticks
});
