//models//User.js

const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false },
  },
  { timestamps: true } // Automatically track createdAt and updatedAt
);

// Validate if password matches
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// Register password hashing
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {  // Only hash the password if it has been modified
    return next();
  }

  const salt = await bcrypt.genSalt(10);  // Generate a salt
  this.password = await bcrypt.hash(this.password, salt);  // Hash the password
  next();  // Proceed to the next middleware or save function
});

const userModel = mongoose.model("User", userSchema);

export default userModel;