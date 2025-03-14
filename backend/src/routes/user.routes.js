import express from "express";
import {
  registerAdmin,
  loginAdmin,
  logoutAdmin,
} from "../controllers/user.controllers.js";
import { adminAuth } from "../middleware/authMiddleware.js";
import { validateForm } from "../middleware/validateMiddleware.js";

const router = express.Router();

router.post("/register", validateForm, registerAdmin);
router.post("/login", loginAdmin);
router.post("/logout", adminAuth, logoutAdmin);

export default router;
