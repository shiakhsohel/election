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

module.exports = {
    addVoter
};
