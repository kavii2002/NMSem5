// authController.js (Signup)
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('./models/userModel');

exports.signup = async (req, res) => {
  const { username, email, password } = req.body;
  const hashed = await bcrypt.hash(password, 10);
  const user = await User.create({ username, email, password: hashed });
  res.status(201).json({ message: "User created", user });
};

// Login
exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(401).json({ error: "Invalid credentials" });

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(401).json({ error: "Invalid credentials" });

  const token = jwt.sign(
      { 
          id: user._id,
          email: user.email,        // Added for UI
          username: user.username   // Added for UI
      }, 
      process.env.JWT_SECRET, 
      { expiresIn: "1h" }
  );
  res.json({ token });
};
