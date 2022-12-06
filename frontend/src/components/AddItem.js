import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

function AddItem({setShowModal, id}) {
  const [value, setValue] = useState("")
  const [task, setTask] = useState([])
  const data = {
    task: value
  }
  let api = `createtask/todo/${id}`
  

  const sendData = async () => {
    const response = await axios.post(api, data)
    setTask(response.data.todo.tasks)
  }

  const handleClick = async (e) => {
    e.preventDefault()
    sendData()
  }
  console.log(task)
  return (
    <div>
        <section className="text-gray-600 body-font bg-gray-50 absolute right-0 left-0 top-0 bottom-0 z-10 w-[50vw] h-[50vh] m-auto rounded">
  <div className="container px-5 py-24 mx-auto">
    <p className='absolute top-2 right-3 cursor-pointer font-bold text-xl' onClick={() => setShowModal(false)}>X</p>
    <div className="flex flex-col text-center w-full mb-12">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb- text-gray-900">Add your</h1>
      
    </div>
    <div className="lg:w-1/2 md:w-2/3 mx-auto">
      <div className="flex flex-wrap -m-2">
    
        <div className="p-2 w-full">
          <div className="relative">
          
            <input type="email" id="email" name="email" className="w-full bg-gray-100  rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='Enter here...' onChange={(e) => setValue(e.target.value)} />
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

export default AddItem