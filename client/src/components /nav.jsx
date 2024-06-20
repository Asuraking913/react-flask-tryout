import React, { useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function Nav() {

    const navigate = useNavigate()

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
            <Link className='hover:underline bg-black p-[1em] py-[0]' onClick={() => {
                if (localStorage.length < 1) {
                    navigate("/login")
                }
                else {
                    localStorage.clear()
                }
                useEffect(() => {
                    navigate("/login")

                }, [localStorage])

            }}>
                <li className='font-bold text-xl text-white'>Logout</li>
            </Link>
        </ul>
    </div>
  )
}

export default Nav