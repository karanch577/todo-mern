const Todo = require("../models/todo");

exports.createTask = async (req, res) => {
  const { task } = req.body;
  const { id } = req.params;
  console.log(task);
  
  if(id == null) {
    return ""
    console.log("null");
  }
  // remove the empty string

  
  if (!task.trim()) {
    return res.status(401).json({
      success: false,
      message: "Title is required",
    });
  }
  try {
    const todo = await Todo.findById(id);
    todo.tasks.push(String(task));
    todo.save();
    return res.status(200).json({
      success: true,
      message: "Task is created",
      todo,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.gettasks = async (req, res) => {
  const {id} = req.params
  if(id != "null") {
    try {
      const todo = await Todo.findById(id)
      return res.status(200).json({
        success: "true",
        message: "todo found in DB",
        tasks: todo.tasks
      })
    } catch (error) {
      console.log(error)
      return res.status(401).json({
        success: "false",
        message: "provide the correct user id",
      })
    }
  }
  
 
  
}

exports.updateTask = async (req, res) => {
  const { id } = req.params;
  const { task, index } = req.body;
  console.log(typeof index)
  if(index == undefined) {
    return ""
  }
  // if (!task.trim()) {
  //   return res.status(401).json({
  //     success: false,
  //     message: "Task is required",
  //   });
  
  try {
    const todo = await Todo.findById(id);
    todo.tasks[index] = task;
    todo.save()
    return res.status(200).json({
      status: true,
      message: "todos updates",
      todo,
    });
  } catch (error) {
    return res.status(401).json({
      status: false,
      message: "todos not found in DB",
    });
  }
};

exports.deleteTask = async (req, res) => {
    const { id } = req.params;
    const { index } = req.body;
   console.log(index)
    try {
      const todo = await Todo.findById(id);
        todo.tasks.splice(index,1)
        todo.save()
      return res.status(200).json({
        status: true,
        message: "todos deleted",
        todo,
      });
    } catch (error) {
      return res.status(401).json({
        status: false,
        message: "todos not found in DB",
      });
    }
};
