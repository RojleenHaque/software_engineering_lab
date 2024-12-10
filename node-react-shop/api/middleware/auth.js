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

      // Verify token
      const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

      // Fetch user from the database (excluding password)
      req.user = await User.findById(decodedToken.id).select("-password");

      // Proceed to the next middleware
      next();
    } catch (err) {
      console.error("Error in token verification:", err.message);
      res.status(401);
      throw new Error("Token verification failed!");
    }
  }

  // If no token, send error response
  if (!token) {
    res.status(401);
    throw new Error("You are not authorized!");
  }
});


module.exports = { protect };
