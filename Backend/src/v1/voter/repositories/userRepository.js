// repositories/userRepository.js
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
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
      const passwordVerification = await bcrypt.compare(
        password,
        existingUser.password
      );

      if (passwordVerification) {
        const token = jwt.sign(
          { userId: existingUser._id },
          process.env.JWT_SECRET,
          {
            expiresIn: "12h",
          }
        );

        if (token) {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
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
