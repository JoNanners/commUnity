// models/Complaint.js

const mongoose = require('mongoose');

const complaintSchema = new mongoose.Schema({
  about: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  personName: {
    type: String,
    required: true,
  },
  flatNo: {
    type: String,
    required: true,
  },
  phoneNo: {
    type: String,
    required: true,
  },
  rectified: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model('Complaint', complaintSchema);
