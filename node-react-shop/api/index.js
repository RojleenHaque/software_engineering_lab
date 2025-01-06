// //api/index.js//main server
// const express = require("express");
// const dotenv = require("dotenv");
// dotenv.config();
// //const products = require("./Data/products"); // Changed to products to avoid naming conflict
// const mongoose= require("mongoose");
// const databaseSeeder=require('./databaseSeeder');
// const userRoute = require("./routes/User");
// const productRoute= require("./routes/Product");
// const orderRoute=require("./routes/Order");
// const route=require("./routes/admin")
// // const cors = require('cors');
// // app.use(cors()); 

// const app = express();
// const PORT = process.env.PORT || 9000; // Default to 9000 if PORT is not set

// app.use(express.json());

// const cors = require("cors"); //
// app.use(cors());
// app.use(
//     cors({
//     //   origin: "*", // Frontend URL
//     //   methods: ["GET", "POST"],       // Allowed methods
//     origin: "http://localhost:5173",
//       credentials: true,
//       allowedHeaders: ["Content-Type", "Authorization"],
//     })
//   );
  
// // // Route to return all products
// // app.get("/api/products", (req, res) => {
// //     res.json(products); // Send the products array as a response
// // });
// // // Route to return a specific product by id
// // app.get("/api/products/:id", (req, res) => {
// //     const productId = parseInt(req.params.id, 10); // Convert the param to an integer (if it's a number)

// //     // Find the product by id
// //     const foundProduct = products.find((product) => product.id === productId);

// //     if (foundProduct) {
// //         res.json(foundProduct); // Return the product if found
// //     } else {
// //         res.status(404).json({ message: "Product not found" }); // Return 404 if not found
// //     }
// // });



// // // Route to return all user
// // app.get("/api/Users", (req, res) => {
// //     res.json(Users); // Send the products array as a response
// // });
// // // Route to return a specific product by id
// // app.get("/api/Users/:id", (req, res) => {
// //     const productId = parseInt(req.params.id, 10); // Convert the param to an integer (if it's a number)

// //     // Find the product by id
// //     const foundProduct = products.find((User) => product.id === productId);

// //     if (foundProduct) {
// //         res.json(foundProduct); // Return the product if found
// //     } else {
// //         res.status(404).json({ message: "Product not found" }); // Return 404 if not found
// //     }
// // });


// // Routes for seeding data
// app.use('/api/seed', databaseSeeder);

// // Routes for login
// app.use('/api/users', userRoute);

// //route for product
// app.use("/api/products",productRoute); //in frontend

// //route for order
// app.use("/api/orders",orderRoute);

// //route for admin
// app.use("/api/adminRoutes",route);


// //connect to mongoDB
// mongoose.connect(process.env.MONGOOSEDB_URL)
//     .then(() => {
//         console.log("Connected to MongoDB");
//     })
//     .catch((err) => {
//         console.error("Error connecting to MongoDB", err);
//     });
// //rojleenhaque
// //3kK3Oz0bzxUQuhNC
// //mongodb+srv://rojleenhaque:3kK3Oz0bzxUQuhNC@cluster0.bxzuh.mongodb.net/


// // Start the server
// app.listen(PORT || 9000, () => {
//     console.log(`Server listening on port ${PORT}`); // Correct use of backticks
// });





import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import userRouter from './routes/User.js'

const app=express()
const PORT=process.env.PORT|| 4000
connectDB()

app.use(express.json())
app.use(cors())


//endpoints
app.get("/", (req, res) =>{
    res.send("Api Working")
 })


 // // Routes for seeding data
// app.use('/api/seed', databaseSeeder);

// Routes for login
app.use('/api/users', userRouter);

// //route for product
// app.use("/api/products",productRoute); //in frontend

// //route for order
// app.use("/api/orders",orderRoute);

// //route for admin
// app.use("/api/adminRoutes",route);




 //start server
 app.listen(PORT || 4000, () => {
        console.log(`Server listening on port ${PORT}`); // Correct use of backticks
    });