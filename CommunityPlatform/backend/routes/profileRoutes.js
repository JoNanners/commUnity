// routes/profileRoutes.js

const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const profileController = require('../controllers/profileController');

// Middleware to protect routes
router.use(authMiddleware);

router.get('/', profileController.getUserProfile);
router.put('/', profileController.updateUserProfile);

module.exports = router;
