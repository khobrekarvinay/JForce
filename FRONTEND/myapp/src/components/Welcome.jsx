import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Welcome = () => {
  const navigate = useNavigate();

  const buttonStyle = {
    background: "green",
    color: "white",
    margin: "10px",
    padding: "10px",
    border: "none",
    cursor: "pointer",
    borderRadius: "5px",
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      toast.warn("Please log in to access the dashboard.");
      navigate("/");
      return;
    }

    const verifyToken = async (token) => {
      try {
        const response = await axios.post("http://localhost:8000/api/auth/verify",
          {},
          {
             headers:
              { Authorization: `Bearer ${token}` } ,
            });
          console.log("Token verification successfull:", response.data);

      } catch (error) {
        console.error("Token Verification failed:", error.response?.data);
        toast.error("Your session has expired. Please log in again.");
        localStorage.removeItem("token");
        navigate("/");
      }
    };

    verifyToken(token);
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    toast.success("Logged out successfully.");
    navigate("/");
  };

  return (
    <div className="welcome-container">
      <h1>Welcome to Expense Tracker</h1>
      <div>
        <button
          onClick={() => navigate("/add-expense")}
          style={buttonStyle}
        >
          Add Expense
        </button>
        <button
          onClick={() => navigate("/expense-list")}
          style={buttonStyle}
        >
          Expense List
        </button>
        <button
          onClick={handleLogout}
          style={{ ...buttonStyle, background: "red" }}
        >
          Logout
        </button>
      </div>
      <p style={{ marginTop: "20px" }}>
        Track and manage your expenses efficiently. Use the navigation buttons to add new expenses or view your expense history.
      </p>
    </div>
  );
};

export default Welcome;
