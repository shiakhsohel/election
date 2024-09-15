// routes/userRoute.js

const express = require('express');
const userRouter = express.Router();
const userController = require('../src/v1/voter/controllers/userController');

// Register a new user
userRouter.post('/register', userController.registerUser);

module.exports = userRouter;
