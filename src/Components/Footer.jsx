import React from 'react'
import { FaLinkedinIn } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";


function Footer() {
  return (
    <div className='bg-white  lg:flex hidden flex relative border-t border-black justify-center items-center flex-col w-auto h-[80vh]'>
         <div className='mb-20 mr-[930px]'>
              <h1 className='font-bold tracking-wide text-xl'><span className='mr-2'>A</span><span className='mr-2'>U</span><span className='mr-2'>T</span><span className='mr-2'>O</span><span className='mr-2'>N</span>O</h1>
              </div>
          <div className='flex gap-[350px]  items-center'>
              <div className='flex gap-[200px]'>
                 <ul className='flex flex-col gap-7'>
                    <li>Technology</li>
                    <li>About</li>
                    <li>Careers</li>
                 </ul>
                 <ul className='flex flex-col gap-7'>
                    <li>Tel: 123-456-7890</li>
                    <li>Email: info@mysite.com</li>
                    <li>500 Terry Francine <br /> St San Francisco, CA 94158</li>
                 </ul>
                 <ul className='flex flex-col gap-7'>
                    <li className='text-xl tracking-widest'>SUBSCRIBE</li>
                    <li>Sign up to receive Autono news and updates.</li>
                    <li>Email*</li>
                    <li><input type="text" placeholder='' className='pr-10 pl-3 outline-none border-2 border-black py-2 rounded-lg' /></li>
                 </ul>
              </div>
          </div>
          <div className='flex gap-[650px] absolute bottom-8'>
                 <h1>© 2035 by Autono. Powered and secured by <span className='underline'>Wix</span></h1>
                  <div className='flex items-center gap-10'>
                     <span><FaLinkedinIn  className='text-xl text-black'/></span>
                     <span><FiInstagram  className='text-xl text-black'/></span>
                     <span><FaFacebookF className='text-xl text-black' /></span>
                     <span><FaTwitter  className='text-xl text-black'/></span>
                  </div>
              </div>
    </div>
  )
}

export default Footer