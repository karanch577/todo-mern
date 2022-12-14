const { Router } = require("express");
const { createTask, updateTask, deleteTask, gettasks } = require("../controllers/task");
const router = Router()

router.post("/createtask/todo/:id", createTask)
router.get("/task/todo/:id", gettasks)
router.put("/task/todo/:id", updateTask)
// here we have used the put request as we are not deleting the collection but updating the tasks array
router.put("/task/delete/todo/:id", deleteTask)

module.exports = router;