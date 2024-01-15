import React from 'react'
import  {useEffect} from 'react'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function About() {

  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  const controls4 = useAnimation();

  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '50px -50px',
  });

  useEffect(() => {
    if (inView) {
      controls1.start({ x: 0, opacity: 1, transition: { duration: 1, delay: 0.3 } });
      controls2.start({ x: 0, opacity: 1, transition: { duration: 1.1, delay: 0.6} });
      controls3.start({ x: 0, opacity: 1, transition: { duration: 1.6, delay: 0.9} });
      controls4.start({ x: 0, opacity: 1, transition: { duration: 1.6, delay: 1.2} });
    }
  }, [inView, controls1, controls2, controls3, controls4]);


  const C1 = useAnimation();
  const C2 = useAnimation();


  const [ref1, inView1] = useInView({
    triggerOnce: true,
    rootMargin: '50px -50px',
  });

  useEffect(() => {
    if (inView1) {
      C1.start({ x: 0, opacity: 1, transition: { duration: 1, delay: 0.3 } });
      C2.start({ x: 0, opacity: 1, transition: { duration: 1.1, delay: 0.6} });
    }
  }, [inView1, C1, C2]);


  return (
    <div className='h-[370vh] w-auto'>
         <div className='h-[90vh] flex-col flex border-b border-black justify-center items-center w-auto bg-white'>
                <h1 className='text-7xl pt-20 tracking-widest  text-center home-line font-normal'>OUR JOURNEY</h1>
                <p className='text-2xl text-center home-line1 tracking-wider mt-14'>I'm a paragraph. Click here to add your own text and <br /> edit me. It’s easy. Just click “Edit Text” or double click <br /> me to add your own content and make changes to the <br /> font. I’m a great place for you to tell a story and let <br /> your users know a little more about you.</p>
         </div>
           

         <div className='flex h-[90vh] border-b border-black w-auto px-36 items-center justify-between'>
          <div className='flex '>
             <div className='border-l border-black opacity-60 pr-10'>
                
             </div>
             <div className=''>
                <motion.h3
                 initial={{opacity: 0, x : -35}}
                 animate={controls1}
                 ref={ref}   
                className='mb-8 text-base tracking-widest'>OUR MISSION</motion.h3>
                 <motion.h1
                  initial={{opacity: 0, x : -35}}
                  animate={controls2}
                  ref={ref}  
                 className='mb-14 text-2xl home-line1  tracking-widest'>Redefining the Way <br /> We Move</motion.h1>
                <motion.p
                 initial={{opacity: 0, x : -35}}
                 animate={controls3}
                 ref={ref}   
                className='home-line2 tracking-widest'>I'm a paragraph. Click here to add your <br /> own text and edit me. It’s easy. Just <br /> click “Edit Text” or double click me to <br /> add your own content and make <br /> changes to the font. I’m a great place <br /> for you to tell a story and let your users <br /> know a little more about you.</motion.p>
                <motion.p
                  initial={{opacity: 0, x : -35}}
                  animate={controls4}
                  ref={ref}    
                className='home-line2 mt-6 tracking-widest'>This is a great space to write a long <br /> text about your  company and your <br /> services. You can use this space to go <br /> into a little more detail about your <br /> company. Talk about your team and <br /> what services you provide. </motion.p>
             </div>
             </div>
             <div className="max-w-full ">
          <img className="max-w-full rounded-lg  h-auto" src="https://static.wixstatic.com/media/c837a6_6805a01e59934a1584ecebb1a8ecd14c~mv2.jpg/v1/crop/x_3725,y_1163,w_2973,h_4576/fill/w_500,h_770,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/GettyImages-932691626.jpg" alt="" width={380} />
        </div>
        </div>
        <div className='lawra1-img  h-[90vh] w-auto'>

        </div>
        <div className='bg-black text-white flex flex-col gap-44 justify-center items-start px-36 w-auto h-[100vh]'>
          <div className='flex'>
             <div className='border-l border-white opacity-60 pr-10'>
                
             </div>
             <div className=''>
                <motion.h3
                   initial={{opacity: 0, x : -35}}
                   animate={C1}
                   ref={ref1}   
                className='mb-8 text-base tracking-widest'>NEWS</motion.h3>
                 <motion.h1  initial={{opacity: 0, x : -35}}
                   animate={C2}
                   ref={ref1}   
                 className=' text-2xl home-line1  tracking-widest'>Autono In The Press</motion.h1>
             </div>
             </div>
             <div className='flex mt-3 justify-center items-center w-auto'>
               <div className='flex justify-center gap-14 items-center'>
                  <img src="https://hugotech.co/wp-content/uploads/2023/10/Google.svg" width={65} alt="" />
                  <img src="https://hugotech.co/wp-content/uploads/2023/10/Meta.svg" width={70} alt="" />
                  <img src="https://hugotech.co/wp-content/uploads/2023/10/Upwork.svg" width={70} alt="" />
                  <img src="https://hugotech.co/wp-content/uploads/2023/11/Asset-62.svg" width={100} alt="" />
               </div>
    </div> 
        </div>

    </div>
  )
}

export default About