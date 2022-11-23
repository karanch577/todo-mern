const mongoose = require("mongoose")

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Todo is required"],
        trim: true
    },
    tasks: [String]
},{
    timestamps: true
})

module.exports = mongoose.model("todo", todoSchema)