import React from 'react'

function SetInfo({changeEmail, changeAge, changeStatus, changeAbout}) {


  return (
    <div>
        <form action="#" className='flex flex-col gap-[1em]'>
            <p>
                <label className='text-white font-bold text-xl' htmlFor="name">Email:</label>
                <input type="text" onChange={e => changeEmail(e.target.value)} name="email" id="email" className='bg-white p-[0.3em] w-full text-xl' />
            </p>
            <p>
                <label className='text-white font-bold text-xl' htmlFor="name">Age:</label>
                <input type="text" name="age" onChange={e => changeAge(e.target.value)} id="age" className='bg-white p-[0.3em] text-xl w-full' />
            </p>
            <p>
                <label className='text-white font-bold text-xl' htmlFor="name">Relationship Status:</label>
                <input type="text" name="status" onChange={e => changeStatus(e.target.value)} id="status" className='bg-white text-xl p-[0.3em] w-full' />
            </p>
            <p>
                <label className='text-white font-bold text-xl' htmlFor="name">About you:</label>
                <textarea name="about" onChange={e => changeAbout(e.target.value)} id="about" cols="30" rows="5" className='w-full text-xl'></textarea>
            </p>

        </form>
    </div>
  )
}

export default SetInfo