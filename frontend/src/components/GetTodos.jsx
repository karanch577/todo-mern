import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import GetTasks from './GetTasks'

import { FiEdit, FiDelete } from "react-icons/fi";
import EditTodoModal from './EditTodoModal'
import { useContext } from 'react'
import TodosContext from '../context/todos/TodosContext'




function GetTodos() {
const [todos, setTodos] = useState(null)
const state = useContext(TodosContext)
console.log(todos);

const fetchData = async () => {
  try {
    const { data } = await axios.get("/gettodos")
    setTodos(data.todos);
  } catch (error) {
    console.log(`Error in gettodos` + error)
  }
    state.setIsTodoModified(false)
    
}
useEffect(() => {
    fetchData()
    // eslint-disable-next-line
},[state.isTodoModified])

const deleteTodo = async (id) => {
    if(!id) {
      console.log("no id")
    }
    console.log(id)
    await axios.delete(`/todo/${id}`) 
    state.setIsTodoModified(true)
    state.setIdToDisplayTask(null)
  }

  return (
    <div className='flex'>
        <div className="todosList container  w-1/2">
        {todos ? todos.map(todo => (
            <div className='text-xl m-2 p-2 bg-gray-100 flex justify-between items-center' key={todo._id}>
              <div className="title flex-grow cursor-pointer " onClick={() => state.setIdToDisplayTask(todo._id)}>
                {todo.title} 
              </div>
                
                <div className="icons flex mx-2 w-14 justify-between">
                    <span onClick={() => {
                        state.setShowModal(true)
                        state.setIdToEdit(todo._id)
                    }}><FiEdit /></span>
                    <span onClick={() => deleteTodo(todo._id)}><FiDelete /></span>
                </div>
                {state.showModal ? <EditTodoModal /> : ""}
            </div>
        )) : "You dont have any Todo. Please add."}
        </div>
        <div className="tasksList flex-grow">
        <GetTasks />

        </div>
    </div>
  )
}

export default GetTodos