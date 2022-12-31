import axios from 'axios'
import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import TodosContext from '../context/todos/TodosContext'




function EditTodoModal({index, title}) {
  const [value, setValue] = useState("")
  const state = useContext(TodosContext)
  const data = {
    task: value,
    index
  }
  let id = state.idToDisplayTask
 console.log(index);
  let api;
  if(title === "Task" && index === undefined) {
    api=`createtask/todo/${id}`
  }else if(title === "Task"){
    api= `task/todo/${id}`
  }
  else {
    api = `todo/${id}`
  }
console.log(api);
  const sendData = async () => {
      if(title === "Task" && index === undefined){
        console.log(api);
        await axios.post(api, data)
      }else {
        console.log(api);
        await axios.put(api, data)
      }
  }

  const handleClick = async (e) => {
    e.preventDefault()
    sendData()
    state.setIsItemModified(true)
    if(title === "Task") {
      state.setIsTaskModified(true)
    } else {
      state.setIsTodoModified(true)
    }
    setValue("")
    
  }
  
  return (
    <div>
        <section className="text-gray-600 body-font bg-gray-50 absolute right-0 left-0 top-0 bottom-0 z-10 w-[50vw] h-[50vh] m-auto rounded">
  <div className="container px-5 py-24 mx-auto">
    <p className='absolute top-2 right-3 cursor-pointer font-bold text-xl' onClick={() => {
      state.setShowModal(false)
      state.setShowTaskEditModal(false)
      state.setShowTaskAddModal(false)
      }}>X</p>
    <div className="flex flex-col text-center w-full mb-12">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb- text-gray-900">Edit {title}</h1>
      
    </div>
    <div className="lg:w-1/2 md:w-2/3 mx-auto">
      <div className="flex flex-wrap -m-2">
    
        <div className="p-2 w-full">
          <div className="relative">
          
            <input type="email" id="email" name="email" className="w-full bg-gray-100  rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='Enter here...' onChange={(e) => setValue(e.target.value)} value={value}/>
          </div>
        </div>
        
        <div className="p-2 w-full">
          <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={handleClick}>Add</button>
        </div>
        
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default EditTodoModal