import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='flex w-full fixed h-[16vh] z-50 justify-between px-32 items-center'>
      <Link to="/">
        <h1 className='font-bold tracking-wide text-xl'><span className='mr-2'>A</span><span className='mr-2'>U</span><span className='mr-2'>T</span><span className='mr-2'>O</span><span className='mr-2'>N</span>O</h1>
      </Link>
      <ul className='flex items-center gap-8'>
        <Link to="/Technology">
          <li className='relative group'>
            <span className='group-hover:underline cursor-pointer underline-offset-[6px] group-hover:mt-1'>Technology</span>
          </li>
        </Link>
        <Link to="/About">
          <li className='relative group'>
            <span className='group-hover:underline cursor-pointer underline-offset-[6px] group-hover:mt-1'>About</span>
          </li>
        </Link>
        <Link to="/Careers">
          <li className='relative group'>
            <span className='group-hover:underline cursor-pointer underline-offset-[6px] group-hover:mt-1'>Careers</span>
          </li>
        </Link>
        <li className='bg-black px-6 py-1 hover:bg-white hover:text-black duration-500 text-white rounded-lg'>Subscribe</li>
      </ul>
    </div>
  )
}

export default Navbar