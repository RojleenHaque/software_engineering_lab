//middleware/auth.js
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../models/User");

const protect = asyncHandler(async (req, res, next) => {
  let token;

  // Check if Authorization header is present and starts with "Bearer"
  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    try {
      // Extract token
      token = req.headers.authorization.split(" ")[1];
      console.log("Token received:", token);  // Log token for debugging

      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);  // Use jwt.verify for verification

      // Fetch user from the database (excluding password)
      req.user = await User.findById(decoded.id).select("-password");

      // Proceed to the next middleware
      next();
    } catch (err) {
      console.error("Error in token verification:", err.message);
      res.status(401);
      throw new Error("Token verification failed!");
    }
  } else {
    // If no token is present
    res.status(401);
    throw new Error("You are not authorized!");
  }
});
const admin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(403);
    throw new Error("Not authorized as an admin");
  }
};


module.exports = { protect,admin };
