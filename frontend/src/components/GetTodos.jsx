import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import GetTasks from "./GetTasks";

import { FiEdit } from "react-icons/fi";
import { RiDeleteBin2Line } from "react-icons/ri";
import EditModal from "./EditModal";

function GetTodos() {
  const [todos, setTodos] = useState('');
  const [todoId, setTodoId] = useState(null)
  const [showModal, setShowModal] = useState(false);

  const fetchdata = async () => {
    const res = await axios.get("gettodos")
    setTodos(res.data.todos)
  }

  useEffect(() => {
    fetchdata()
  },[])
  
  const deleteTodo = async (id) => {
    if(!id) {
      console.log("no id")
    }
    console.log(id)
    const res = await axios.delete(`todo/${id}`) 
      if(!res.data.success) {
        window.location.reload()
      }
    
  }


  if(todos.length !== 0) {
    return (
      <div className="flex">
        <div className="todo w-2/5">
        {todos.map((todo) => (
          <div className="flex flex-col sm:mx-auto sm:mb-2 -mx-2" key={todo._id}  >
            <div className="p-2">
              <div className="bg-gray-100 rounded flex p-4 h-full items-center justify-between">
                
                <span className="title-font font-medium cursor-pointer w-[87%]" onClick={() => setTodoId(todo._id)}>{todo.title}</span>
                <div>
                <div className="icons flex justify-between ">
                  <div className="cursor-pointer" onClick={() => setShowModal(true)} >
                    <FiEdit />
                  </div>
                  {showModal ? <EditModal setShowModal={setShowModal} id={todo._id} fetchData={fetchdata} title="Todo"/> : ""}
                 
                  <div className="cursor-pointer ml-4" onClick={() => deleteTodo(todo._id)} >
                    <RiDeleteBin2Line />
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        </div>
        <div className="task grow">
          
        {todoId ?<GetTasks todoId={todoId}/> : "Select any todo"}
        </div>
      </div>
    )
    
  } else {
    return <>no todos</>
}
}

export default GetTodos;
