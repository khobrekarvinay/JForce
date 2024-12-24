import mongoose from "mongoose";

const ExpenseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  amount: { type: Number, required: true },
  date: { type: Date, required: true },
  description: { type: String },
});

export default mongoose.model("Expense", ExpenseSchema);
