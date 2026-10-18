const { DataTypes } = require("sequelize");
const sequelize = require("../utils/db-connection");

const bookings = sequelize.define("bookings", {
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
    references: {
      model: "buses",
      key: "id",
    },
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
