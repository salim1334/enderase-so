const express = require('express');
const jwt = require('jsonwebtoken');
const { User } = require('../models');

const router = express.Router();

// POST /api/auth/register
router.post('/register', async (req, res) => {
  // Role is intentionally omitted from destructuring
  const { username, email, password } = req.body;

  try {
    // Basic validation
    if (!username || !email || !password) {
      return res
        .status(400)
        .json({ message: 'Please provide username, email, and password' });
    }

    const userExists = await User.findOne({ where: { email } });
    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create user with default 'client' role
    const user = await User.create({
      username,
      email,
      password,
      role: 'client', // Hardcode role to 'client'
    });

    res
      .status(201)
      .json({ message: 'User registered successfully', userId: user.id });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// POST /api/auth/login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: 'Please provide email and password' });
    }

    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '30d' } // Token expires in 1 hour
    );

    res.json({
      token,
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

module.exports = router;
