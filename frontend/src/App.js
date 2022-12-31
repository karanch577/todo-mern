import './App.css';
import Login from "./pages/Login"
import { Routes, Route} from "react-router-dom"
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import SearchProvider from './context/search/SearchProvider';


function App() {

  return (
    <div>
      <SearchProvider>
      <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/signup' element={<Register />} />
      <Route path='/dashboard' element={<Dashboard />} />
     </Routes>
      </SearchProvider>
    </div>
  );
}

export default App;
