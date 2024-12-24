import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdateExpense = () => {
  const { id } = useParams();
  const [expenseData, setExpenseData] = useState({
    name: "",
    amount: "",
    date: "",
    description: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchExpense = async () => {

      const token = localStorage.getItem("token"); 
      if (!token) {
        toast.error("Unauthorized. Please log in.");
        return;
      }

      try {
        const response = await axios.get(`http://localhost:8000/api/expense/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(response.data);
        setExpenseData(response.data);
      } catch (error) {
        toast.error("Failed to fetch expense");
      }
    };
    fetchExpense();
  }, [id]);

  const handleChange = (e) => {
    setExpenseData({ ...expenseData, [e.target.name]: e.target.value });
  };

  const handleUpdateExpense = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(`http://localhost:8000/api/expense/update/${id}`, expenseData);
      toast.success("Expense updated successfully");
      navigate("/welcome");
    } catch (error) {
      toast.error("Failed to update expense");
    }
  };

  return (
    <div className="update-expense-container">
      <h2>Update Expense</h2>
      <form onSubmit={handleUpdateExpense}>
        <label>Expense Name:</label>
        <input
          type="text"
          name="name"
          value={expenseData?.name || ""}
          onChange={handleChange}
          required
        />

        <label>Amount:</label>
        <input
          type="number"
          name="amount"
          value={expenseData?.amount}
          onChange={handleChange}
          min="0"
          required
        />

        <label>Date:</label>
        <input
          type="date"
          name="date"
          value={expenseData?.date}
          onChange={handleChange}
          required
        />

        <label>Description:</label>
        <textarea
          name="description"
          value={expenseData?.description}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit" style={{ background: "green", color: "white", padding: "10px" }}>
          Update Expense
        </button>
      </form>
    </div>
  );
};

export default UpdateExpense;
