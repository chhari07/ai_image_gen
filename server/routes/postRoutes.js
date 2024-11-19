// routes/postRoutes.js

const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// Example route to store the prompt and image in the database
router.post('/generate', async (req, res) => {
    try {
        const { prompt, image } = req.body;  // image can be a URL or base64 string

        // Save the prompt and image in MongoDB
        const newPost = new Post({
            prompt,
            image,
        });

        await newPost.save();
        res.status(201).json(newPost);  // Return the stored post
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Failed to save the post' });
    }
});

module.exports = router;
