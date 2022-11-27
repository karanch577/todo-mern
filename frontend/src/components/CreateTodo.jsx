import React from "react";
import { useState } from "react";
import axios from "axios"

export default function CreateTodoForm() {
  const [todo, setTodo] = useState("");

  // send todo to DB
  const createTodo = async () => {
    const data = {
      title: todo
    }
    await axios.post("/createtodo",data)
    setTodo("")
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createTodo()
    setTodo("")
  };
  return (
    <div>
      <form className="flex flex-col items-center" onSubmit={handleSubmit}>
        <input
          className="text-2xl border-2 px-3 py-1"
          type="text"
          name="todo"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="Enter your Todo"
        />
        <button
          type="submit"
          className="rounded bg-slate-900 text-white px-5 py-1 my-5"
        >
          Add
        </button>
      </form>
    </div>
  );
}
