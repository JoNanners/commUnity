// controllers/profileController.js

const User = require('../models/User');

// @desc    Get user profile
// @route   GET /api/profile
// @access  Private
exports.getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Server Error' });
  }
};

// @desc    Update user profile
// @route   PUT /api/profile
// @access  Private
exports.updateUserProfile = async (req, res) => {
  const { name, age, flatNo, skills } = req.body;

  try {
    let user = await User.findById(req.user.id);

    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }

    user.name = name || user.name;
    user.age = age || user.age;
    user.flatNo = flatNo || user.flatNo;
    user.skills = skills || user.skills;

    await user.save();

    res.json({ msg: 'Profile updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Server Error' });
  }
};
