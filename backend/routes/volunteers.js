// backend/routes/volunteers.js

const express = require('express');
const { check, validationResult } = require('express-validator');
const volunteerController = require('../controllers/volunteerController');
const auth = require('../middleware/auth');

const router = express.Router();

router.post('/', [
  auth,
  [
    check('title', 'Title is required').not().isEmpty(),
    check('description', 'Description is required').not().isEmpty(),
    check('date', 'Please include a valid date').isISO8601(),
    check('location', 'Location is required').not().isEmpty()
  ]
], volunteerController.createOpportunity);

router.get('/', volunteerController.getOpportunities);

module.exports = router;
