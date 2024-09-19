import jwt from 'jsonwebtoken';
import config from "../config/config.js";

const authenticateToken = (req, res, next) => {
  // Extract token from the Authorization header
  const token = req.headers.authorization?.split(' ')[1]; // Assumes "Bearer <token>"

  if (!token) {
    return res.status(401).json({ error: "No token provided" });
  }

  // Verify the token
  jwt.verify(token, config.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ error: "Invalid token" });
    }

    // Add user info to request object
    req.user = user; // You can store user info here if needed
    next();
  });
};

export default authenticateToken;
