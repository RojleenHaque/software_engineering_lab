const jwt = require('jsonwebtoken');

// Function to generate a JWT token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d', // Token expiration time, adjust as needed
  });
};

module.exports = generateToken;
