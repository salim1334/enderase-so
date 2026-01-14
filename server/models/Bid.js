
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Bid = sequelize.define('Bid', {
  tender_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  company_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  bid_bond_amount: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  document_price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  additional_notes: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  bid_opening_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  bid_closing_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

module.exports = Bid;
