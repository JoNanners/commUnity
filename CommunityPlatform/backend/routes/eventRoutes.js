// routes/eventRoutes.js

const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const eventController = require('../controllers/eventController');

// Middleware to protect routes
router.use(authMiddleware);

router.get('/', eventController.getEvents);
router.post('/', eventController.createEvent);

module.exports = router;
