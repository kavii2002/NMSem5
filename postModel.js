// models/postModel.js
const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  imageUrl: { type: String, default: null }, 
  tags: [String] // Added tags field
}, {
  timestamps: true // Adds createdAt and updatedAt fields
});

module.exports = mongoose.model('Post', PostSchema);