// controllers/voterController.js

const voterRepository = require('../../../../src/v1/voter/repositories/voterRepository');

// Custom validation function for gender
const validateGender = (gender) => {
    return ['Male', 'Female', 'Other'].includes(gender);
};

// Custom validation function for date
const validateDate = (date) => {
    // Assuming date is in YYYY-MM-DD format
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    return regex.test(date);
};

// Add a new voter
const addVoter = async (req, res, next) => {
    try {
        const voterData = req.body;

        // Check if Voter collection exists, if not, create it
        await voterRepository.ensureVoterCollection();

        // Custom validations
        if (!validateGender(voterData.gender)) {
            return res.status(400).json({ message: "Invalid gender. Gender must be Male, Female, or Other." });
        }
        if (!validateDate(voterData.dateOfPoll)) {
            return res.status(400).json({ message: "Invalid date format. Date format must be YYYY-MM-DD." });
        }

        // Add voter using repository
        const newVoter = await voterRepository.addVoter(voterData);

        res.status(201).json(newVoter, { message: "User registered successfully!" });
    } catch (err) {
        next(err);
    }
};

// Update an existing voter
const updateVoter = async (req, res, next) => {
    try {
        const voterId = req.body.id; // Assuming the voter ID is sent in the request body
        const voterData = req.body;

        // Custom validations
        if (!validateGender(voterData.gender)) {
            return res.status(400).json({ message: "Invalid gender. Gender must be Male, Female, or Other." });
        }
        if (!validateDate(voterData.dateOfPoll)) {
            return res.status(400).json({ message: "Invalid date format. Date format must be YYYY-MM-DD." });
        }

        // Check if the voter ID exists in the database
        const existingVoter = await voterRepository.getVoterById(voterId);
        if (!existingVoter) {
            return res.status(404).json({ message: "Voter ID not found." });
        }

        // Update voter using repository
        const updatedVoter = await voterRepository.updateVoter(voterId, voterData);

        res.status(200).json({ message: "User updated successfully!" });
    } catch (err) {
        next(err);
    }
};

// Delete an existing voter
const deleteVoter = async (req, res, next) => {
    try {
        const voterId = req.body.id; // Assuming the voter ID is sent in the request body

        // Check if the voter ID exists in the database
        const existingVoter = await voterRepository.getVoterById(voterId);
        if (!existingVoter) {
            return res.status(404).json({ message: "Voter ID not found." });
        }

        // Delete voter using repository
        await voterRepository.deleteVoter(voterId);

        res.status(200).json({ message: "User deleted successfully!" });
    } catch (err) {
        next(err);
    }
};

// Universal search
const searchVoter = async (req, res, next) => {
    try {
        const searchString = req.body.searchString; // Assuming the search string is sent in the request body

        // Search voter using repository
        const searchResults = await voterRepository.searchVoter(searchString);

        res.status(200).json(searchResults);
    } catch (err) {
        next(err);
    }
};

module.exports = {
    addVoter, updateVoter, deleteVoter,searchVoter
};
