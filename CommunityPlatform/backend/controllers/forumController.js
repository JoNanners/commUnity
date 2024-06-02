const ForumPost = require('../models/ForumPost');

// Controller function to create a new forum post
exports.createForumPost = async (req, res) => {
    try {
        const { title, content, author } = req.body;
        const forumPost = new ForumPost({
            title,
            content,
            author
        });
        const newForumPost = await forumPost.save();
        res.status(201).json(newForumPost);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
};

// Controller function to get all forum posts
exports.getAllForumPosts = async (req, res) => {
    try {
        const forumPosts = await ForumPost.find();
        res.status(200).json(forumPosts);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
};

// Controller function to get a single forum post by ID
exports.getForumPostById = async (req, res) => {
    try {
        const forumPost = await ForumPost.findById(req.params.id);
        if (!forumPost) {
            return res.status(404).json({ error: 'Forum post not found' });
        }
        res.status(200).json(forumPost);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
};

// Controller function to update a forum post by ID
exports.updateForumPost = async (req, res) => {
    try {
        const { title, content } = req.body;
        const updatedForumPost = await ForumPost.findByIdAndUpdate(req.params.id, { title, content }, { new: true });
        if (!updatedForumPost) {
            return res.status(404).json({ error: 'Forum post not found' });
        }
        res.status(200).json(updatedForumPost);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
};

// Controller function to delete a forum post by ID
exports.deleteForumPost = async (req, res) => {
    try {
        const deletedForumPost = await ForumPost.findByIdAndDelete(req.params.id);
        if (!deletedForumPost) {
            return res.status(404).json({ error: 'Forum post not found' });
        }
        res.status(200).json({ message: 'Forum post deleted successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
};
