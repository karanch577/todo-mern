
import axios from "axios";
import React from "react";
import { useContext } from "react";
import { useState, useRef } from "react";
import { IoIosAddCircleOutline, IoIosRemoveCircleOutline } from "react-icons/io";
import SearchContext from "../context/search/SearchContext";

function AddTodo() {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([])

  const state = useContext(SearchContext)


  const data = {
    title: input,
    tasks
  }

  const handleclick = async () => {
    await axios.post("/createtodo", data)
    setInput("")
    window.location.reload();

  }
  
  const message = useRef(null)
// functions related to task input box

  const addInput = () => {
    setTasks([...tasks, ""])
  }
  
  const deleteInput = (i) => {
    const newTasks = [...tasks]
    newTasks.splice(i, 1)
    setTasks(newTasks)
  }

  const updateTaskValue = (i, e) => {
    console.log("changed");
    const newTasks = [...tasks]
    newTasks[i] = e.target.value
    setTasks(newTasks)
    console.log(tasks);
  }
  
  return (
    <div>
      <p>Want to search the todos? <span className="text-purple-700 font-bold cursor-pointer" onClick={() => state.setShowSearch(true)}>Click here</span></p>
      <div className="flex items-center max-w-3xl m-auto">
        <div className="input flex-grow">
        <h2 className="text-2xl mb-6">Enter your Todo</h2>

        <p className="float-right mb-1 flex items-center scale-0 transition-all" ref={message} >Add Tasks
         <span className="ml-2  cursor-pointer text-xl text-purple-700" onClick={() => addInput()}><IoIosAddCircleOutline /></span></p>
        
        <input
          type="text"
          className="bg-gray-100 p-2 w-full"
          placeholder="Enter here..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onFocus={() => message.current.classList.remove("scale-0")}
        />
        </div>
       
        <button className=" text-white bg-purple-700 rounded px-6 py-1 text-xl ml-12 self-end" onClick={handleclick}>
          Add
        </button>
      </div>
      <div className="max-h-[155px] max-w-xl relative lg:right-9 mx-auto overflow-y-scroll">
      {tasks.length ? tasks.map((el,index) => (
      <div className="taskInput max-w-3xl mx-auto mt-3 flex items-center" key={index}>
      <label className="inline-block w-3 ml-3"> - </label>
    <input type="text" className="bg-gray-100 p-1.5 w-2/3" onChange={(e) => updateTaskValue(index, e)} placeholder="Enter Task"/>
    <span className="ml-2 cursor-pointer text-xl" onClick={() => addInput()}><IoIosAddCircleOutline /></span>

    <span className="ml-2 cursor-pointer text-xl text-red-500" onClick={() => deleteInput(index)}><IoIosRemoveCircleOutline /></span>
    </div>
    )) : ""}
      </div>
    
      
    </div>
  );
}

export default AddTodo;