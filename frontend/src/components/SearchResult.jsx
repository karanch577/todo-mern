import axios from "axios";
import React from "react";
import { useContext } from "react";
import { useState} from "react";
import SearchContext from "../context/search/SearchContext";

function SearchResult() {
  const [tasks, setTasks] = useState([]);
  const [showTask, setShowTask] = useState(false);

  const state = useContext(SearchContext)

  const fetchData = async (id) => {

    setShowTask(true);
    const res = await axios.get(`/task/todo/${id}`);

    setTasks(res.data.tasks);
  };
  console.log(tasks);
  return (
    <div className="flex items-stretch">
      {/* todo */}
      <div className="ml-12 mt-2">
        <p className="font-semibold mb-6">Result</p>
        {state.result.map((todo) => (
          <h3
            className="border bg-white rounded w-[25vw] px-3 py-1 cursor-pointer"
            onClick={() => fetchData(todo._id)}
            key={todo.id}
          >
            {todo.title}
          </h3>
        ))}
      </div>
      {/* task */}

      <div className=" mt-[3.4em] ml-4 w-[30vw]">
        {showTask
          ? 
          tasks.length === 0 ? "Task not added" :
          tasks.map((task) => (
              <div>
                <h3 className="bg-white m-1 p-1 rounded"> - {task}</h3>
              </div>
            ))
          : "Select any todo"
        }
      </div>
    </div>
  );
}

export default SearchResult;