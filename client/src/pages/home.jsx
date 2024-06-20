import React from 'react'
import Nav from '../components /nav'

function Home() {
  return (
    <div className='h-screen bg-black flex flex-col justify-center items-center'>
        <Nav />

        <h1 className='text-4xl font-bold text-white'>Oi! Oi! This is the home page</h1>
    </div>
  )
}

export default Home