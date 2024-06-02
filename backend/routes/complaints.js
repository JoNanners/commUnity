// backend/routes/complaints.js

const express = require('express');
const { check, validationResult } = require('express-validator');
const complaintController = require('../controllers/complaintController');
const auth = require('../middleware/auth');

const router = express.Router();

router.post('/', [
  auth,
  [
    check('title', 'Title is required').not().isEmpty(),
    check('description', 'Description is required').not().isEmpty(),
    check('public', 'Public flag is required').isBoolean()
  ]
], complaintController.createComplaint);

router.get('/', complaintController.getPublicComplaints);
router.get('/my-complaints', auth, complaintController.getUserComplaints);

module.exports = router;
