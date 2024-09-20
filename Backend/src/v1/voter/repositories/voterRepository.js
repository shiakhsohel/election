// repositories/voterRepository.js

const Voter = require("../../../../models/Voter");

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

// Function to get voter by ID
const getVoterById = async (voterId) => {
  try {
    const voter = await Voter.findById(voterId);
    return voter;
  } catch (error) {
    throw error;
  }
};

// Function to update voter by ID
const updateVoter = async (voterId, newData) => {
  try {
    const updatedVoter = await Voter.findByIdAndUpdate(voterId, newData, {
      new: true,
    });
    return updatedVoter;
  } catch (error) {
    throw error;
  }
};

// Function to delete voter by ID
const deleteVoter = async (voterId) => {
  try {
    await Voter.findByIdAndDelete(voterId);
  } catch (error) {
    throw error;
  }
};

// Function to search voter by any field
const searchVoter = async (searchString) => {
  try {
    const searchResults = await Voter.find({
      $or: [
        { name: { $regex: searchString, $options: "i" } }, // Case-insensitive search by name
        { phoneNumber: { $regex: searchString } }, // Search by phone number
        // { address: { $regex: searchString, $options: "i" } }, // Case-insensitive search by address
        { epicNumber: { $regex: searchString }, $options: "i" },
        { district: { $regex: searchString }, $options: "i" },
        { partName: { $regex: searchString }, $options: "i" },

        // Add more fields as needed for universal search
      ],
    });
    return searchResults;
  } catch (error) {
    throw error;
  }
};

// Function to retrieve all voters from the database
const getAllVoters = async () => {
  try {
    // Fetch all voters from the database using the Voter model
    const voters = await Voter.find(); // Assuming Voter is your Mongoose model for voters

    return voters;
  } catch (error) {
    // Handle any errors that occur during database operation
    throw new Error("Failed to fetch voters from the database");
  }
};

// Function to retrieve all voters with pagination
const getAllVotersWithPagination = async (offset, limit) => {
  try {
    // Fetch voters from the database with pagination
    const voters = await Voter.find()
      .skip(offset) // Skip the specified number of documents
      .limit(limit); // Limit the number of documents returned

    // Fetch total count of voters
    const totalCount = await Voter.countDocuments();

    return {
      voters,
      totalCount,
    };
  } catch (error) {
    // Handle any errors that occur during database operation
    throw new Error("Failed to fetch voters from the database");
  }
};

module.exports = {
  ensureVoterCollection,
  addVoter,
  getVoterById,
  updateVoter,
  deleteVoter,
  searchVoter,
  getAllVoters,
  getAllVotersWithPagination,
};
