// controllers/complaintController.js

const Complaint = require('../models/Complaint');

// @desc    Get all complaints
// @route   GET /api/complaints
// @access  Public
exports.getComplaints = async (req, res) => {
  try {
    const complaints = await Complaint.find();
    res.json(complaints);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Server Error' });
  }
};

// @desc    Create a new complaint
// @route   POST /api/complaints
// @access  Private
exports.createComplaint = async (req, res) => {
  const { about, description, personName, flatNo, phoneNo } = req.body;

  try {
    const newComplaint = new Complaint({
      about,
      description,
      personName,
      flatNo,
      phoneNo,
    });

    const complaint = await newComplaint.save();
    res.json(complaint);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Server Error' });
  }
};
