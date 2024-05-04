// repositories/voterRepository.js

const Voter = require('../../../../models/Voter');

// Check if Voter collection exists, if not, create it
const ensureVoterCollection = async () => {
    if (!(await Voter.exists())) {
        await Voter.createCollection();
    }
};

// Add a new voter to database
const addVoter = async (voterData) => {
    const newVoter = new Voter(voterData);
    return await newVoter.save();
};

module.exports = {
    ensureVoterCollection,
    addVoter
};
