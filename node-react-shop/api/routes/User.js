//routes/User.js
 

import express from "express"
import { loginUser,adminLogin,registerUser } from "../controller/userController"
const userRouter=express.Router();

userRouter.post('/register',registerUser)
userRouter.post('/login',loginUser)
userRouter.post('/admin',adminLogin)
export default userRouter;







//previous
// const express = require("express");
// const asyncHandler = require("express-async-handler");
// const User = require("../models/User");
// const jwt = require("jsonwebtoken");
// const { protect } = require("../middleware/auth");


// const userRoute = express.Router();

// // Generate JWT token
// const generateToken = (id) => {
//   return jwt.sign({ id }, process.env.JWT_SECRET, {
//     expiresIn: '30d', // Token expiration time, adjust as needed
//   });
// };

// //login
// userRoute.post('/login', asyncHandler(async (req, res) => {
//   const { email, password } = req.body;
//   const user = await User.findOne({ email });

//   if (user && (await user.matchPassword(password))) {
//     // If user is found and password matches, generate the token
//     res.json({
//       _id: user.id,
//       name: user.name,
//       token: generateToken(user._id), // Ensure token is returned
//       isAdmin: user.isAdmin,
//       createdAt: user.createdAt,
//     });
//   } else {
//     res.status(401);
//     throw new Error("Invalid email or password");
//   }
// }));



// userRoute.post(
//   '/register',
//   asyncHandler(async (req, res) => {
//     const { name, email, password } = req.body;

//     // Check if the user already exists
//     const userExists = await User.findOne({ email });

//     if (userExists) {
//       res.status(400);
//       throw new Error("User already exists");
//     }

//     // Create new user
//     const user = await User.create({
//       name,
//       email,
//       password, // Assuming password hashing is handled in your User model
//     });

//     // Send response if user is created successfully
//     if (user) {
//       res.status(201).json({
//         _id: user.id,
//         name: user.name,
//         token: generateToken(user._id), // Return token for authentication
//         isAdmin: user.isAdmin,
//         createdAt: user.createdAt,
//       });
//     } else {
//       res.status(400);
//       throw new Error("Invalid user data");
//     }
//   })
// );


// // User Profile
// userRoute.get(
//   "/profile",
//   protect,
//   asyncHandler(async (req, res) => {
//     const user = await User.findById(req.user._id);

//     if (user) {
//       res.json({
//         _id: user.id,
//         name: user.name,
//         email: user.email,
//         isAdmin: user.isAdmin,
//         createdAt: user.createdAt,
//       });
//     } else {
//       res.status(404);
//       throw new Error("User not found");
//     }
//   })
// );


// // Update User Profile
// userRoute.put(
//   "/profile",
//   protect,
//   asyncHandler(async (req, res) => {
//     const user = await User.findById(req.user._id);

//     if (user) {
//       user.name = req.body.name || user.name;
//       user.email = req.body.email || user.email;

//       if (req.body.password) {
//         user.password = req.body.password;
//       }

//       const updatedUser = await user.save();

//       res.json({
//         _id: updatedUser._id,
//         name: updatedUser.name,
//         email: updatedUser.email,
//         isAdmin: updatedUser.isAdmin,
//         createdAt: updatedUser.createdAt,
//         token: generateToken(updatedUser._id),
//       });
//     } else {
//       res.status(404);
//       throw new Error("User not found");
//     }
//   })
// );

// module.exports = userRoute;
