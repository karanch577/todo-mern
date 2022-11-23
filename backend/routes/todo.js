const { Router } = require("express");
const { createTodo, getTodos,updateTodo,deleteTodo } = require("../controllers/todo");
const router = Router()

router.post("/createtodo", createTodo)
router.get("/gettodos", getTodos)
router.put("/todo/:id", updateTodo)
router.delete("/todo/:id", deleteTodo)

module.exports = router;