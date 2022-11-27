import { useState, useEffect } from "react";
import axios from "axios";

import { FiEdit } from "react-icons/fi";
import { AiTwotoneDelete } from "react-icons/ai";
import Modal from "./Modal";

export default function GetTodos() {
  const [todolist, settodolist] = useState("");
  const getTodoList = async () => {
    const res = await axios.get("/gettodos");
    if (res.data.todos.length > 0) {
      settodolist(res.data.todos);
    }
  };
  useEffect(() => {
    getTodoList();
  }, [todolist]);

  // edit
  const [showModel, setShowModel] = useState(false);
  const [clickedTodo, setClickedTodo] = useState({})

  // delete
  const deleteTodo = async (todo) => {
    const id = todo._id
    await axios.delete(`todo/${id}`)

  }

  return (
    <div>
      <div className="grid grid-cols-5 gap-4 border">
        <div className="border col-span-5">Your Todos</div>
        {todolist &&
          todolist.map((todo) => (
            <div key={todo._id}>
              <div className="col-span-3 ">{todo.title}</div>
              <div>
                <FiEdit
                  onClick={() => {
                    setShowModel(true);
                    setClickedTodo(todo)
                  }}
                />
                
              </div>
              <div>
                <AiTwotoneDelete onClick={() => deleteTodo(todo)}/>
              </div>
            </div>
          ))}
          {showModel && <Modal setShowModel={setShowModel} clickedTodo={clickedTodo}/>}
      </div>
    </div>
  );
}
