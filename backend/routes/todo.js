const { Router } = require("express");
const { createTodo, getTodos,updateTodo,deleteTodo,searchTodos } = require("../controllers/todo");
const { auth } = require("../middleware/auth")

const router = Router()

router.post("/createtodo", auth, createTodo)
router.get("/gettodos", auth, getTodos)
router.put("/todo/:id", auth, updateTodo)
router.delete("/todo/:id", auth, deleteTodo)

router.get("/todo/search", auth, searchTodos)

module.exports = router;