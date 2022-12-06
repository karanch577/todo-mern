const jwt = require("jsonwebtoken");
require("dotenv").config();
const User = require("../models/user");

exports.auth = async (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    return res.status(403).json({
      success: false,
      message: "Please login first",
    });
  }
  try {
    const decode = jwt.verify(token, process.env.SECRET);

    req.user = decode;
  } catch (error) {
    return res.status(401).json({
        success: false,
        message: "Invalid token"
    })
  }

  next();
};
