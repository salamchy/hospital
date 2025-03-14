import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import Admin from "../models/user.models.js";

// Generate JWT Token and store in HTTP-only cookie
const generateToken = (res, admin) => {
  const token = jwt.sign(
    {
      id: admin._id,
      role: admin.role,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "1h",
    }
  );

  res.cookie("jwt", token, {
    httpOnly: true, // Prevents XSS attacks
    secure: process.env.NODE_ENV === "production", // Secure in production
    sameSite: "strict",
    maxAge: 60 * 60 * 1000, // 1 hour
  });
};

// ✅ Admin Registration (One-time)
export const registerAdmin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin)
      return res.status(400).json({
        message: "Admin already exists!",
      });

    // Hash password before saving
    const hashedPassword = await bcrypt.hash(password, 10);
    const newAdmin = new Admin({
      email,
      password: hashedPassword,
    });

    await newAdmin.save();
    generateToken(res, newAdmin);

    res.status(201).json({
      message: "Admin registered successfully!",
    });
  } catch (error) {
    console.error("Error during admin registration:", error); // Added error logging
    res.status(500).json({
      message: "Server error",
      error,
    });
  }
};

// ✅ Admin Login
export const loginAdmin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const admin = await Admin.findOne({ email });
    if (!admin)
      return res.status(401).json({
        message: "Invalid email or password",
      });

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch)
      return res.status(401).json({
        message: "Invalid email or password",
      });

    generateToken(res, admin);
    res.json({
      message: "Login successful",
      role: admin.role,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error,
    });
  }
};

// ✅ Admin Logout (Clears Cookie)
export const logoutAdmin = (req, res) => {
  res.clearCookie("jwt", {
    path: "/",
    httpOnly: true,
    secure: true,
    sameSite: "None",
  });
  res.status(200).json({ message: "Logged out successfully" });
};
