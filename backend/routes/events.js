// backend/routes/events.js

const express = require('express');
const { check, validationResult } = require('express-validator');
const eventController = require('../controllers/eventController');
const auth = require('../middleware/auth');

const router = express.Router();

router.post('/', [
  auth,
  [
    check('name', 'Name is required').not().isEmpty(),
    check('description', 'Description is required').not().isEmpty(),
    check('date', 'Please include a valid date').isISO8601(),
    check('location', 'Location is required').not().isEmpty()
  ]
], eventController.createEvent);

router.get('/', eventController.getEvents);

module.exports = router;
