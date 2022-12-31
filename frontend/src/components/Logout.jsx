
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom"

function Logout() {
    const navigate = useNavigate()
    const logout = async () => {
        const res = await axios.get("user/signout")
        console.log(res)
        if(res.data.success) navigate("/")
    }

  return (
    <div>
      <span className="bg-purple-700 absolute right-10 top-6 text-white text-2xl px-3 rounded cursor-pointer  py-1" onClick={logout}>Logout</span>
    </div>
  );
}

export default Logout;