import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const ExpenseList = () => {
  const [expenses, setExpenses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchExpenses = async () => {

      const token = localStorage.getItem("token"); 
      if (!token) {
        toast.error("Unauthorized. Please log in.");
        return;
      }

      try {
        const response = await axios.get("http://localhost:8000/api/expense/",{
        headers: {
          Authorization: `Bearer ${token}`,
        }
      });
        setExpenses(response.data);
      } catch (error) {
        console.error("Failed to fetch expenses", error);

      }
    };
    fetchExpenses();
  }, []);

  return (
    <div className="expense-list-container">
      <h2>Expense List</h2>
      {expenses.map((expense) => (
        <div
          key={expense._id}
          className="expense-card"
          style={{
            border: "1px solid #ddd",
            margin: "10px 0",
            padding: "10px",
            cursor: "pointer",
          }}
          onClick={() => navigate(`/update-expense/${expense._id}`)}
        >
          <h3 style={{ color: "green", fontWeight: "bold" }}>{expense.name}</h3>
          <p>
            <strong>Amount:</strong> ${expense.amount}
          </p>
          <p>
            <strong>Date:</strong> {moment(expense.date).format("DD-MM-YYYY")}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ExpenseList;
