// backend/controllers/volunteerController.js

const VolunteerOpportunity = require('../models/VolunteerOpportunity');

exports.createOpportunity = async (req, res) => {
  const { title, description, date, location } = req.body;

  try {
    const newOpportunity = new VolunteerOpportunity({
      title,
      description,
      date,
      location,
      createdBy: req.user.id
    });

    const opportunity = await newOpportunity.save();
    res.json(opportunity);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.getOpportunities = async (req, res) => {
  try {
    const opportunities = await VolunteerOpportunity.find().populate('createdBy', ['name']);
    res.json(opportunities);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
