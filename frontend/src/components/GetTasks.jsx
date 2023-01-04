import axios from "axios";
import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";

import { FiEdit } from "react-icons/fi";
import { RiDeleteBin2Line } from "react-icons/ri";
import TodosContext from "../context/todos/TodosContext";
import EditTodoModal from "./EditTodoModal";

function GetTasks() {
  const [tasks, setTasks] = useState([]);

  const state = useContext(TodosContext)
  const todoId = state.idToDisplayTask
  console.log(todoId)

  const fetchData = () => {
    axios.get(`/api/task/todo/${todoId}`).then((res) => setTasks(res.data.tasks));
    console.log(tasks);
  }
  useEffect(() => {
   fetchData()
   state.setIsTaskModified(false)
   // eslint-disable-next-line
  }, [todoId, state.isTaskModified]);

  if (todoId == null) {
    return <div>please select any todo</div>;
  }

  // delete task
  const deleteTask = async (index) => {
    state.setShowTaskEditModal(false)
    console.log(index)
    const data = {
      index
    }
    
       await axios.put(`/api/task/delete/todo/${todoId}`, data)
    
    state.setIsTaskModified(true)
  }

  if (tasks.length === 0) {
    return (
      <div>
        <p>You dont have added any task.</p>
        <button
          className="text-white cursor-pointer bg-purple-700 p-2 rounded"
          onClick={() => state.setShowTaskAddModal(true)}
        >
          Add Task
        </button>
        {state.showTaskAddModal ? <EditTodoModal title={"Task"} /> : ""}
      </div>
    );
  } else {
    return (
      <div>
        <div className="flex flex-col sm:mx-auto sm:mb-2 -mx-2">
          <header className="flex justify-between item-center">
          <p className="text-xl">Your Task</p>
          <button
          className="text-white cursor-pointer bg-purple-700 p-2 rounded"
          onClick={() => state.setShowTaskAddModal(true)}
        >
          Add Task
        </button>
          </header>
         
        {state.showTaskAddModal ? <EditTodoModal title={"Task"} />  : ""}
          {tasks.map((task, index) => (
            
              <div className="bg-gray-100 rounded flex justify-between p-1 mt-2 h-full items-center border ml-4" key={index}>
                <span className="title-font font-medium ml-4">- {task}</span>
                <div className="icons flex justify-between w-[8%]">
                  <div className="cursor-pointer" onClick={() => {
                    
                    state.setShowTaskEditModal(true)
                  }}>
                    <FiEdit />
                  </div>
                  {state.showTaskEditModal ? <EditTodoModal title={"Task"} index={index} /> : ""}
                  <div className="cursor-pointer" >
                    <RiDeleteBin2Line onClick={() => deleteTask(index)}/>
                  </div>
                </div>
              </div>
            
          ))}
        </div>
      </div>
    );
  }
}

export default GetTasks;