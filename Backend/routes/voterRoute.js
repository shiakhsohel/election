// routes/voterRoute.js
// this is the admin functionality 
// admin has the right to add voter , remove voter

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

// Get a voter by ID
router.get('/voter/:id', voterController.getVoterById);

// Route to get all voters
router.get('/voters', voterController.getAllVoters);

module.exports = router;
