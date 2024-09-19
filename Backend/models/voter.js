// models/Voter.js

const mongoose = require('mongoose');

const voterSchema = new mongoose.Schema({
    state: {
        type: String,
        required: true
    },
    district: {
        type: String,
        required: true
    },
    assemblyConstituency: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Other'],
        required: true
    },
    epicNumber: {
        type: String,
        required: true
    },
    husbandOrFatherName: {
        type: String,
        required: true
    },
    partNumber: {
        type: String,
        required: true
    },
    partName: {
        type: String,
        required: true
    },
    pollingStation: {
        type: String,
        required: true
    },
    dateOfPoll: {
        type: Date,
        required: true
    },
    timeOfPoll: {
        type: String,
        required: true
    }, 
    phoneNumber: {
        type: String,
        required: true
    }
});

const Voter = mongoose.model('Voter', voterSchema);

module.exports = Voter;