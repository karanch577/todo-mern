const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        trim: true,
    },
    email: {
        type: String,
        unique: true,
        required: [true, "email is required"]
    },
    password: {
        type: String,
        required: [true, "password is required"],
        minLength: [6, "password must 6 characters long"]
    }
})


module.exports = mongoose.model("User", userSchema)