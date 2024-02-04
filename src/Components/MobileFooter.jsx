import React from 'react'

function MobileFooter() {
  return (
    <div className='h-screen lg:hidden flex justify-center items-center w-auto bg-white text-black'>
          <div className='text-center'>
          <h1 className='font-bold tracking-wide text-xl'><span className='mr-2'>A</span><span className='mr-2'>U</span><span className='mr-2'>T</span><span className='mr-2'>O</span><span className='mr-2'>N</span>O</h1>
          <div>
          <ul className='flex mt-16 items-center justify-center flex-col gap-4'>
                    <li>Tel: 123-456-7890</li>
                    <li>Email: info@mysite.com</li>
                    <li>500 Terry Francine <br /> St San Francisco, CA 94158</li>
                 </ul>
          </div>
          <div className='mt-16'>
          <ul className='flex items-center justify-center flex-col gap-4'>
                    <li className='text-xl tracking-widest'>SUBSCRIBE</li>
                    <li className='text-sm'>Sign up to receive Autono news and updates.</li>
                    <li className=''>
                        <label htmlFor="email" className='mr-2'>Email*</label>
                        <input type="text" name='email' placeholder='' className='pr-10 outline-none pl-3 border-2 border-black py-2 rounded-lg' />
                    </li>
                 </ul>
          </div>
          </div>
    </div>
  )
}

export default MobileFooter