// routes/voterRoute.js

const express = require('express');
const router = express.Router();
const voterController = require('../src/v1/voter/controllers/voterController');

// Add a new voter
router.post('/addVoter', voterController.addVoter);

module.exports = router;
