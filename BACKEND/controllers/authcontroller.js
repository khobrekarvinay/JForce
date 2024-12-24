import User from "../models/User.js";
import jwt from "jsonwebtoken";

const SECRET_KEY = "Qm9nZGFuRGU3M2tnc0AxNzNlZzFoa0psODc5RkhKdE5Jd0p3RG0";


export const registerUser = async (req, res) => {
  try {
    const { username, password, email, fullname } = req.body;

    const userExists = await User.findOne({ username });
    if (userExists) return res.status(400).json({ message: "Username already exists" });

    const user = new User({ username, password, email, fullname });
    await user.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error registering user" });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    if (!user) return res.status(404).json({ message: "User not found" });
    

    if (user.password !== password)
      return res.status(400).json({ message: "Password incorrect" });

    const token = jwt.sign({ id: user._id, username: user.username }, SECRET_KEY, {
      expiresIn: "1h",
    });
    console.log(token);
    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    res.status(500).json({ message: "Error logging in" });
  }
};

export const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  console.log("Authorization Header:", authHeader); 

  if (!authHeader) {
    return res.status(401).json({ message: "No token provided" });
  }

  const token = authHeader.split(" ")[1];
  console.log("Extracted Token:", token); 

  if (!token) {
    return res.status(401).json({ message: "Token missing in header" });
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    console.log("Decoded Token:", decoded); 
    req.user = decoded;
    next();
  } catch (error) {
    console.error("JWT Verification Error:", error.message);
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};