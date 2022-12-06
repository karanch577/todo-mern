const { Router } = require("express");
const { createTodo, getTodos,updateTodo,deleteTodo } = require("../controllers/todo");
const { auth } = require("../middleware/auth")

const router = Router()

router.post("/createtodo", auth, createTodo)
router.get("/gettodos", auth, getTodos)
router.put("/todo/:id", auth, updateTodo)
router.delete("/todo/:id", auth, deleteTodo)

module.exports = router;