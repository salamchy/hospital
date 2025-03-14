import jwt from "jsonwebtoken";

export const adminAuth = (req, res, next) => {
  const token = req.cookies.jwt; // Get token from cookies

  if (!token)
    return res.status(403).json({
      message: "Access denied. No token!",
    });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (decoded.role !== "admin") {
      return res.status(403).json({
        message: "Access denied. Admin only!",
      });
    }

    req.admin = decoded; // Attach admin data to request
    next();
  } catch (error) {
    res.status(401).json({
      message: "Invalid or expired token!",
    });
  }
};
