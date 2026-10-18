const { DataTypes } = require("sequelize");
const sequelize = require("../utils/db-connection");

const Expense = sequelize.define("Expense", {
  amount: {
    type: DataTypes.FLOAT,
    allowNull: false,
    validate: {
      min: 0.01,
    },
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Expense;
