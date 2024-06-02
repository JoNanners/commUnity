// backend/controllers/complaintController.js

const Complaint = require('../models/Complaint');

exports.createComplaint = async (req, res) => {
  const { title, description, public } = req.body;

  try {
    const newComplaint = new Complaint({
      title,
      description,
      public,
      createdBy: req.user.id
    });

    const complaint = await newComplaint.save();
    res.json(complaint);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.getPublicComplaints = async (req, res) => {
  try {
    const complaints = await Complaint.find({ public: true }).populate('createdBy', ['name']);
    res.json(complaints);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.getUserComplaints = async (req, res) => {
  try {
    const complaints = await Complaint.find({ createdBy: req.user.id });
    res.json(complaints);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
