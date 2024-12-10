const express = require("express");
const userRoute = express.Router();
const AsyncHandler = require("express-async-handler");
const User = require("../models/User");
const jwt = require("jsonwebtoken"); // Import JWT for token generation
const { protect } = require("../middleware/auth");

// Generate JWT token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { 
    expiresIn: "30d"   //after 30 days new token will be created
   });
};


//login
userRoute.post(
  "/login", // API endpoint: /api/users/login
  AsyncHandler(async (req, res) => {
    const { email, password } = req.body; // Destructure email and password
    const user = await User.findOne({ email }); // Find user by email

    // Check if user exists and password matches
    if (user && (await user.matchPassword(password))) {
      res.json({
        _id: user.id,
        name: user.name,
        token: generateToken(user._id), // Generate token
        isAdmin: user.isAdmin,
        createdAt: user.createdAt, // Corrected property
      }
    );
    } else {
      res.status(401); // Send 401 Unauthorized status
      throw new Error("Invalid email or password"); // Corrected typo
    }
  })
);



userRoute.post(
    "/",
    AsyncHandler(async (req, res) => {
      const { name, email, password } = req.body;
      const existUser = await User.findOne({ email });
  
      if (existUser) {
        res.status(400);
        throw new Error("User already exists");
      } else {
        // Register the user
        const user = await User.create({
          name,
          email,
          password,
        });
  
        if (user) {   //already exis
          res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            isAdmin:userRoute.isAdmin,
            createdAt:user.createdAt
          });
        } else {
          res.status(400);
          throw new Error("Invalid user data");
        }
      }
    })
);




//user profile
userRoute.get(
  "/profile",
   protect,
  AsyncHandler(async (req, res) => {
    // Find the user by ID from the JWT payload (req.user._id)
    const user = await User.findById(req.user._id);

    // If the user is found, return the user data
    if (user) {
      res.json({
        _id: user.id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        createdAt: user.createdAt,
      });
    } else {
      // If the user is not found, send a 404 error
      res.status(404);
      throw new Error("User not found");
    }
  })
);


//user profile update
// User profile update
userRoute.put(
  "/profile",
  protect,
  AsyncHandler(async (req, res) => {
    // Find the user by ID (from the token's payload added by the `protect` middleware)
    const user = await User.findById(req.user._id);

    if (user) {
      // Update fields only if provided in the request body
      user.name = req.body.name || user.name;
      user.email = req.body.email || user.email;

      if (req.body.password) {
        user.password = req.body.password; // Assume `User` model has a pre-save hook to hash passwords
      }

      // Save the updated user to the database
      const updatedUser = await user.save();

      // Send the updated user data in the response
      res.json({
        _id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email,
        isAdmin: updatedUser.isAdmin,
        createdAt: updatedUser.createdAt,
        token: generateToken(updatedUser._id)
      });
    } else {
      // If the user is not found, send a 404 error
      res.status(404);
      throw new Error("User not found");
    }
  })
);






module.exports = userRoute;
