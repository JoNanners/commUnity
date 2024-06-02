// backend/models/VolunteerOpportunity.js

const mongoose = require('mongoose');

const VolunteerOpportunitySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
});

module.exports = mongoose.model('VolunteerOpportunity', VolunteerOpportunitySchema);
