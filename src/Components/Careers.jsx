import React from 'react'
import { MdArrowForward } from "react-icons/md";
import  {useEffect} from 'react'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


function Careers() {

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


        ////// Second Animation 


        const AfterHour1 = useAnimation();
        const AfterHour2 = useAnimation();
        const AfterHour3 = useAnimation();
      
        const [ref1, inView1] = useInView({
          triggerOnce: true,
          rootMargin: '50px -50px',
        });
      
        useEffect(() => {
          if (inView1) {
            AfterHour1.start({ x: 0, opacity: 1, transition: { duration: 1, delay: 0.3 } });
            AfterHour2.start({ x: 0, opacity: 1, transition: { duration: 1.1, delay: 0.6} });
            AfterHour3.start({ x: 0, scale: 1, opacity: 1, transition: { duration: 1.6, delay: 0.9} });
          }
        }, [inView1, AfterHour1, AfterHour2, AfterHour3]);


        ///// Third Animaton 

  
        
        const Hero1 = useAnimation();
        const Hero2 = useAnimation();
        const Hero3 = useAnimation();
        const Hero4 = useAnimation();
        const Hero5 = useAnimation();
        const Hero6 = useAnimation();
        const Hero7 = useAnimation();
      
        const [ref2, inView2] = useInView({
          triggerOnce: true,
          rootMargin: '50px -50px',
        });
      
        useEffect(() => {
          if (inView2) {
                Hero1.start({ x: 0, opacity: 1, transition: { duration: 1, delay: 0.3 } });
                Hero2.start({ x: 0, opacity: 1, transition: { duration: 1.1, delay: 0.6} });
                Hero3.start({ x: 0, opacity: 1, transition: { duration: 1.6, delay: 0.9} });


                Hero4.start({ x: 0, opacity: 1, transition: { duration: 1, delay: 0.3 } });
                Hero5.start({ x: 0, opacity: 1, transition: { duration: 1.1, delay: 0.6} });
                Hero6.start({ x: 0, opacity: 1, transition: { duration: 1.1, delay: 0.9} });

                Hero7.start({ opacity: 1, transition: { duration: 1.1, delay: 1.8} });

          }
        }, [inView2, Hero1, Hero2, Hero3, Hero4, Hero5, Hero6, Hero7 ]);



        ///// Fourt Animation 


        const A1 = useAnimation();
        const A2 = useAnimation();
        const A3 = useAnimation();
        const A4 = useAnimation();
        const A5 = useAnimation();
        const A6 = useAnimation();
        const A7 = useAnimation();
      
        const [ref3, inView3] = useInView({
          triggerOnce: true,
          rootMargin: '50px -50px',
        });
      
        useEffect(() => {
          if (inView3) {
                A1.start({ x: 0, opacity: 1, transition: { duration: 1, delay: 0.3 } });
                A2.start({ x: 0, opacity: 1, transition: { duration: 1.1, delay: 0.6} });
                A3.start({ x: 0, opacity: 1, transition: { duration: 1.6, delay: 0.9} });


                A4.start({ x: 0, opacity: 1, transition: { duration: 1, delay: 0.3 } });
                A5.start({ x: 0, opacity: 1, transition: { duration: 1.1, delay: 0.6} });
                A6.start({ x: 0, opacity: 1, transition: { duration: 1.1, delay: 0.9} });

                A7.start({ opacity: 1, transition: { duration: 1.1, delay: 1.8} });

          }
        }, [inView3, A1, A2, A3, A4, A5, A6, A7 ]);




  return (
    <div className='lg:h-[430vh] h-[560vh] w-auto'>
         <div className='h-[90vh] flex-col flex border-b border-black justify-center items-center w-auto bg-white'>
                <h1 className='text-7xl pt-20 tracking-widest  text-center home-line font-normal'>WE MAKE <br /> BIG IDEAS HAPPEN</h1>
                <p className='text-2xl tracking-widest mt-14'>Join Us for the Ride</p>
         </div>
         <div className='w-auto h-[100vh] lg:h-[90vh] bg-white'>
         <div className='flex items-center flex-col pt-20 lg:flex-row justify-between lg:px-36 text-black'>
          <div className='flex '>
             <div className='border-l border-black opacity-60 pr-6 lg:pr-10'>
                
             </div>
             <div>
                 <motion.h1
                   initial={{opacity: 0, x : -35}}
                   animate={controls1}
                   ref={ref}  
                 className='mb-10 text-sm lg:text-base tracking-widest'>LOCATION</motion.h1>
                 <motion.h2
                   initial={{opacity: 0, x : -35}}
                   animate={controls2}
                   ref={ref}  
                 className='home-line1 mb-10 text-base lg:text-2xl font-semibold tracking-widest'>We’re based in San <br /> Francisco’s innovation hub</motion.h2>
                 <motion.p
                   initial={{opacity: 0, x : -35}}
                   animate={controls3}
                   ref={ref}   
                 className='home-line2 text-xs lg:text-base tracking-widest'>I'm a paragraph. Click here to add your <br /> own text and edit me. It’s easy. Just <br /> click “Edit Text” or double click me to <br /> add your own content and make <br /> changes to the font. I’m a great place <br /> for you to tell a story and let your users <br /> know a little more about you.</motion.p>
             </div>
             </div>
             <div className="max-w-full  text-center">
          <img className="max-w-full mr-12 lg:mr-0 lg:w-[650px] h-auto" src="https://static.wixstatic.com/media/84770f_b277d32c4552480eb4068ee023b6402d~mv2.jpg/v1/fill/w_950,h_950,al_l,q_85,usm_0.66_1.00_0.01,enc_auto/84770f_b277d32c4552480eb4068ee023b6402d~mv2.jpg" alt="" width={290} />
        </div>
        </div>
         </div>
         <div className='bg-black w-auto h-[400vh] lg:h-[250vh]'>
         <div className='flex items-center flex-col lg:flex-row justify-between lg:px-36 text-white'>
          <div className='flex pt-20 lg:pt-0 '>
             <div className='border-l border-white opacity-60 pr-6 lg:pr-10'>
                
             </div>
             <div>
                 <motion.h1
                  initial={{opacity: 0, x : -35}}
                  animate={AfterHour1}
                  ref={ref1}   
                 className='mb-10 text-sm lg:text-base tracking-widest'>JOB OPENINGS</motion.h1>
                 <motion.h2
                  initial={{opacity: 0, x : -35}}
                  animate={AfterHour2}
                  ref={ref1}   
                 className='home-line1 mb-10 text-balance font-semibold lg:text-2xl tracking-widest'>Changing the future of <br />transportation means <br /> thinking differently.</motion.h2>
                 <motion.p
                   initial={{opacity: 0, x : -35}}
                   animate={AfterHour3}
                   ref={ref1}  
                 className='home-line2 lg:text-base text-xs tracking-widest'>I'm a paragraph. Click here to add your <br /> own text and edit me. It’s easy. Just <br /> click “Edit Text” or double click me to <br /> add your own content and make <br /> changes to the font. I’m a great place <br /> for you to tell a story and let your users <br /> know a little more about you.</motion.p>
             </div>
             </div>
             <div className="max-w-full  text-center">
          <img className="max-w-full lg:w-[700px] h-auto" src="https://static.wixstatic.com/media/c837a6_dd610e0724af42ebbc47147f9fbbedf1~mv2.jpg/v1/fill/w_950,h_950,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_dd610e0724af42ebbc47147f9fbbedf1~mv2.jpg" alt="" width={310} />
        </div>
        </div>
        <div className='flex items-center flex-col pt-0 lg:pt-10 gap-12 lg:gap-0 lg:flex-row justify-around'>
             <div className='bg-transparent flex pl-7 justify-start items-start flex-col text-white border lg:h-[65vh] h-[55vh] rounded-lg w-[80vw] lg:w-[27vw]'>
             <motion.h1
               initial={{opacity: 0, x : -35}}
               animate={Hero1}
               ref={ref2}   
             className='mb-12 text-sm lg:text-lg mt-16 tracking-widest'>DATA SCIENTIST</motion.h1>
                     <motion.h4
                      initial={{opacity: 0, x : -35}}
                      animate={Hero2}
                      ref={ref2}  
                     className='text-base lg:text-sm opacity-70 tracking-widest'>Silicon Valley</motion.h4>
                     <motion.p
                       initial={{opacity: 0, x : -35}}
                       animate={Hero3}
                       ref={ref2}   
                     className='mt-5 text-xs lg:text-base home-line1'>I'm a paragraph. Click here to add your <br /> own text and edit me. It’s easy. Just <br /> click “Edit Text” or double click me to <br /> add your own content and make <br /> changes to the font. </motion.p>
                     <motion.button
                     initial={{opacity: 0,}}
                     animate={Hero7}
                     ref={ref2}    
                     className='lg:px-6 px-4 mt-10 py-2 hover:bg-white text-sm lg:text-lg hover:text-black duration-500 border rounded-md'>Apply Now <span><MdArrowForward className='inline-block' /></span></motion.button>
             </div>
             <div className='bg-transparent text-white pl-7  border h-[55vh] lg:h-[65vh] w-[80vw] rounded-lg lg:w-[27vw]'>
             <motion.h1
                initial={{opacity: 0, x : 35}}
                animate={Hero4}
                ref={ref2} 
             className='mb-12 text-sm lg:text-lg mt-16 tracking-widest'>ELECTRICAL ENGINEER</motion.h1>
                     <motion.h4
                      initial={{opacity: 0, x : 35}}
                      animate={Hero5}
                      ref={ref2}  
                     className='text-base lg:text-sm opacity-70 tracking-widest'>San Francisco, CA</motion.h4>
                     <motion.p
                        initial={{opacity: 0, x : 35}}
                        animate={Hero6}
                        ref={ref2} 
                     className='mt-5 text-xs lg:text-base home-line1'>I'm a paragraph. Click here to add your <br /> own text and edit me. It’s easy. Just <br /> click “Edit Text” or double click me to <br /> add your own content and make <br /> changes to the font. </motion.p>
                     <motion.button
                      initial={{opacity: 0,}}
                      animate={Hero7}
                      ref={ref2}   
                     className='lg:px-6 px-4 mt-10 py-2 text-sm lg:text-lg hover:bg-white hover:text-black duration-500 border rounded-md'>Apply Now <span><MdArrowForward className='inline-block' /></span></motion.button>
             </div>
        </div>
        <div className='flex mt-24 items-center flex-col lg:flex-row gap-12 lg:gap-0 justify-around'>
             <div className='bg-transparent text-white border pl-7 h-[55vh] lg:h-[65vh] w-[80vw] rounded-lg lg:w-[27vw]'>
             <motion.h1
              initial={{opacity: 0, x : -35}}
              animate={A1}
              ref={ref3}  
             className='mb-12 text-sm lg:text-lg mt-16 tracking-widest'>ARTIFICIAL INTELLIGENCE <br /> RESEARCHER</motion.h1>
                     <motion.h4
                      initial={{opacity: 0, x : -35}}
                      animate={A2}
                      ref={ref3}   
                     className='text-base lg:text-sm opacity-70 tracking-widest'>San Francisco, CA</motion.h4>
                     <motion.p
                      initial={{opacity: 0, x : -35}}
                      animate={A3}
                      ref={ref3}   
                     className='mt-5 text-xs lg:text-base home-line1'>I'm a paragraph. Click here to add your <br /> own text and edit me. It’s easy. Just <br /> click “Edit Text” or double click me to <br /> add your own content and make <br />  </motion.p>
                     <motion.button 
                      initial={{opacity: 0,}}
                      animate={A7}
                      ref={ref3}  
                     className='lg:px-6 px-4 mt-10 py-2 text-sm lg:text-lg hover:bg-white hover:text-black duration-500 border rounded-md'>Apply Now <span><MdArrowForward className='inline-block' /></span></motion.button>
             </div>
             <div className='bg-transparent text-white border pl-7 h-[55vh] w-[80vw] lg:h-[65vh] rounded-lg lg:w-[27vw]'>
             <motion.h1
               initial={{opacity: 0, x : 35}}
               animate={A4}
               ref={ref3}  
             className='mb-12 text-sm lg:text-lg mt-16 tracking-widest'>DEEP LEARNING ENGINEER</motion.h1>
                     <motion.h4
                      initial={{opacity: 0, x : 35}}
                      animate={A5}
                      ref={ref3}  
                     className='lg:text-sm text-base opacity-70 tracking-widest'>San Francisco, CA</motion.h4>
                     <motion.p
                      initial={{opacity: 0, x : 35}}
                      animate={A6}
                      ref={ref3}   
                     className='mt-5 text-xs lg:text-base  home-line1'>I'm a paragraph. Click here to add your <br /> own text and edit me. It’s easy. Just <br /> click “Edit Text” or double click me to <br /> add your own content and make <br /> changes to the font. </motion.p>
                     <motion.button
                      initial={{opacity: 0,}}
                      animate={A7}
                      ref={ref3} 
                     className='lg:px-6 px-4 mt-10 py-2 hover:bg-white text-sm lg:text-lg hover:text-black duration-500 border rounded-md'>Apply Now <span><MdArrowForward className='inline-block' /></span></motion.button>
             </div>
        </div>
         </div>
    </div>
  )
}

export default Careers