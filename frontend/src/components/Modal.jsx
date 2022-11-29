import axios from "axios";
import React from "react";
import { useState } from "react";

export default function Modal({ setShowModel, clickedTodo, title }) {
  const [editedTodo, setEditedTodo] = useState("");

  const data = {
    title: editedTodo,
  };

  const id = clickedTodo._id;
  const updateTodo = async () => {
    await axios.put(`/todo/${id}`, data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateTodo();
    setEditedTodo("");
  };
  return (
    <div className="absolute p-12 bg-gray-200 rounded-lg left-0 right-0 ml-auto mr-auto   w-[40vw]">
      <h4 className="absolute right-4 top-2 cursor-pointer font-bold text-lg" onClick={() => setShowModel(false)}>X</h4>
      <h2 className="text-2xl mb-3 text-center">Enter Your {title}</h2>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <input
          onChange={(e) => setEditedTodo(e.target.value)}
          className="border rounded p-2 w-[80%]"
          type="text"
          value={editedTodo}
        />
        <button className="bg-black text-white px-2 py-2 w-[120px] mt-3 rounded">Add</button>
      </form>
    </div>
  );
}
