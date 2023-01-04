import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate} from "react-router-dom";
function Login() {

 

const navigate = useNavigate()

const [inputValue, setInputValue] = useState({
    email: "",
    password: ""
})

  var sendData = async () => {
    const response = await axios.post("/api/user/signin",inputValue)
    if(response.data.success===true){
      navigate("/dashboard")
    }
}

    const handleSubmit = (e) => {
        e.preventDefault()
        sendData()
    }
    
  return (
    <div>
      <section className="px-4 py-24 mx-auto max-w-7xl">
        <div className="w-full mx-auto space-y-5 sm:w-8/12 md:w-6/12 lg:w-4/12 xl:w-3/12">
          <h1 className="text-4xl font-semibold text-center text-gray-900">
            Sign in
          </h1>

          <form className="space-y-4" onSubmit={(e) => handleSubmit(e)}>
            <label className="block">
              <span className="block mb-1 text-xs font-medium text-gray-700">
                Your Email
              </span>
              <input
                className="border w-full py-1 rounded"
                type="email"
                placeholder="Ex. karan@karan.com"
                inputMode="email"
                value={inputValue.email}
                onChange={(e) => setInputValue({...inputValue,email: e.target.value})}
                required
              />
            </label>
            <label className="block">
              <span className="block mb-1 text-xs font-medium text-gray-700">
                Create a password
              </span>
              <input
                className="border w-full py-1 rounded"
                type="password"
                placeholder="••••••••"
                value={inputValue.password}
                onChange={(e) => setInputValue({...inputValue,password: e.target.value})}
                required
              />
            </label>
            <input
              type="submit"
              className="w-full bg-purple-700 text-white rounded py-2 cursor-pointer"
              value="Sign In"
            />
          </form>
          <p>
            Don't have a acount? <Link to={"signup"}>Create Now</Link>
          </p>
        </div>
      </section>
    </div>
  );
}


export default Login;
