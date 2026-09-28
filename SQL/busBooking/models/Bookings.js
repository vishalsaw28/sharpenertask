const { Sequelize, DataTypes } = require("sequelize");

const sequelize = require("../utils/db-connection");

const bookings = sequelize.define("users", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  busId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  bookingDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },

  seatNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  totalAmount: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = bookings;
