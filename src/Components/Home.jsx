import React from 'react'

function Home() {
  return (
    <main className='h-[370vh] w-auto bg-black'> 
    <div className='home-img flex justify-center items-start pt-36 w-auto h-[110vh]'>
         <div className='flex flex-col justify-center items-center'>
             <h1 className='text-7xl text-center home-line font-normal'>THE FUTURE OF <br />MOBILITY IS HERE</h1>
             <p className='text-xl tracking-widest mt-3'>Discover the safest self-driving experience with Autono.</p>
         </div>
    </div> 
        <div className='flex items-center justify-between px-36 text-white'>
          <div className='flex '>
             <div className='border-l border-white opacity-60 pr-10'>
                
             </div>
             <div>
                 <h1 className='uppercase mb-10 text-base'>Vision</h1>
                 <h2 className='home-line1 mb-10 text-2xl tracking-widest'>We’re Changing the <br /> Way the World Thinks <br /> About Cars</h2>
                 <p className='home-line2 tracking-widest'>I'm a paragraph. Click here to add your <br /> own text and edit me. It’s easy. Just <br /> click “Edit Text” or double click me to <br /> add your own content and make <br /> changes to the font. I’m a great place <br /> for you to tell a story and let your users <br /> know a little more about you.</p>
             </div>
             </div>
             <div className="max-w-full  text-center">
          <img className="max-w-full h-auto" src="https://static.wixstatic.com/media/c837a6_ea5eeb99f72d42b0a22f459e01bfd33c~mv2.jpg/v1/fill/w_617,h_840,al_l,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_ea5eeb99f72d42b0a22f459e01bfd33c~mv2.jpg" alt="" width={480} />
        </div>
        </div>
        <div className='flex items-center h-screen justify-between px-36 bg-white text-black'>
          <div className='flex'>
             <div className='border-l border-black opacity-60 pr-10'>
                
             </div>
             <div>
                 <h1 className='uppercase mb-10 text-base'>SERVICES</h1>
                 <h2 className='home-line1 mb-10 text-2xl tracking-widest'>We Deliver Exceptional <br /> Products and Services <br /> Around the World</h2>
                 <h1 className='text-4xl home-line2'>AUTONOMOUS <br />DRIVING</h1>
                 <p className='home-line2 mt-6 tracking-widest'>I'm a paragraph. Click here to add your <br /> own text and edit me. It’s easy. Just <br /> click “Edit Text” or double click me to <br /> add your own content and make <br /> changes to the font. I’m a great place <br /> for you to tell a story and let your users <br /> know a little more about you.</p>
             </div>
             </div>
             <div className="max-w-full text-center">
          <img className="max-w-full h-auto" src="https://static.wixstatic.com/media/84770f_3cc097e7503b4ed498e350c6618ef956~mv2.jpg/v1/fill/w_950,h_850,al_l,q_85,usm_0.66_1.00_0.01,enc_auto/84770f_3cc097e7503b4ed498e350c6618ef956~mv2.jpg" alt="img" width={700} />
        </div>
        </div>
        <div className='flex items-center h-screen justify-center bg-white text-black'>
          <div className='flex'>
          <div className="max-w-full">
          <img className="max-w-full h-auto" src="https://static.wixstatic.com/media/84770f_abca8ce0bac24971a57d1f9d40b8238b~mv2.jpg/v1/fill/w_950,h_850,al_r,q_85,usm_0.66_1.00_0.01,enc_auto/84770f_abca8ce0bac24971a57d1f9d40b8238b~mv2.jpg" alt="img" width={700} />
        </div>
             <div className='pt-32 ml-36'>
                 <h1 className='text-4xl home-line2'>REAL-TIME <br /> INFORMATION</h1>
                 <p className='home-line2 mt-6 tracking-widest'>I'm a paragraph. Click here to add your <br /> own text and edit me. It’s easy. Just <br /> click “Edit Text” or double click me to <br /> add your own content and make <br /> changes to the font. I’m a great place <br /> for you to tell a story and let your users <br /> know a little more about you.</p>
                 <button className='bg-transparent border hover:bg-black hover:text-white duration-500  border-gray-600 px-6 py-1 mt-7 text-black rounded-lg'>Read More</button>
             </div>
             </div>
        </div>
    </main>
  )
}

export default Home