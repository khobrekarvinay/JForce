import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const AddExpense = () => {
  const [expenseData, setExpenseData] = useState({
    name: "",
    amount: "",
    date: "",
    description: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setExpenseData({ ...expenseData, [e.target.name]: e.target.value });
  };
  
  const token = localStorage.getItem("token");
  if (!token) {
    toast.error("Unauthorized. Please log in.");
    return;
  }
  
  const handleAddExpense = async (e) => {
    e.preventDefault();

    try {
        console.log(expenseData);

      const response = await axios.post("http://localhost:8000/api/expense/add", expenseData, { 
      headers: { 
        Authorization:  `Bearer ${token}`,
      }

      });
      toast.success("Expense added successfully");
      navigate("/welcome");
    } catch (error) {
        console.error("Add expense error:", error); 
      toast.error(error.response?.data?.message || "Failed to add expense");
    }
  };

  return (
    <div className="add-expense-container">
      <h2>Add New Expense</h2>
      <form onSubmit={handleAddExpense}>
        <label>Expense Name:</label>
        <input
          type="text"
          name="name"
          value={expenseData.name}
          onChange={handleChange}
          required
        />

        <label>Amount:</label>
        <input
          type="number"
          name="amount"
          value={expenseData.amount}
          onChange={handleChange}
          min="0"
          required
        />

        <label>Date:</label>
        <input
          type="date"
          name="date"
          value={expenseData.date}
          onChange={handleChange}
          required
        />

        <label>Description:</label>
        <textarea
          name="description"
          value={expenseData.description}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit" style={{ background: "green", color: "white", padding: "10px" }}>
          Add Expense
        </button>
      </form>
    </div>
  );
};

export default AddExpense;
