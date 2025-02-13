import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify"; 
import "react-toastify/dist/ReactToastify.css";
import Login from "./components/Login";
import Register from "./components/Register";
import Welcome from "./components/Welcome";
import AddExpense from "./components/AddExpense";
import ExpenseList from "./components/ExpenseList";
import UpdateExpense from "./components/UpdateExpense";
import MaterialUIDemo from "./components/MaterialUI";
import LoginPage from "./components/Vuexy";
import AccountPage from "./VueWebsite/Mainacc";
import Pricing from "./VueWebsite/Pricing";


const App = () => {
  return (
    <Router>
       {/* ToastContainer added here */}
       <ToastContainer position="top-center" autoClose={2000} />
      <Routes>
        {/* <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/add-expense" element={<AddExpense />} />
        <Route path="/expense-list" element={<ExpenseList />} />
        <Route path="/update-expense/:id" element={<UpdateExpense />} /> */}
        <Route path="/" element={<MaterialUIDemo/>} />
        <Route path="/abc" element={<LoginPage/>} />
        <Route path="/qwerty" element={<AccountPage/>} />
        <Route path="/price" element={<Pricing />} />

      </Routes>
    </Router>
  );
};

export default App;
