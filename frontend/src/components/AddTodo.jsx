import axios from "axios";
import React from "react";
import { useState } from "react";

function AddTodo() {
  const [input, setInput] = useState("");

  const data = {
    title: input
  }

  const handleclick = async () => {
    const res = await axios.post("/createtodo", data)
    setInput("")
    window.location.reload();

  }
  return (
    <div>
      <div className="flex flex-col items-center">
        <h2 className="text-2xl">Enter your Todo</h2>
        <input
          type="text"
          className="bg-gray-100 p-3 m-3 w-1/3"
          placeholder="Enter here..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="bg-purple-700 text-white rounded px-6 py-1 text-xl" onClick={handleclick}>
          Add
        </button>
      </div>
    </div>
  );
}

export default AddTodo;
