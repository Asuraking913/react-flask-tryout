import React from 'react'

function SetInfo() {
  return (
    <div>
        <form action="#" className='flex flex-col gap-[1em]'>
            <p>
                <label className='text-white font-bold text-xl' htmlFor="name">Email:</label>
                <input type="text" name="email" id="email" className='bg-white p-[0.3em] w-full' />
            </p>
            <p>
                <label className='text-white font-bold text-xl' htmlFor="name">Age:</label>
                <input type="text" name="age" id="age" className='bg-white p-[0.3em] w-full' />
            </p>
            <p>
                <label className='text-white font-bold text-xl' htmlFor="name">Relationship Status:</label>
                <input type="text" name="status" id="status" className='bg-white p-[0.3em] w-full' />
            </p>
            <p>
                <label className='text-white font-bold text-xl' htmlFor="name">About you:</label>
                <textarea name="about" id="about" cols="30" rows="5" className='w-full'></textarea>
            </p>
        </form>
    </div>
  )
}

export default SetInfo