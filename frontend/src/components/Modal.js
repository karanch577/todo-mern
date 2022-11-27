import axios from "axios";
import React from "react";
import { useState } from "react";

export default function Modal({ setShowModel, clickedTodo }) {
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
    <div>
      <h4 onClick={() => setShowModel(false)}>X</h4>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <input
          onChange={(e) => setEditedTodo(e.target.value)}
          className="border"
          type="text"
          value={editedTodo}
        />
        <button>Add</button>
      </form>
    </div>
  );
}
