const jwt = require('jsonwebtoken');

// Function to generate a JWT token
const generateToken = (id) => {
  // Sign the token with the user's ID and a secret key from environment variables
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d', // Token expiration time, adjust as needed
  });
};

module.exports = generateToken;
