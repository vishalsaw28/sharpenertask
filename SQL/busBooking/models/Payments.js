const { Sequelize, DataTypes } = require("sequelize");

const sequelize = require("../utils/db-connection");

const payments = sequelize.define("users", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },

  bookingId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  amount: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  paymentMethod: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  patmentStatus: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = payments;
