// controllers/userController.js
const bcrypt = require("bcrypt");
const userRepository = require("../repositories/userRepository");

// Register a new user
const registerUser = async (req, res, next) => {
  try {
    let { username, email, password } = req.body;

    // Ensure User collection exists
    await userRepository.ensureUserCollection();

    // Check if user already exists
    const existingUser = await userRepository.findUserByEmail(email);
    if (existingUser) {
      return res.status(400).json({ message: "User already exists!" });
    }
    password = await bcrypt.hash(password, 10);
    // Create a new user
    const newUser = await userRepository.registerUser({
      username,
      email,
      password,
    });
    res.status(201).json({ message: "User registered successfully!" });
  } catch (err) {
    next(err);
  }
};

const loginUser = async (req, res, next) => {
  const { email, password } = req.body;

  const checkExistingUser = await userRepository.loginUser(email, password);

  if (checkExistingUser == true) {
    res.status(200).json({ message: "the password is correct , welcome " });
  } else res.status(400).json({ message: "Invalid credentials"});
};

// logout user

module.exports = {
  registerUser,
  loginUser,
};
