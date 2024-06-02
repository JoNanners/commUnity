const express = require('express');
const router = express.Router();
const forumController = require('../controllers/forumController');

// Routes for managing forum posts
router.post('/posts', forumController.createForumPost);
router.get('/posts', forumController.getAllForumPosts);
router.get('/posts/:id', forumController.getForumPostById);
router.put('/posts/:id', forumController.updateForumPost);
router.delete('/posts/:id', forumController.deleteForumPost);

module.exports = router;
