import express from "express";
import {
  addExpense,
  updateExpense,
  getExpenses,
  getExpenseById,
} from "../controllers/expenseController.js";
import { verifyToken } from "../controllers/authcontroller.js";

const router = express.Router();

router.post("/add", verifyToken, addExpense);
router.get("/", verifyToken, getExpenses);
router.get("/:id", getExpenseById);
router.put("/update/:id", updateExpense);

export default router;
