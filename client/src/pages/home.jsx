import React, { useEffect, useState } from 'react'
import Nav from '../components /nav'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Home() {

  const [user, setUser] = useState(false)
  const navigate = useNavigate()

  const handleInfo = async () => {
    if (localStorage.length < 1) {
      navigate("/login")
  }
  else {
    setUser(localStorage.getItem("username"))
  }
  }

  useEffect(() => {
    handleInfo()
  }, [])

  return (
    <div className='h-screen bg-black flex flex-col justify-center items-center'>
        <Nav />

        <h1 className='text-4xl font-bold text-white'>Oi! Oi! This is the home page, {user}</h1>
    </div>
  )
}

export default Home