import React from 'react'
import GetTodos from '../components/GetTodos'
import GetTasks from '../components/GetTasks'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'

function Dashboard({user}) {

  if(!user){

  }
  return (
    <div>
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">Raw Denim Heirloom Man Braid</h1>
    </div>
    <div>
      <GetTodos />
    </div>
  </div>
</section>
    </div>
  )
}

export default Dashboard