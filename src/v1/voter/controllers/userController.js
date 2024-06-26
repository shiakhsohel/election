// controllers/userController.js

const userRepository = require('../repositories/userRepository');

// Register a new user
const registerUser = async (req, res, next) => {
    try {
        const { username, email, password } = req.body;

        // Ensure User collection exists
        await userRepository.ensureUserCollection();

        // Check if user already exists
        const existingUser = await userRepository.findUserByEmail(email);
        if (existingUser) {
            return res.status(400).json({ message: "User already exists!" });
        }

        // Create a new user
        const newUser = await userRepository.registerUser({ username, email, password });
        res.status(201).json({ message: "User registered successfully!" });
    } catch (err) {
        next(err);
    }
};

module.exports = {
    registerUser
};
