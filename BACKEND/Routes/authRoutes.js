
import express from "express";
import { loginUser, registerUser, verifyToken } from "../controllers/authcontroller.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

router.post("/verify", verifyToken, (req, res) => {
    res.status(200).json({ message: "Token is valid" });
  });

export default router;





















