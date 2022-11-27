import CreateTodoForm from "./components/CreateTodo"
import './App.css';
import GetTodos from "./components/GetTodos";
function App() {
  return (
    <div>
     <h2 className="text-center text-3xl my-5">Add your Todos</h2>
     <CreateTodoForm />
     <GetTodos />
    </div>
  );
}

export default App;
