import React from "react";
import { useContext } from "react";
import AddTodo from "../components/AddTodo";
import GetTodos from "../components/GetTodos";
import Logout from "../components/Logout";
import Search from "../components/Search";
import SearchContext from "../context/search/SearchContext";
import TodosProvider from "../context/todos/TodosProvider";

function Dashboard() {
  const state = useContext(SearchContext)
  return (
    <div>
      <TodosProvider>
        <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="mb-20">
            <Logout />
            {state.showSearch ? <Search /> : ""}
            <AddTodo />
            
          </div>
          <div>
            <p>Your Todos</p>
            <GetTodos />
          </div>
        </div>
      </section>
      </TodosProvider>
    </div>
  );
}

export default Dashboard;
