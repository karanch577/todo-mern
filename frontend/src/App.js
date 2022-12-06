import './App.css';
import Login from "./pages/Login"
import { Routes, Route} from "react-router-dom"
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import { useState } from 'react';
import { useEffect } from 'react';


function App() {
  const [user, setUser] = useState(null)
  useEffect(() => {

  },[user])
  return (
    <div>
     <Routes>
      <Route path='/' element={<Login setUser={setUser} />} />
      <Route path='/signup' element={<Register />} />
      <Route path='/dashboard' element={<Dashboard user={user}/>} />
     </Routes>
    </div>
  );
}

export default App;
