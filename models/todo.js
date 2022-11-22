const mongoose = require("mongoose")

const todoSchema = new mongoose.Schema({
    todo: {
        type: String,
        required: [true, "Todo is required"]
    },
    tasks: [String]
},{
    timestamps: true
})

module.exports = mongoose.model("todo", todo)