import axios from 'axios'
import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'

function Register() {
  const navigate = useNavigate()
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    })

    const [redirect, setRedirect] = useState(false)

    const sendData = async () => {
        const response = await axios.post("/api/user/signup", formData)
        setRedirect(response.data.success)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        sendData()
    }

    if(redirect) {
        setTimeout(() => {
          navigate("/")
       
        },3000)
        return(
          <div className='container mt-8'>
            <p className='text-center text-lg'>
            Your have successfully registered. <br /><span>
            Please signin to your dashboard
            </span>
            </p>
          </div>
        )
    } else {
  return (
    <div>
       <section className="px-4 py-24 mx-auto max-w-7xl">
  <div className="w-full mx-auto space-y-5 sm:w-8/12 md:w-6/12 lg:w-4/12 xl:w-3/12">
    <h1 className="text-4xl font-semibold text-center text-gray-900">Sign up</h1>
    
    <form className="space-y-4" onSubmit={handleSubmit}>
      <label className="block">
        <span className="block mb-1 text-xs font-medium text-gray-700">Name</span>
        <input className="border w-full py-1 rounded" type="text" placeholder="Your full name" onChange={(e) => setFormData({...formData, name: e.target.value})} required />
      </label>
      <label className="block">
        <span className="block mb-1 text-xs font-medium text-gray-700">Your Email</span>
        <input className="border w-full py-1 rounded" type="email" placeholder="Ex. karan@karan.com" onChange={(e) => setFormData({...formData, email: e.target.value})} inputMode="email" required />
      </label>
      <label className="block">
        <span className="block mb-1 text-xs font-medium text-gray-700">Create a password</span>
        <input className="border w-full py-1 rounded" type="password" placeholder="••••••••"onChange={(e) => setFormData({...formData, password: e.target.value})} required />
      </label>
      <input type="submit" className="w-full bg-purple-700 text-white rounded py-2 cursor-pointer" value="Sign Up" />
    </form>
    
  </div>
</section>
    </div>
  )
}
}

export default Register