const Todo = require("../models/todo")

exports.createTodo = async(req, res) => {
    const { title } = req.body
    if(!title.trim()){
        return res.status(401).json({
            success: false,
            message: "Title is required"
        })
    }
    try {
        const todo = await Todo.create({
            title,
            user: req.user._id
        })
        return res.status(200).json({
            success: true,
            message: "Todo is created"
        })
    } catch (error) {
        console.log(error)
    }
    
}

exports.getTodos = async(req, res) => {
    try {
        const todos = await Todo.find({user: req.user._id})
        if(todos.length !== 0) {
            return res.status(200).json({
                status: true,
                message: "todos found in DB",
                todos
            })
        }
        throw new Error
    } catch (error) {
        return res.status(401).json({
            status: false,
            message: "No todo found in DB"
        })
    }
}

exports.updateTodo = async(req, res) => {
    try {
        const { id } = req.params
        const todo = await Todo.findByIdAndUpdate(id, req.body)
        if(todo) {
            return res.status(200).json({
                status: true,
                message: "todos updates",
                todo
            })
        }
    } catch (error) {
            return res.status(401).json({
                status: false,
                message: "todos not found in DB"
            })
        }
}

exports.deleteTodo = async(req, res) => {
    try {
        const { id } = req.params
        const todo = await Todo.findByIdAndDelete(id, req.body)
        if(todo) {
            return res.status(200).json({
                status: true,
                message: "todos deleted",
                todo
            })
        }
    } catch (error) {
            return res.status(401).json({
                status: false,
                message: "todos not found in DB"
            })
        }
}