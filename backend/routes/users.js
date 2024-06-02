// backend/routes/users.js

const express = require('express');
const { check, validationResult } = require('express-validator');
const userController = require('../controllers/userController');
const auth = require('../middleware/auth');
const User = require('../models/User');
const router = express.Router();

router.post('/register', [
  check('name', 'Name is required').not().isEmpty(),
  check('age', 'Age is required').not().isEmpty(),
  check('flatNumber', 'Flat number is required').not().isEmpty(),
  check('skills', 'Skills are required').isArray(),
  check('password', 'Password is required').isLength({ min: 6 })
], userController.registerUser);

router.post('/login', [
  check('flatNumber', 'Flat number is required').not().isEmpty(),
  check('password', 'Password is required').not().isEmpty()
], userController.loginUser);

router.get('/me', auth, async (req, res) => {
  try {
      const user = await User.findById(req.user.id).select('-password');
      res.json(user);
  } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
  }
});

module.exports = router;
