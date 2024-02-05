import React from 'react'
import  {useEffect} from 'react'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGoogle } from "react-icons/fa";
import { SiTesla } from "react-icons/si";
import { CgBmw } from "react-icons/cg";
import { SiJaguar } from "react-icons/si";
import { SiLamborghini } from "react-icons/si";

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
  const C3 = useAnimation();
  const C4 = useAnimation();
  const C5 = useAnimation();
  const C6 = useAnimation();
  const C7 = useAnimation();


  const [ref1, inView1] = useInView({
    triggerOnce: true,
    rootMargin: '50px -50px',
  });

  useEffect(() => {
    if (inView1) {
      C1.start({ x: 0, opacity: 1, transition: { duration: 1, delay: 0.3 } });
      C2.start({ x: 0, opacity: 1, transition: { duration: 1.1, delay: 0.6} });

      C3.start({ opacity: 1, transition: { duration: 1.1, delay: 1} });
      C4.start({ opacity: 1, transition: { duration: 1.1, delay: 1.4} });
      C5.start({ opacity: 1, transition: { duration: 1.1, delay: 1.8} });
      C6.start({ opacity: 1, transition: { duration: 1.1, delay: 2.2} });
      C7.start({ opacity: 1, transition: { duration: 1.1, delay: 2.6} });
    }
  }, [inView1, C1, C2, C3, C4, C5, C6, C7]);


  return (
    <div className=' h-[420vh] lg:h-[370vh] w-auto'>
         <div className=' lg:h-[90vh] h-[80vh] flex-col flex border-b border-black justify-center items-center w-auto bg-white'>
                <h1 className=' text-5xl lg:text-7xl pt-20 tracking-widest text-center home-line font-normal'>OUR JOURNEY</h1>
               <div className='w-[85vw] lg:w-[60vw] px-4'>
               <p className=' text-sm  lg:text-2xl text-center home-line1 tracking-wider mt-14'>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
               </div>
         </div>
         <div className='flex h-[170vh] pb-28 lg:pb-0 pt-20 lg:pt-0 lg:h-[90vh] border-b border-black w-auto lg:px-36 flex-col lg:flex-row gap-16 lg:gap-0 items-center justify-between'>
          <div className='flex '>
             <div className='border-l border-black opacity-60 pr-6 lg:pr-10'>
                
             </div>
             <div className=''>
                <motion.h3
                 initial={{opacity: 0, x : -35}}
                 animate={controls1}
                 ref={ref}   
                className='mb-8 text-sm lg:text-base tracking-widest'>OUR MISSION</motion.h3>
                 <motion.h1
                  initial={{opacity: 0, x : -35}}
                  animate={controls2}
                  ref={ref}  
                 className='mb-14 text-base lg:text-2xl home-line1 font-semibold  tracking-widest'>Redefining the Way <br /> We Move</motion.h1>
                <motion.p
                 initial={{opacity: 0, x : -35}}
                 animate={controls3}
                 ref={ref}   
                className='home-line2 lg:text-base text-xs tracking-widest'>I'm a paragraph. Click here to add your <br /> own text and edit me. It’s easy. Just <br /> click “Edit Text” or double click me to <br /> add your own content and make <br /> changes to the font. I’m a great place <br /> for you to tell a story and let your users <br /> know a little more about you.</motion.p>
                <motion.p
                  initial={{opacity: 0, x : -35}}
                  animate={controls4}
                  ref={ref}    
                className='home-line2 mt-6 lg:text-base text-xs tracking-widest'>This is a great space to write a long <br /> text about your  company and your <br /> services. You can use this space to go <br /> into a little more detail about your <br /> company. Talk about your team and <br /> what services you provide. </motion.p>
             </div>
             </div>
             <div className="max-w-full ">
          <img className="max-w-full lg:w-[380px] mr-4 lg:mr-0 rounded-lg  h-auto" src="https://static.wixstatic.com/media/c837a6_6805a01e59934a1584ecebb1a8ecd14c~mv2.jpg/v1/crop/x_3725,y_1163,w_2973,h_4576/fill/w_500,h_770,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/GettyImages-932691626.jpg" alt="" width={240} />
        </div>
        </div>
        <div className='lawra1-img  h-[90vh] w-auto'>

        </div>
        <div className='bg-black text-white pl-10 lg:pl-36 flex flex-col gap-28 lg:gap-44 justify-center items-start lg:px-36 w-auto lg:h-[100vh] h-[65vh]'>
          <div className='flex'>
             <div className='border-l border-white opacity-60 pr-6 lg:pr-10'>
                
             </div>
             <div className=''>
                <motion.h3
                   initial={{opacity: 0, x : -35}}
                   animate={C1}
                   ref={ref1}   
                className='mb-8 text-sm lg:text-base tracking-widest'>NEWS</motion.h3>
                 <motion.h1  initial={{opacity: 0, x : -35}}
                   animate={C2}
                   ref={ref1}   
                 className=' lg:text-2xl home-line1 text-base font-semibold tracking-widest'>Autono In The Press</motion.h1>
             </div>
             </div>
             <div className='flex justify-center flex-col lg:flex-row items-center w-auto'>
               <div className='flex justify-center gap-7 lg:gap-28 items-center'>
                  <motion.span
                    initial={{opacity: 0}}
                    animate={C3}
                    ref={ref1}
                  ><FaGoogle className=' text-2xl lg:text-5xl' /></motion.span>
                  <motion.span
                     initial={{opacity: 0}}
                     animate={C4}
                     ref={ref1}
                  ><SiTesla className=' text-2xl lg:text-5xl'  /></motion.span>
                  <motion.span
                     initial={{opacity: 0}}
                     animate={C5}
                     ref={ref1}
                  ><CgBmw  className=' text-3xl lg:text-5xl'  /></motion.span>
                  <motion.span
                    initial={{opacity: 0}}
                    animate={C6}
                    ref={ref1}
                  ><SiJaguar  className=' text-3xl lg:text-5xl'  /></motion.span>
                  <motion.span
                    initial={{opacity: 0}}
                    animate={C7}
                    ref={ref1}
                  ><SiLamborghini className=' text-2xl lg:text-5xl'  /></motion.span>
               </div>
    </div> 
        </div>

    </div>
  )
}

export default About