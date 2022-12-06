import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import GetTasks from "./GetTasks";

function GetTodos() {
  const [response, setResponse] = useState([]);
  const [todoId, setTodoId] = useState(null)
  useEffect(() => {
    try {
      axios
        .get("/gettodos")
        .then((res) => res.data)
        .then((res) => {
          setResponse(res.todos);
        });
    } catch (error) {
      console.log(error)
    }
  }, []);


  if(!response.length == 0) {
    return (
      <div className="flex">
        <div className="todo grow">
        {response.map((todo) => (
          <div className="flex flex-col sm:mx-auto sm:mb-2 -mx-2" key={todo._id} onClick={() => setTodoId(todo._id)} >
            <div className="p-2 w-full">
              <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium">{todo.title}</span>
              </div>
            </div>
          </div>
        ))}
        </div>
        <div className="task grow">
        <GetTasks todoId={todoId}/>
        </div>
      </div>
    )
    
  } else {
    return <>no todos</>
}
}

export default GetTodos;
