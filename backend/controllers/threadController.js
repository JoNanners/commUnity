// backend/controllers/threadController.js

const Thread = require('../models/Thread');
const Post = require('../models/Post');

exports.createThread = async (req, res) => {
  const { title } = req.body;

  try {
    const newThread = new Thread({
      title,
      createdBy: req.user.id
    });

    const thread = await newThread.save();
    res.json(thread);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.getThreads = async (req, res) => {
  try {
    const threads = await Thread.find().populate('createdBy', ['name']);
    res.json(threads);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.createPost = async (req, res) => {
  const { content } = req.body;
  const { threadId } = req.params;

  try {
    const newPost = new Post({
      content,
      thread: threadId,
      createdBy: req.user.id
    });

    const post = await newPost.save();
    res.json(post);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.getPosts = async (req, res) => {
  const { threadId } = req.params;

  try {
    const posts = await Post.find({ thread: threadId }).populate('createdBy', ['name']);
    res.json(posts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
