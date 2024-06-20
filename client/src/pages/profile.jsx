import React from 'react'
import Nav from '../components /nav'
import SetInfo from '../components /setInfo'
import { useState } from 'react'

function Profile() {

    const [info, setInfo] = useState(true);

    const handleInfo = () => {
        setInfo(!info)
    }

  return (
    <div className='h-screen flex items-center pt-[4em] justify-center bg-black flex-col gap-[2em]'>
        <Nav />
        <h1 className='text-white text-4xl'>Welcome, User!!</h1>
        {
            info ?
            <div className='flex flex-col gap-[1em]'>
                <p className='text-white text-xl'>Name: User</p>
                <p className='text-white text-xl'>Email: None</p>
                <p className='text-white text-xl'>Age: None</p>
                <p className='text-white text-xl'>Relationship Status: None</p>
                <p className='text-white text-xl'>About Me: None</p>
            </div>

            :
            
            <SetInfo />
        }

        <button className='p-[1em] py-[0.5em] rounded-[3em] text-xl bg-white font-bold' onClick={handleInfo}>Update Profile</button>
    </div>
  )
}

export default Profile