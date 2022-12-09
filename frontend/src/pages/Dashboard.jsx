import React from "react";
import { useState } from "react";
import AddTodo from "../components/AddTodo";
import GetTodos from "../components/GetTodos";
import Logout from "../components/Logout";
import Search from "../components/Search";

function Dashboard() {
  const [showSearch,setShowSearch] = useState(false)
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="mb-20">
            <Logout />
            {showSearch ? <Search setShowSearch={setShowSearch} /> : ""}
            <AddTodo setShowSearch={setShowSearch} />
          </div>
          <div>
            <p>Your Todos</p>
            <GetTodos />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
