const express = require('express');
const { protect, isAdmin } = require('../middleware/authMiddleware');
const { User } = require('../models');

const router = express.Router();

// All routes in this file are protected and for admins only
router.use(protect, isAdmin);

// GET /api/users - Get all users
router.get('/', async (req, res) => {
  try {
    const users = await User.findAll({
      attributes: { exclude: ['password'] }, // Exclude passwords from the result
    });
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// GET /api/users/:id - Get a single user by ID
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id, {
      attributes: { exclude: ['password'] },
    });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// PUT /api/users/:id - Update a user's role or details
router.put('/:id', async (req, res) => {
  const { username, email, role } = req.body;
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Update fields
    user.username = username || user.username;
    user.email = email || user.email;
    user.role = role || user.role;

    await user.save();
    res.json({ message: 'User updated successfully', user });

  } catch (error) {
    res.status(400).json({ message: 'Failed to update user', error: error.message });
  }
});

// DELETE /api/users/:id - Delete a user
router.delete('/:id', async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    await user.destroy();
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

module.exports = router;
