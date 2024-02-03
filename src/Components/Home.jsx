import React from 'react'
import { MdArrowForward } from "react-icons/md";
import  {useEffect} from 'react'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Home() {

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
       controls3.start({ x: 0, opacity: 1, transition: { duration: 1.1, delay: 0.9} });
       controls4.start({ x: 0, opacity: 1, transition: { duration: 1.5, delay: 0.7} });
     }
   }, [inView, controls1, controls2, controls3, controls4]);


   ////// Second Animation

   const animation1 = useAnimation();
   const animation2 = useAnimation();
   const animation3 = useAnimation();
   const animation4 = useAnimation();
 
   const [ref1, inView1] = useInView({
     triggerOnce: true,
     rootMargin: '50px -50px',
   });
 
   useEffect(() => {
     if (inView1) {
      animation1.start({ x: 0, opacity: 1, transition: { duration: 1, } });
      animation2.start({ x: 0, opacity: 1, transition: { duration: 1.1, delay: 0.2} });
      animation3.start({ x: 0, opacity: 1, transition: { duration: 1.1, delay: 0.5} });
      animation4.start({ x: 0, opacity: 1, transition: { duration: 1.1, delay: 0.7} });
     }
   }, [inView1, animation1, animation2, animation3, animation4]);


   //// Third Animation 

   const framer1 = useAnimation();
   const framer2 = useAnimation();
   const framer3 = useAnimation();
 
   const [ref2, inView2] = useInView({
     triggerOnce: true,
     rootMargin: '50px -50px',
   });
 
   useEffect(() => {
     if (inView2) {
      framer1.start({ x: 0, opacity: 1, transition: { duration: 1, } });
      framer2.start({ x: 0, opacity: 1, transition: { duration: 1.1, delay: 0.2} });
      framer3.start({ x: 0, opacity: 1, transition: { duration: 1.1, delay: 0.5} });
     }
   }, [inView2, framer1, framer2, framer3]);


   //////Fourth Animation 


   const chaleya1 = useAnimation();
   const chaleya2 = useAnimation();
   const chaleya3 = useAnimation();
 
   const [ref3, inView3] = useInView({
     triggerOnce: true,
     rootMargin: '50px -50px',
   });
 
   useEffect(() => {
     if (inView3) {
      chaleya1.start({ x: 0, opacity: 1, transition: { duration: 1, } });
      chaleya2.start({ x: 0, opacity: 1, transition: { duration: 1.1, delay: 0.2} });
      chaleya3.start({ x: 0, opacity: 1, transition: { duration: 1.1, delay: 0.5} });
     }
   }, [inView3, chaleya1, chaleya2, chaleya3]);


   ////// Fifth animation 


   const Weekend1 = useAnimation();
   const Weekend2 = useAnimation();
   const Weekend3 = useAnimation();
 
   const [ref4, inView4] = useInView({
     triggerOnce: true,
     rootMargin: '50px -50px',
   });
 
   useEffect(() => {
     if (inView4) {
      Weekend1.start({ x: 0, opacity: 1, transition: { duration: 1, } });
      Weekend2.start({ x: 0, opacity: 1, transition: { duration: 1.1, delay: 0.2} });
      Weekend3.start({ x: 0, opacity: 1, transition: { duration: 1.1, delay: 0.5} });
     }
   }, [inView4, Weekend1, Weekend2, Weekend3]);



   ///// sixth animation 



   const Starboy1 = useAnimation();
   const Starboy2 = useAnimation();
   const Starboy3 = useAnimation();
 
   const [ref5, inView5] = useInView({
     triggerOnce: true,
     rootMargin: '50px -50px',
   });
 
   useEffect(() => {
     if (inView5) {
      Starboy1.start({ x: 0, opacity: 1, transition: { duration: 1, delay: 0.1} });
      Starboy2.start({ x: 0, opacity: 1, transition: { duration: 1.1, delay: 0.5} });
      Starboy3.start({ x: 0, opacity: 1, transition: { duration: 1.1, delay: 0.9} });
     }
   }, [inView5, Starboy1, Starboy2, Starboy3]);


   //// 7th Aniamtion 



   const Reminder1 = useAnimation();
   const Reminder2 = useAnimation();
   const Reminder3 = useAnimation();
   const Reminder4 = useAnimation();
   const Reminder5 = useAnimation();
   const Reminder6 = useAnimation();
   const Reminder7 = useAnimation();
 
   const [ref6, inView6] = useInView({
     triggerOnce: true,
     rootMargin: '50px -50px',
   });
 
   useEffect(() => {
     if (inView6) {
      Reminder1.start({ x: 0, opacity: 1, transition: { duration: 1, delay: 0.1} });
      Reminder2.start({ x: 0, opacity: 1, transition: { duration: 1.1, delay: 0.5} });
      Reminder3.start({ x: 0, opacity: 1, transition: { duration: 1.1, delay: 0.9} });

      Reminder4.start({ opacity: 1, transition: { duration: 3.1, delay: 1} });
      Reminder5.start({ opacity: 1, transition: { duration: 3.1, delay: 1.6} });
      Reminder6.start({ opacity: 1, transition: { duration: 3.1, delay: 2.2} });
      Reminder7.start({ opacity: 1, transition: { duration: 3.1, delay: 2.8} });
     }
   }, [inView6, Reminder1, Reminder2, Reminder3, Reminder4, Reminder5, Reminder6, Reminder6]);





  return (
    <main className='max-h-fit w-auto bg-black'> 
    <div className='home-img flex justify-center items-start pt-36 w-auto h-[110vh]'>
    <div className='flex flex-col justify-center items-center'>
             <h1 className='lg:text-7xl text-3xl tracking-widest text-center lg:home-line font-normal'>THE FUTURE OF <br />MOBILITY IS HERE</h1>
             <p className='lg:text-xl text-base text-center mt-10 tracking-widest lg:mt-3'>Discover the safest self-driving experience with Autono.</p>
         </div>
    </div> 
        <div className='flex items-center flex-col lg:flex-row justify-between lg:pt-0 pt-16 lg:px-36 text-white'>
          <div className='flex '>
             <div className='border-l border-white opacity-60 pr-6 lg:pr-10'>
                
             </div>
             <div>
                 <motion.h1
                  initial={{opacity: 0, x : -35}}
                  animate={controls1}
                  ref={ref} 
                 className='mb-10 lg:text-base text-sm tracking-widest'>VISION</motion.h1>
                 <motion.h2
                  initial={{opacity: 0, x : -35}}
                  animate={controls2}
                  ref={ref}  
                 className='home-line1 mb-10 lg:text-2xl text-lg tracking-widest'>We’re Changing the <br /> Way the World Thinks <br /> About Cars</motion.h2>
                 <motion.p
                  initial={{opacity: 0, x : -35}}
                  animate={controls3}
                  ref={ref}  
                 className='home-line2 text-xs lg:text-base tracking-widest'>I'm a paragraph. Click here to add your <br /> own text and edit me. It’s easy. Just <br /> click “Edit Text” or double click me to <br /> add your own content and make <br /> changes to the font. I’m a great place <br /> for you to tell a story and let your users <br /> know a little more about you.</motion.p>
             </div>
             </div>
             <div className="max-w-full flex justify-center items-center text-center">
          <motion.img
           initial={{opacity: 0, x : 155}}
           animate={controls4}
           ref={ref}   
          className="max-w-full h-auto lg:w-[480px]" src="https://static.wixstatic.com/media/c837a6_ea5eeb99f72d42b0a22f459e01bfd33c~mv2.jpg/v1/fill/w_617,h_840,al_l,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_ea5eeb99f72d42b0a22f459e01bfd33c~mv2.jpg" alt="" width={220} />
        </div>
        </div>
        <div className='flex items-center flex-col lg:flex-row pt-10 lg:pt-0 h-screen justify-between lg:px-36 bg-white text-black'>
          <div className='flex'>
             <div className='border-l border-black opacity-60 pr-6 lg:pr-10'>
                
             </div>
             <div>
                 <motion.h1
                  initial={{opacity: 0, x : -35}}
                  animate={animation1}
                  ref={ref1} 
                 className='uppercase mb-10 tracking-widest text-sm lg:text-base'>SERVICES</motion.h1>
                 <motion.h2
                  initial={{opacity: 0, x : -35}}
                  animate={animation2}
                  ref={ref1}   
                 className='home-line1 mb-10 text-lg lg:text-2xl tracking-widest'>We Deliver Exceptional <br /> Products and Services <br /> Around the World</motion.h2>
                 <motion.h1
                  initial={{opacity: 0, x : -35}}
                  animate={animation3}
                  ref={ref1}  
                 className='lg:text-4xl text-2xl home-line2'>AUTONOMOUS <br />DRIVING</motion.h1>
                 <motion.p
                  initial={{opacity: 0, x : -35}}
                  animate={animation4}
                  ref={ref1} 
                 className='home-line2 mt-6 lg:text-base text-xs tracking-widest'>I'm a paragraph. Click here to add your <br /> own text and edit me. It’s easy. Just <br /> click “Edit Text” or double click me to <br /> add your own content and make <br /> changes to the font. I’m a great place <br /> for you to tell a story and let your users <br /> know a little more about you.</motion.p>
             </div>
             </div>
             <div className="max-w-full flex justify-center items-center text-center">
          <img className="max-w-full h-auto lg:w-[700px]" src="https://static.wixstatic.com/media/84770f_3cc097e7503b4ed498e350c6618ef956~mv2.jpg/v1/fill/w_950,h_850,al_l,q_85,usm_0.66_1.00_0.01,enc_auto/84770f_3cc097e7503b4ed498e350c6618ef956~mv2.jpg" alt="img" width={250} />
        </div>
        </div>
        <div className='flex lg:items-center flex-col pt-10 lg:pt-0 lg:flex-row h-screen justify-between lg:px-36 bg-white text-black'>
          <div className='flex justify-center flex-col lg:flex-row items-center'>
          <div className="max-w-full pl-1 lg:pl-0">
          <img className="max-w-full lg:w-[700px] h-auto" src="https://static.wixstatic.com/media/84770f_abca8ce0bac24971a57d1f9d40b8238b~mv2.jpg/v1/fill/w_950,h_850,al_r,q_85,usm_0.66_1.00_0.01,enc_auto/84770f_abca8ce0bac24971a57d1f9d40b8238b~mv2.jpg" alt="img" width={250} />
        </div>
             <div className='lg:pt-32 px-10 lg:px-0 lg:ml-44'>
                 <motion.h1
                  initial={{opacity: 0, x : 75}}
                  animate={framer1}
                  ref={ref2}  
                 className='lg:text-4xl text-2xl home-line2'>REAL-TIME <br /> INFORMATION</motion.h1>
                 <motion.p
                  initial={{opacity: 0, x : 75}}
                  animate={framer2}
                  ref={ref2}   
                 className='home-line2 lg:text-base text-xs mt-6 tracking-widest'>I'm a paragraph. Click here to add your <br /> own text and edit me. It’s easy. <br /> Just click “Edit Text” or double click <br /> me to add your own content and make <br /> changes to the font. I’m a great place  for <br /> you  to tell a story and let  your users <br /> know a little more about you.</motion.p>
                 <motion.button
                  initial={{opacity: 0, x : 75}}
                  animate={framer3}
                  ref={ref2}   
                 className='bg-transparent border hover:bg-black hover:text-white duration-500 px-6 py-1 mt-7 text-black border-r border-black rounded-lg'>Read More <span><MdArrowForward className='inline-block text-lg' /></span></motion.button>
             </div>
             </div>
        </div>
        <div className='flex items-center h-screen pb-[85px] justify-center bg-white text-black'>
          <div className='flex'>
          <div className='pt-32 mr-44'>
                 <motion.h1
                  initial={{opacity: 0, x : -35}}
                  animate={chaleya1}
                  ref={ref3}  
                 className='text-4xl home-line2'>PERCEPTION <br /> ENABLED</motion.h1>
                 <motion.p
                  initial={{opacity: 0, x : -35}}
                  animate={chaleya2}
                  ref={ref3}   
                 className='home-line2 mt-6 tracking-widest'>I'm a paragraph. Click here to add your <br /> own text and edit me. It’s easy. Just <br /> click “Edit Text” or double click me to <br /> add your own content and make <br /> changes to the font. I’m a great place <br /> for you to tell a story and let your users <br /> know a little more about you.</motion.p>
                 <motion.button
                  initial={{opacity: 0, x : -35}}
                  animate={chaleya3}
                  ref={ref3}   
                 className='bg-transparent border hover:bg-black hover:text-white duration-500 px-6 py-1 mt-7 text-black border-r border-black rounded-lg'>Read More <span><MdArrowForward className='inline-block text-lg' /></span></motion.button>
             </div>
          <div className="max-w-full">
          <img className="max-w-full h-auto" src="https://static.wixstatic.com/media/c837a6_305ff8a7722a479ab58f1d4f2729586e~mv2.jpg/v1/fill/w_950,h_850,al_l,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_305ff8a7722a479ab58f1d4f2729586e~mv2.jpg" alt="img" width={700} />
        </div>
             </div>
        </div>
        <div className='lawra-img w-auto flex justify-start  items-center h-[110vh]'>
              <div className='bg-black w-[32vw] text-white flex justify-center items-center rounded-xl ml-36 h-[85vh]'>
              <div className='flex '>
             <div className='border-l border-white opacity-60 pr-10'>
                
             </div>
             <div>
                 <motion.h1
                   initial={{opacity: 0, x : -35}}
                   animate={Weekend1}
                   ref={ref4}   
                 className='mb-10 text-base tracking-widest'>WHY AUTONO</motion.h1>
                 <motion.h2
                  initial={{opacity: 0, x : -35}}
                  animate={Weekend2}
                  ref={ref4}    
                 className='home-line1 mb-10 text-2xl tracking-widest'>A different approach, <br /> using a new method of <br /> manufacturing.</motion.h2>
                 <motion.p
                  initial={{opacity: 0, x : -35}}
                  animate={Weekend3}
                  ref={ref4}    
                 className='home-line2 tracking-widest'>I'm a paragraph. Click here to add your <br /> own text and edit me. It’s easy. Just <br /> click “Edit Text” or double click me to <br /> add your own content and make <br /> changes to the font. I’m a great place <br /> for you to tell a story and let your users <br /> know a little more about you.</motion.p>
                 <button className='bg-transparent hover:bg-white hover:text-black duration-500 px-6 py-1 mt-7 text-white border border-white rounded-lg'>Read More <span><MdArrowForward className='inline-block text-lg' /></span></button>
             </div>
             </div>
              </div>
        </div>
        <div className='bg-white flex justify-start items-center w-auto h-[100vh]'>
                <div>
                    <img src="https://static.wixstatic.com/media/c837a6_3a4f054db4424af1b034f96ddd7b691a~mv2.jpg/v1/fill/w_950,h_950,al_r,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_3a4f054db4424af1b034f96ddd7b691a~mv2.jpg" width={730} alt="img" />
                </div>
                <div className='flex items-center justify-center'>
                <div className='ml-40'>
                   <motion.h1
                     initial={{opacity: 0, x : 45}}
                     animate={Starboy1}
                     ref={ref5}    
                   className='text-3xl tracking-wider home-line2'>Autono In Numbers</motion.h1>
                   <div className='mt-16'>
                      <motion.h1
                       initial={{opacity: 0, x : 35}}
                       animate={Starboy2}
                       ref={ref5}     
                      className='text-4xl font-normal'>200</motion.h1>
                      <div className='border-t mt-5 w-44 border-black opacity-70'>

                      </div>
                      <motion.h4
                        initial={{opacity: 0, x : 35}}
                        animate={Starboy2}
                        ref={ref5}   
                      className='mt-4 tracking-widest'>EMPLOYEES</motion.h4>
                   </div>
                   <div className='mt-20'>
                      <motion.h1
                       initial={{opacity: 0, x : 35}}
                       animate={Starboy3}
                       ref={ref5}    
                      className='text-4xl font-normal'>200M$</motion.h1>
                      <div className='border-t mt-5 w-44 border-black opacity-70'>

                      </div>
                      <motion.h4
                       initial={{opacity: 0, x : 35}}
                       animate={Starboy3}
                       ref={ref5}    
                      className='mt-4 tracking-widest'>CAPITAL</motion.h4>
                   </div>
                </div>
                </div>
                <div className='flex'>
                <div className='mt-10'>
                   <div className='mt-16'>
                      <motion.h1
                       initial={{opacity: 0, x : 35}}
                       animate={Starboy2}
                       ref={ref5}    
                      className='text-4xl font-normal'>5</motion.h1>
                      <div className='border-t mt-5 w-44 border-black opacity-70'>

                      </div>
                      <motion.h4
                       initial={{opacity: 0, x : 35}}
                       animate={Starboy2}
                       ref={ref5}    
                      className='mt-4 tracking-widest'>CORE TEAMS</motion.h4>
                   </div>
                   <div className='mt-20'>
                      <motion.h1
                      initial={{opacity: 0, x : 35}}
                      animate={Starboy3}
                      ref={ref5}  
                      className='text-4xl font-normal'>326</motion.h1>
                      <div className='border-t mt-5 w-44 border-black opacity-70'>

                      </div>
                      <motion.h4
                      initial={{opacity: 0, x : 35}}
                      animate={Starboy3}
                      ref={ref5}  
                      className='mt-4 tracking-widest'>PARTNERS</motion.h4>
                   </div>
                </div>
                </div>
        </div>
        <div className='flex items-center justify-between h-[90vh] w-auto px-36 bg-black text-white'>
          <div className='flex '>
             <div className='border-l border-white opacity-60 pr-10'>
                
             </div>
             <div>
                 <motion.h1
                 initial={{opacity: 0, x : -35}}
                 animate={Reminder1}
                 ref={ref6}   
                 className='mb-10 text-base tracking-widest'>INDUSTRY</motion.h1>
                 <motion.h2
                  initial={{opacity: 0, x : -35}}
                  animate={Reminder2}
                  ref={ref6}    
                 className='home-line1 mb-10 text-2xl tracking-widest'>Our <br />Partners</motion.h2>
                 <motion.p
                  initial={{opacity: 0, x : -35}}
                  animate={Reminder3}
                  ref={ref6}    
                 className='home-line2 tracking-widest'>Click here to add your own content <br /> and customize the text. This is a great <br /> place to tell a story about your <br /> company and let your users know a <br /> little more about the company's <br /> history, the team's background, or any <br /> other information you'd like to share. <br /> Just click "Edit Text" to get started.</motion.p>
             </div>
             </div>
             <div className='flex  flex-col gap-20 justify-center items-center'>
             <div className='flex gap-20 justify-center items-center'>
             <div className="max-w-full flex items-center justify-center flex-col text-center">
          <motion.img
             initial={{opacity: 0}}
             animate={Reminder4}
             ref={ref6}
          className="max-w-full h-auto" src="https://static.wixstatic.com/media/c837a6_a8508672733a4bb7ba100662952d4f6f~mv2.png/v1/fill/w_175,h_175,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/General_Transport.png" alt="" width={140} />
          <h2 className='tracking-widest text-center text-base'>GENERAL TRANSPORT</h2>
        </div>
             <div className="max-w-full flex items-center justify-center flex-col text-center">
          <motion.img
           initial={{opacity: 0}}
           animate={Reminder5}
           ref={ref6} 
          className="max-w-full mt-7 h-auto" src="https://static.wixstatic.com/media/c837a6_24669e1d20cd4f079fd2ea5e253c99b8~mv2.png/v1/fill/w_110,h_80,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/IDI_Software.png" alt="" width={100} />
          <h2 className='tracking-widest mt-10 text-center text-base'>IDI SOFTWARE</h2>
        </div>
        </div>
             <div className='flex gap-20 justify-center items-center'>
             <div className="max-w-full flex items-center justify-center flex-col text-center">
          <motion.img
           initial={{opacity: 0}}
           animate={Reminder6}
           ref={ref6} 
          className="max-w-full h-auto" src="https://static.wixstatic.com/media/c837a6_db1c6e9c1b95497f81465ccd218fa048~mv2.png/v1/fill/w_110,h_100,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Imogen_Cars.png" alt="" width={90} />
          <h2 className='tracking-widest text-center mt-8 text-base'>IMOGEN CARS</h2>
        </div>
             <div className="max-w-full flex items-center justify-center flex-col text-center">
          <motion.img
           initial={{opacity: 0}}
           animate={Reminder7}
           ref={ref6} 
          className="max-w-full h-auto" src="https://static.wixstatic.com/media/c837a6_81bc98e386764170adbb3e97cc7e1655~mv2.png/v1/fill/w_160,h_80,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Tri-Nex%20.png" alt="" width={140} />
          <h2 className='tracking-widest mt-26 mt-10 text-center text-base'>TRI-NEX</h2>
        </div>
        </div>
        </div>
        </div>
    </main>
  )
}

export default Home