import React, { useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { validateToken } from "./Validatetoken";
import useRedirectIfLoggedIn from "./useRedirect";


const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


  useRedirectIfLoggedIn();
  
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8000/api/auth/login", {
        username,
        password,
      });
      localStorage.setItem("token", response.data.token);
      toast.success(response.data.message);
      console.log("Token saved:", response.data.token);
      console.log("Local Storage Value:", localStorage.getItem("token"));

      navigate("/welcome");
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" style={{ background: "green", color: "white" }}>
          Login
        </button>
      </form>
      <p>
        New user?{" "}
        <span
          onClick={() => navigate("/register")}
          style={{ color: "blue", cursor: "pointer" }}
        >
          Register here
        </span>
      </p>
    </div>
  );
};

export default Login;
