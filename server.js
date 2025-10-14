// server.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path'); // IMPORTANT: Must be required
const authController = require('./authcontroller');
const postController = require('./postController'); // or './controllers/postController' if you move it


const app = express();
app.use(express.json());

// Serve Static Files
// Express will now serve files (like index.html, CSS, JS) from the 'frontend' directory.
app.use(express.static(path.join(__dirname, 'frontend')));


// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// API Routes (The backend endpoints)
app.post('/signup', authController.signup);
app.post('/login', authController.login);

// Post routes (require JWT token)
app.post('/posts', postController.createPost);
app.get('/posts', postController.getPosts);


// Catch-all Route for the Frontend (SPA support)
// This is typically optional if you renamed home.html to index.html and put it in public.
// If home.html was renamed to index.html, you don't strictly need this route:
/*
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'index.html'));
});
*/


// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});