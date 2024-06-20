import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div className='bg-white p-[.5em] px-[4em] fixed top-0 w-full flex justify-between items-center'>
        <Link to={"/"}><i className='fa-solid fa-house cursor-pointer hover:scale-110 duration-[0.5s] text-4xl'></i></Link>
        <ul className='flex gap-[2em]'>
            <Link className='hover:underline' to={"/"}>
                <li className='font-bold text-xl'>Home</li>
            </Link>
            <Link className='hover:underline' to={"/login"}>
                <li className='font-bold text-xl'>Login</li>
            </Link>
            <Link className='hover:underline' to={"/profile"}>
                <li className='font-bold text-xl'>User</li>
            </Link>
            {/* <Link className='hover:underline' to={"/view"}>
                <li className='font-bold text-xl'>View Users</li>
            </Link> */}
        </ul>
    </div>
  )
}

export default Nav