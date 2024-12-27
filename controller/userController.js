const generateToken = require('../tokenGeneration'); // Import token generation function

// User login endpoint
userRoute.post('/login', asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    // If user is found and password matches, generate the token
    res.json({
      _id: user.id,
      name: user.name,
      token: generateToken(user._id), // Generate JWT token
      isAdmin: user.isAdmin,
      createdAt: user.createdAt,
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
}));
