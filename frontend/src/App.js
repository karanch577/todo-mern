import CreateTodoForm from "./components/CreateTodo"
import './App.css';
import GetTodos from "./components/GetTodos";
import Tasks from "./components/Tasks";
function App() {
  return (
    <div>
     <h2 className="text-center text-3xl my-5">Add your Todos</h2>
     <CreateTodoForm />
     <div className="flex">
     <GetTodos />
     <Tasks />
    </div>
    </div>
  );
}

export default App;
