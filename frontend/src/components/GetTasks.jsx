import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import AddItem from './AddItem'

function GetTasks({todoId}) {
  const [tasks, setTasks] = useState([])
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    axios.get(`task/todo/${todoId}`)
    .then(res => setTasks(res.data.tasks))
    
  },[todoId])
console.log(tasks);
  if(todoId == null) {
    return (
      <div>
        please select any todo
      </div>
    )
  }

  
  if(tasks.length === 0) {
    return (
      <div>
        <p>You dont have added any task.</p>
        <button className='text-white cursor-pointer bg-purple-600 p-2 rounded' onClick={() => setShowModal(true)}>Add Task</button>
        {showModal ? <AddItem id={todoId} setShowModal={setShowModal}/> : ""}
      </div>
    )
  }
  else {
    return (
      <div>
          <div className="flex flex-col sm:mx-auto sm:mb-2 -mx-2">
      {tasks.map(task => (
        <div className="p-2 w-full">
        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
         
          <span className="title-font font-medium">{task}</span>
        </div>
      </div>
      ))}
        

      </div>
      </div>
    )
  }
  
}

export default GetTasks