const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
require("dotenv").config()

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        trim: true,
    },
    email: {
        type: String,
        required: [true, "email is required"]
    },
    password: {
        type: String,
        required: [true, "email is required"],
        minLength: [6, "password must 6 characters long"],
        select: false
    }
})

userSchema.methods.comparePassword = async function(inputPassword) {
    try {
        return await bcrypt.compare(inputPassword, this.password)
        
    } catch (error) {
        console.log(error)
    }
}

userSchema.methods.createToken = function() {
    return jwt.sign({_id: this._id}, process.env.SECRET, {
        expiresIn: process.env.EXPIRY
    })
}

module.exports = mongoose.model("User", userSchema)