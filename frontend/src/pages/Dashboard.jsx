import React from "react";
import AddTodo from "../components/AddTodo";
import GetTodos from "../components/GetTodos";
import Logout from "../components/Logout";

function Dashboard() {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="mb-20">
            <Logout />
            <AddTodo />
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
