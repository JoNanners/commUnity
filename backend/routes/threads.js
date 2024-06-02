// backend/routes/threads.js

const express = require('express');
const { check, validationResult } = require('express-validator');
const threadController = require('../controllers/threadController');
const auth = require('../middleware/auth');

const router = express.Router();

router.post('/', [
  auth,
  [
    check('title', 'Title is required').not().isEmpty()
  ]
], threadController.createThread);

router.get('/', threadController.getThreads);

router.post('/:threadId/posts', [
  auth,
  [
    check('content', 'Content is required').not().isEmpty()
  ]
], threadController.createPost);

router.get('/:threadId/posts', threadController.getPosts);

module.exports = router;
