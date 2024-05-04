// routes/voterRoute.js

const express = require('express');
const router = express.Router();
const voterController = require('../controllers/voterController');

// Add a new voter
router.post('/addVoter', voterController.addVoter);

module.exports = router;
