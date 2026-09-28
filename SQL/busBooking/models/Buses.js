const { Sequelize, DataTypes } = require("sequelize");

const sequelize = require("../utils/db-connection");

const buses = sequelize.define("users", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  availableSeats: {
  type: DataTypes.INTEGER,
  allowNull: false
}
});

module.exports = buses;
