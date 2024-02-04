import React from 'react'
import  {useEffect} from 'react'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Technology() {

  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();

  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '50px -50px',
  });

  useEffect(() => {
    if (inView) {
      controls1.start({ x: 0, opacity: 1, transition: { duration: 1, delay: 0.3 } });
      controls2.start({ x: 0, opacity: 1, transition: { duration: 1.1, delay: 0.6} });
      controls3.start({ x: 0, scale: 1, opacity: 1, transition: { duration: 1.6, delay: 0.9} });
    }
  }, [inView, controls1, controls2, controls3]);

  ///// Second Animation 


  const Poplar1 = useAnimation();
  const Poplar2 = useAnimation();
  const Poplar3 = useAnimation();
  const Poplar4 = useAnimation();
  const Poplar5 = useAnimation();
  const Poplar6 = useAnimation();
  const Poplar7 = useAnimation();

  const [ref1, inView1] = useInView({
    triggerOnce: true,
    rootMargin: '50px -50px',
  });

  useEffect(() => {
    if (inView1) {
      Poplar1.start({ x: 0, opacity: 1, transition: { duration: 1, delay: 0.3 } });
      Poplar2.start({ x: 0, opacity: 1, transition: { duration: 1.1, delay: 0.6} });
      Poplar3.start({ x: 0, scale: 1, opacity: 1, transition: { duration: 1.6, delay: 0.9} });

      Poplar4.start({ x: 0, opacity: 1, transition: { duration: 1.6, delay: 1.1} });
      Poplar5.start({ x: 0, opacity: 1, transition: { duration: 1.6, delay: 1.4} });
      Poplar6.start({ x: 0, opacity: 1, transition: { duration: 1.6, delay: 1.9} });
      Poplar7.start({ x: 0, opacity: 1, transition: { duration: 1.6, delay: 2.2} });
    }
  }, [inView1, Poplar1, Poplar2, Poplar3, Poplar4, Poplar5, Poplar6, Poplar7]);



  return (
    <div className='h-[420vh] w-auto'>
          <div className='lg:h-[170vh] h-[100vh] flex justify-center items-center relative w-auto '>
          <h1 className='lg:text-7xl text-5xl tracking-widest absolute top-32 z-50 text-center home-line font-normal'>PERCEPTION ENABLED <br /> TECHNOLOGY</h1>
          <img className='absolute top-36 lg:top-4' src="https://static.wixstatic.com/media/84770f_7d06620bdcd24de29f5d55fef94e1aab~mv2.jpg/v1/fill/w_1899,h_1325,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/84770f_7d06620bdcd24de29f5d55fef94e1aab~mv2.jpg" alt=""  />
          <p className='lg:text-2xl text-sm home-line1 text-center absolute bottom-20 tracking-widest'>Click here to edit this paragraph and add your own <br /> content. This is a great place to expand on the title and <br /> any relevant details or information.</p>
          </div>

          <div>
          <div className='flex items-center flex-col pb-20 lg:pb-0 lg:flex-row h-[105vh] lg:h-screen bg-black justify-between lg:px-36 text-white'>
          <div className='flex pt-16 lg:pt-0 '>
             <div className='border-l border-white opacity-60 pr-6 lg:pr-10'>
                
             </div>
             <div className=''>
                 <motion.h1
                   initial={{opacity: 0, x : -35}}
                   animate={controls1}
                   ref={ref} 
                 className='mb-10 lg:text-base text-sm tracking-widest'>THE AUTONO CAR</motion.h1>
                 <motion.p
                   initial={{opacity: 0, x : -35}}
                   animate={controls2}
                   ref={ref}  
                 className='home-line1 text-sm lg:text-2xl tracking-widest'>Using groundbreaking <br /> perception-enabled sensor <br /> technology, the Autono car <br /> is a fully driverless vehicle <br /> engineered to the highest <br /> degree of precision and <br /> safety. It’s autonomous <br /> driving reimagined.</motion.p>
             </div>
             </div>
             <div className="max-w-full">
          <motion.img
          initial={{opacity: 0, scale: 0}}
          animate={controls3}
          ref={ref}   
          className="max-w-full lg:w-[600px] h-auto" src="https://static.wixstatic.com/media/84770f_b25d65793a3844d693462c8c8bdcdda3~mv2.jpg/v1/fill/w_950,h_1050,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/84770f_b25d65793a3844d693462c8c8bdcdda3~mv2.jpg" alt="" width={250} />
        </div>
        </div>
          </div>
           

           <div className='h-screen pt-10 lg:pt-0 lg:px-36 text-black bg-white'>
          <div className='flex items-center flex-col lg:flex-row justify-between'>
          <div className='flex '>
             <div className='border-l border-black opacity-60 pr-6 lg:pr-10'>
                
             </div>
             <div className=''>
                 <motion.h1
                  initial={{opacity: 0, x : -35}}
                  animate={Poplar1}
                  ref={ref1}  
                 className='mb-10 text-sm lg:text-base tracking-widest'>THE AUTONO PRODUCTS</motion.h1>
                 <motion.p
                   initial={{opacity: 0, x : -35}}
                   animate={Poplar2}
                   ref={ref1}   
                 className='home-line1 text-xs lg:text-2xl tracking-widest'>We’ve developed an app <br /> so that each vehicle can <br /> drive autonomously and <br /> make decisions based on <br /> real-time information and <br /> situational awareness.</motion.p>
             </div>
             </div>
             <div className="max-w-full lg:mr-0 mr-16 ">
          <img className="max-w-full lg:w-[650px] h-auto" src="https://static.wixstatic.com/media/84770f_3776ae9c0c64453597798fcd81529730~mv2.jpg/v1/fill/w_950,h_1050,al_l,q_85,usm_0.66_1.00_0.01,enc_auto/84770f_3776ae9c0c64453597798fcd81529730~mv2.jpg" alt="" width={250} />
        </div>
        </div>
        <div className='flex gap-72 justify-around'> 
        <div>
            <motion.h1
              initial={{opacity: 0, x : -35}}
              animate={Poplar4}
              ref={ref1}   
            className=' text-lg tracking-widest'>ADVANCED CYBER SECURITY</motion.h1>
             <motion.p
              initial={{opacity: 0, x : -35}}
              animate={Poplar5}
              ref={ref1} 
             className=' home-line1 mt-6 tracking-widest'>I'm a paragraph. Click here to add your <br />own text and edit me. It’s easy. Just <br /> click “Edit Text” or double click me to <br /> add your own content and make <br /> changes to the font. I’m a great place <br /> for you to tell a story and let your users <br /> know a little more about you.</motion.p>
         </div>
        <div>
            <motion.h1
              initial={{opacity: 0, x : 35}}
              animate={Poplar6}
              ref={ref1}  
            className=' text-lg tracking-widest'>REAL-TIME INFORMATION</motion.h1>
             <motion.p
              initial={{opacity: 0, x : 35}}
              animate={Poplar7}
              ref={ref1}   
             className=' home-line1 mt-6 tracking-widest'>I'm a paragraph. Click here to add your <br />own text and edit me. It’s easy. Just <br /> click “Edit Text” or double click me to <br /> add your own content and make <br /> changes to the font. I’m a great place <br /> for you to tell a story and let your users <br /> know a little more about you.</motion.p>
         </div>
        </div>
        </div>

    </div>
  )
}

export default Technology