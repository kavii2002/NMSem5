const Post = require('./models/postModel');
const jwt = require('jsonwebtoken');

exports.createPost = async (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Unauthorized' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { title, content, tags, imageUrl } = req.body; 
    const post = await Post.create({ 
        title, 
        content, 
        tags, 
        imageUrl, 
        author: decoded.id 
    });
    res.status(201).json({ message: 'Post created', post });
  } catch (err) {
    res.status(401).json({ error: 'Invalid token' });
  }
};

exports.getPosts = async (req, res) => {
  const posts = await Post.find().populate('author', 'username email');
  res.json(posts);
};
