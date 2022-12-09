import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import AddTask from "./AddTask";

import { FiEdit } from "react-icons/fi";
import { RiDeleteBin2Line } from "react-icons/ri";
import EditTask from "./EditModal";

function GetTasks({ todoId }) {
  const [tasks, setTasks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [clickedIndex, setClickedIndex] = useState("")

  const fetchData = () => {
    axios.get(`task/todo/${todoId}`).then((res) => setTasks(res.data.tasks));
  }
  useEffect(() => {
   fetchData()
   
  }, []);

  if (todoId == null) {
    return <div>please select any todo</div>;
  }

  // delete task
  const deleteTask = async (index) => {
    setShowModal(false)
    console.log(index)
    const data = {
      index
    }
    
      const result = await axios.put(`task/delete/todo/${todoId}`, data)
      fetchData()
    
    
  }

  if (tasks.length === 0) {
    return (
      <div>
        <p>You dont have added any task.</p>
        <button
          className="text-white cursor-pointer bg-purple-700 p-2 rounded"
          onClick={() => setShowAddModal(true)}
        >
          Add Task
        </button>
        {showAddModal ? <AddTask id={todoId} setShowAddModal={setShowAddModal} fetchData={fetchData} /> : ""}
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
          onClick={() => setShowAddModal(true)}
        >
          Add Task
        </button>
          </header>
         
        {showAddModal ? <AddTask id={todoId} setShowAddModal={setShowAddModal} fetchData={fetchData} /> : ""}
          {tasks.map((task, index) => (
            
              <div className="bg-gray-100 rounded flex justify-between p-1 mt-2 h-full items-center border ml-4" key={index}>
                <span className="title-font font-medium ml-4">- {task}</span>
                <div className="icons flex justify-between w-[8%]">
                  <div className="cursor-pointer" onClick={() => {
                    setClickedIndex(index)
                    setShowModal(true)
                  }}>
                    <FiEdit />
                  </div>
                  {showModal ? <EditTask id={todoId} index={clickedIndex} setShowModal={setShowModal} fetchData={fetchData} title="Task" /> : ""}
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
