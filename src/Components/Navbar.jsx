import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineMenu } from "react-icons/md";
import { GrClose } from "react-icons/gr";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='flex w-[100vw] fixed h-[16vh] z-50 justify-between px-8 lg:px-32 items-center'>
      <Link to="/">
        <h1 className='font-bold tracking-wide text-base lg:text-xl'><span className='mr-2'>A</span><span className='mr-2'>U</span><span className='mr-2'>T</span><span className='mr-2'>O</span><span className='mr-2'>N</span>O</h1>
      </Link>
      {/* Menu Button for Small Screens */}
      <div className='lg:hidden flex items-center'>
        <button className='text-black text-2xl focus:outline-none' onClick={toggleMenu}>
          {isMenuOpen ? <GrClose /> : <MdOutlineMenu />}
        </button>
      </div>

      {/* Sidebar for Small Screens */}
      <div className={`lg:hidden fixed top-0 right-0 bg-black w-2/3 h-full transition-transform transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <button className='text-white text-xl focus:outline-none ml-4 mt-4' onClick={toggleMenu}><GrClose /></button>
        <div className='flex flex-col items-center justify-center gap-6 mt-16'>
          <Link to="/Technology" className='text-white text-sm mb-4' onClick={toggleMenu}>Technology</Link>
          <Link to="/About" className='text-white text-sm mb-4' onClick={toggleMenu}>About</Link>
          <Link to="/Careers" className='text-white text-sm mb-4' onClick={toggleMenu}>Careers</Link>
        </div>
      </div>

      {/* Navigation Links for Large Screens */}
      <ul className={`lg:flex items-center gap-8 hidden ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}>
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
        <Link to="/Subscribe" className='bg-black px-6 py-1 hover:bg-white hover:text-black duration-500 text-white rounded-lg'>Subscribe</Link>
      </ul>
    </div>
  );
}

export default Navbar;
