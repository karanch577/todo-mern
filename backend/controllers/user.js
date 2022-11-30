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

    const token = user.createToken()
    user.token = token;

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
    const { email, password } = req.body
    if(!(email && password)) {
        return res.status(401).json({
            success: false,
            message: "All the fields are mandatory"
        })
    }
    // finding the user in DB
    try {
        const user = await User.findOne({email})
        if(!user) {
            return res.status(401).json({
                success: false,
                message: `${email} is not registered`
            })
        }
        console.log(user.comparePassword(password))
        if(user.comparePassword()) {
            const token = user.createToken()
                res.cookie("token", token, {
                    expires: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
                    httpOnly: true
                })
            return res.status(200).json({
                success: true,
                user
            })
        }
        
        
    } catch (error) {
        console.log(error)
    }
}
