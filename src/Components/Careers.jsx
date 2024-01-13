import React from 'react'
import { MdArrowForward } from "react-icons/md";

function Careers() {
  return (
    <div className='h-[430vh] w-auto'>
         <div className='h-[90vh] flex-col flex border-b border-black justify-center items-center w-auto bg-white'>
                <h1 className='text-7xl pt-20 tracking-widest  text-center home-line font-normal'>WE MAKE <br /> BIG IDEAS HAPPEN</h1>
                <p className='text-2xl tracking-widest mt-14'>Join Us for the Ride</p>
         </div>
         <div className='w-auto h-[90vh] bg-white'>
         <div className='flex items-center justify-between px-36 text-black'>
          <div className='flex '>
             <div className='border-l border-black opacity-60 pr-10'>
                
             </div>
             <div>
                 <h1 className='mb-10 text-base tracking-widest'>LOCATION</h1>
                 <h2 className='home-line1 mb-10 text-2xl tracking-widest'>We’re based in San <br /> Francisco’s innovation hub</h2>
                 <p className='home-line2 tracking-widest'>I'm a paragraph. Click here to add your <br /> own text and edit me. It’s easy. Just <br /> click “Edit Text” or double click me to <br /> add your own content and make <br /> changes to the font. I’m a great place <br /> for you to tell a story and let your users <br /> know a little more about you.</p>
             </div>
             </div>
             <div className="max-w-full  text-center">
          <img className="max-w-full h-auto" src="https://static.wixstatic.com/media/84770f_b277d32c4552480eb4068ee023b6402d~mv2.jpg/v1/fill/w_950,h_950,al_l,q_85,usm_0.66_1.00_0.01,enc_auto/84770f_b277d32c4552480eb4068ee023b6402d~mv2.jpg" alt="" width={650} />
        </div>
        </div>
         </div>
         <div className='bg-black w-auto h-[250vh]'>
         <div className='flex items-center justify-between px-36 text-white'>
          <div className='flex '>
             <div className='border-l border-white opacity-60 pr-10'>
                
             </div>
             <div>
                 <h1 className='mb-10 text-base tracking-widest'>JOB OPENINGS</h1>
                 <h2 className='home-line1 mb-10 text-2xl tracking-widest'>Changing the future of <br />transportation means <br /> thinking differently.</h2>
                 <p className='home-line2 tracking-widest'>I'm a paragraph. Click here to add your <br /> own text and edit me. It’s easy. Just <br /> click “Edit Text” or double click me to <br /> add your own content and make <br /> changes to the font. I’m a great place <br /> for you to tell a story and let your users <br /> know a little more about you.</p>
             </div>
             </div>
             <div className="max-w-full  text-center">
          <img className="max-w-full h-auto" src="https://static.wixstatic.com/media/c837a6_dd610e0724af42ebbc47147f9fbbedf1~mv2.jpg/v1/fill/w_950,h_950,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_dd610e0724af42ebbc47147f9fbbedf1~mv2.jpg" alt="" width={700} />
        </div>
        </div>
        <div className='flex items-center justify-around'>
             <div className='bg-transparent flex pl-7 justify-start items-start flex-col text-white border h-[65vh] rounded-lg w-[27vw]'>
             <h1 className='mb-12 text-lg mt-16 tracking-widest'>DATA SCIENTIST</h1>
                     <h4 className='text-sm opacity-70 tracking-widest'>Silicon Valley</h4>
                     <p className='mt-5 home-line1'>I'm a paragraph. Click here to add your <br /> own text and edit me. It’s easy. Just <br /> click “Edit Text” or double click me to <br /> add your own content and make <br /> changes to the font. </p>
                     <button className='px-6 mt-10 py-2 hover:bg-white hover:text-black duration-500 border rounded-md'>Apply Now <span><MdArrowForward className='inline-block' /></span></button>
             </div>
             <div className='bg-transparent text-white pl-7  border h-[65vh] rounded-lg w-[27vw]'>
             <h1 className='mb-12 text-lg mt-16 tracking-widest'>ELECTRICAL ENGINEER</h1>
                     <h4 className='text-sm opacity-70 tracking-widest'>San Francisco, CA</h4>
                     <p className='mt-5 home-line1'>I'm a paragraph. Click here to add your <br /> own text and edit me. It’s easy. Just <br /> click “Edit Text” or double click me to <br /> add your own content and make <br /> changes to the font. </p>
                     <button className='px-6 mt-10 py-2 hover:bg-white hover:text-black duration-500 border rounded-md'>Apply Now <span><MdArrowForward className='inline-block' /></span></button>
             </div>
        </div>
        <div className='flex mt-24 items-center justify-around'>
             <div className='bg-transparent text-white border pl-7 h-[65vh] rounded-lg w-[27vw]'>
             <h1 className='mb-12 text-lg mt-16 tracking-widest'>ARTIFICIAL INTELLIGENCE <br /> RESEARCHER</h1>
                     <h4 className='text-sm opacity-70 tracking-widest'>San Francisco, CA</h4>
                     <p className='mt-5 home-line1'>I'm a paragraph. Click here to add your <br /> own text and edit me. It’s easy. Just <br /> click “Edit Text” or double click me to <br /> add your own content and make <br />  </p>
                     <button className='px-6 mt-10 py-2 hover:bg-white hover:text-black duration-500 border rounded-md'>Apply Now <span><MdArrowForward className='inline-block' /></span></button>
             </div>
             <div className='bg-transparent text-white border pl-7 h-[65vh] rounded-lg w-[27vw]'>
             <h1 className='mb-12 text-lg mt-16 tracking-widest'>DEEP LEARNING ENGINEER</h1>
                     <h4 className='text-sm opacity-70 tracking-widest'>San Francisco, CA</h4>
                     <p className='mt-5 home-line1'>I'm a paragraph. Click here to add your <br /> own text and edit me. It’s easy. Just <br /> click “Edit Text” or double click me to <br /> add your own content and make <br /> changes to the font. </p>
                     <button className='px-6 mt-10 py-2 hover:bg-white hover:text-black duration-500 border rounded-md'>Apply Now <span><MdArrowForward className='inline-block' /></span></button>
             </div>
        </div>
         </div>
    </div>
  )
}

export default Careers