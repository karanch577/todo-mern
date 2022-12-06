const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.signup = async (req, res) => {
  const { name, email, password } = req.body;

  if (!(name && email && password)) {
    return res.status(401).json({
      success: "false",
      message: "All the fields are mandatory",
    });
  }
  // check if the user already exist
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(401).json({
        success: "false",
        message: "User already registered",
      });
    }
    const encryPassword = await bcrypt.hash(password, 10);

    const user = User.create({
      name,
      email,
      password: encryPassword,
    });

    const token = jwt.sign({_id: user._id},process.env.SECRET, {
      expiresIn: process.env.EXPIRY
    })
    user.token = token;

    user.password = undefined
    return res.status(201).json({
      success: true,
      message: "User successfully registered",
      user,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.signin = async (req, res) => {
  const { email, password } = req.body;
  if (!(email && password)) {
    return res.status(401).json({
      success: false,
      message: "All the fields are mandatory",
    });
  }
  // finding the user in DB
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({
        success: false,
        message: `${email} is not registered`,
      });
    }
    if (await bcrypt.compare(password, user.password)) {
      const token = jwt.sign({ _id: user._id }, process.env.SECRET, {
        expiresIn: "2h",
      });
      res.cookie("token", token, {
        expires: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
        httpOnly: true,
      });
      user.password = undefined;
      return res.status(200).json({
        success: true,
        user,
      });
    } else {
      return res.status(401).json({
        status: false,
        message: "password doesn't match",
      });
    }
  } catch (error) {
    console.log(error);
  }
};

exports.dashboard = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    user.password = undefined;

    return res.status(201).json({
        success: true,
        message: "user is authorized",
        user
    });
  } catch (error) {
    return res.status(401).json({
        success: false,
        message: "invalid user id"
    })
  }
};

exports.signout = async (req, res) => {

    res.clearCookie("token")
    return res.status(200).json({
        success: "true",
        message: "User signout successfully"
    })
}