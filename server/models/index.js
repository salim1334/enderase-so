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
});

module.exports = { User, Bid };
