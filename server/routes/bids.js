const express = require('express');
const { protect, isStaff, isAdmin } = require('../middleware/authMiddleware');
const { Bid, User } = require('../models');

const router = express.Router();

// GET /api/bids - Get all bids (accessible to all authenticated users)
router.get('/', protect, async (req, res) => {
  try {
    const bids = await Bid.findAll({
      include: { model: User, as: 'staff', attributes: ['username', 'email'] }, // Include staff info
      order: [['createdAt', 'DESC']],
    });
    res.json(bids);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// POST /api/bids - Create a new bid (accessible to staff and admins)
router.post('/', protect, isStaff, async (req, res) => {
  const {
    tender_name,
    company_name,
    bid_bond_amount,
    document_price,
    additional_notes,
    region,
    bid_opening_date,
    bid_closing_date,
  } = req.body;

  try {
    const bid = await Bid.create({
      tender_name,
      company_name,
      bid_bond_amount,
      document_price,
      additional_notes,
      region,
      bid_opening_date,
      bid_closing_date,
      staffId: req.user.id, // Associate the bid with the logged-in staff member
    });
    res.status(201).json(bid);
  } catch (error) {
    res
      .status(400)
      .json({ message: 'Failed to create bid', error: error.message });
  }
});

// PUT /api/bids/:id - Update a bid (accessible to staff and admins)
router.put('/:id', protect, isStaff, async (req, res) => {
  const { id } = req.params;
  const {
    tender_name,
    company_name,
    bid_bond_amount,
    document_price,
    additional_notes,
    region,
    bid_opening_date,
    bid_closing_date,
  } = req.body;

  try {
    const bid = await Bid.findByPk(id);
    if (!bid) {
      return res.status(404).json({ message: 'Bid not found' });
    }

    // Admins can edit any bid, staff can only edit their own bids
    if (req.user.role !== 'admin' && bid.staffId !== req.user.id) {
      return res
        .status(403)
        .json({ message: 'Not authorized to edit this bid' });
    }

    await bid.update(req.body);
    res.json(bid);
  } catch (error) {
    res
      .status(400)
      .json({ message: 'Failed to update bid', error: error.message });
  }
});

// DELETE /api/bids/:id - Delete a bid (accessible to admins only)
router.delete('/:id', protect, isAdmin, async (req, res) => {
  const { id } = req.params;
  try {
    const bid = await Bid.findByPk(id);
    if (!bid) {
      return res.status(404).json({ message: 'Bid not found' });
    }

    await bid.destroy();
    res.json({ message: 'Bid deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

module.exports = router;
