// repositories/userRepository.js
const bcrypt = require("bcrypt");
const User = require("../../../../models/user");

// Check if User collection exists, if not, create it
const ensureUserCollection = async () => {
  if (!(await User.exists())) {
    await User.createCollection();
  }
};

// Check if user already exists
const findUserByEmail = async (email) => {
  return await User.findOne({ email });
};

// Register a new user
const registerUser = async (userData) => {
  const newUser = new User(userData);
  return await newUser.save();
};

const loginUser = async (email, password) => {
  try {
    const existingUser = await findUserByEmail(email);
    if (existingUser) {
      return bcrypt.compare(password, existingUser.password);
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  ensureUserCollection,
  findUserByEmail,
  registerUser,
  loginUser,
};
