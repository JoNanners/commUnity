// routes/complaintRoutes.js

const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const complaintController = require('../controllers/complaintController');

// Middleware to protect routes
router.use(authMiddleware);

router.get('/', complaintController.getComplaints);
router.post('/', complaintController.createComplaint);

module.exports = router;
