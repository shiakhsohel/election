// routes/voterRoute.js

const express = require('express');
const router = express.Router();
const voterController = require('../src/v1/voter/controllers/voterController');

// Add a new voter
router.post('/addVoter', voterController.addVoter);

// Update an existing voter
router.put('/updateVoter', voterController.updateVoter);

// Delete an existing voter
router.delete('/deleteVoter', voterController.deleteVoter);

// Universal search
router.post('/searchVoter', voterController.searchVoter);


module.exports = router;
