const Expense = require("../models/expense");

// CREATE expense
const addExpense = async (req, res) => {
  try {
    const { amount, description, category } = req.body;

    const expense = await Expense.create({
      amount,
      description,
      category,
    });

    return res.status(201).json(expense);
  } catch (error) {
    return res.status(400).json({
      message: "Failed to add expense",
      error: error.message,
    });
  }
};

// READ all expenses
const getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.findAll({
      order: [["createdAt", "DESC"]],
    });

    return res.status(200).json(expenses);
  } catch (error) {
    return res.status(500).json({
      message: "Failed to fetch expenses",
      error: error.message,
    });
  }
};

// DELETE expense
const deleteExpense = async (req, res) => {
  try {
    const deleted = await Expense.destroy({
      where: { id: req.params.id },
    });

    if (!deleted) {
      return res.status(404).json({
        message: "Expense not found",
      });
    }

    return res.status(200).json({
      message: "Expense deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to delete expense",
      error: error.message,
    });
  }
};

// UPDATE expense (bonus)
const updateExpense = async (req, res) => {
  try {
    const expense = await Expense.findByPk(req.params.id);

    if (!expense) {
      return res.status(404).json({
        message: "Expense not found",
      });
    }

    await expense.update(req.body);

    return res.status(200).json(expense);
  } catch (error) {
    return res.status(400).json({
      message: "Failed to update expense",
      error: error.message,
    });
  }
};

module.exports = {
  addExpense,
  getExpenses,
  deleteExpense,
  updateExpense,
};
