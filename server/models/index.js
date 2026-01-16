const User = require('./User');
const Bid = require('./Bid');

// A User (staff) can have many Bids
User.hasMany(Bid, {
  foreignKey: 'staffId',
  as: 'bids',
});

// Each Bid belongs to one User (staff)
Bid.belongsTo(User, {
  foreignKey: 'staffId',
  as: 'staff',
  // ADD THIS LINE:
  foreignKeyConstraint: true,
  onDelete: 'SET NULL',
  onUpdate: 'CASCADE',

  foreignKeyConstraint: true,
  constraints: true,
});

module.exports = { User, Bid };
