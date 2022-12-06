const mongoose = require("mongoose")
const User = require("./user")

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Todo is required"],
        trim: true
    },
    tasks: [String],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: User
    }
},{
    timestamps: true
})

module.exports = mongoose.model("todo", todoSchema)