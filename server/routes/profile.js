const express = require('express');
const { protect } = require('../middleware/authMiddleware');
const { User, Bid } = require('../models');

const router = express.Router();

// GET /api/profile/me - Get the logged-in user's profile
router.get('/me', protect, async (req, res) => {
  try {
    // The user object is already attached to the request by the `protect` middleware
    const user = await User.findByPk(req.user.id, {
      attributes: { exclude: ['password'] },
      include: {
        model: Bid,
        as: 'bids',
      },
    });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

module.exports = router;
