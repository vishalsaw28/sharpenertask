const { DataTypes } = require("sequelize");
const sequelize = require("../config/database"); // Adjust the path to your sequelize instance config

const BorrowRecord = sequelize.define("BorrowRecord", {
  borrowedAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  dueAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  returnedAt: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  fineAmount: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
    defaultValue: 0.0,
  },
  paymentStatus: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "not_required",
    validate: {
      isIn: [["pending", "paid", "not_required"]],
    },
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "borrowed",
    validate: {
      isIn: [["borrowed", "return_pending_payment", "returned"]],
    },
  },
});

module.exports = BorrowRecord;
