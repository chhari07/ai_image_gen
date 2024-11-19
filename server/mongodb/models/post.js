// models/Post.js

const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    prompt: { type: String, required: true },
    image: { type: String, required: true },  // Store the image URL or base64 string
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Post', postSchema);
