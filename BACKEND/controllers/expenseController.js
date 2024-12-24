import Expense from "../models/Expense.js";

export const addExpense = async (req, res) => {
  try {
    const { name, amount, date, description } = req.body;

    const expense = new Expense({ name, amount, date, description });
    await expense.save();

    res.status(201).json({ message: "Expense added successfully" });
  } catch (error) {
    console.error("Error adding expense:", error.message);
    res.status(500).json({ message: "Error adding expense" });
  }
};

export const getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find();
    res.status(200).json(expenses);
  } catch (error) {
    res.status(500).json({ message: "Error fetching expenses" });
  }
};

export const getExpenseById = async (req, res) => {
  try {
    const expense = await Expense.findById(req.params.id);
    if (!expense) return res.status(404).json({ message: "Expense not found" });

    res.status(200).json(expense);
  } catch (error) {
    res.status(500).json({ message: "Error fetching expense" });
  }
};

export const updateExpense = async (req, res) => {
  try {
    const { name, amount, date, description } = req.body;
    console.log(name, amount, date, description);
    const expense = await Expense.findByIdAndUpdate(
      req.params.id,
      { name, amount, date, description },
      { new: true }
    );

    if (!expense) return res.status(404).json({ message: "Expense not found" });

    res.status(200).json({ message: "Expense updated successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error updating expense" });
  }
};
