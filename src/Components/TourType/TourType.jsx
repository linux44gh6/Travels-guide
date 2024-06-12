import { NavLink } from "react-router-dom";
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
const TourType = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,  
    threshold: 0.1      
  });
  useEffect(() => {
    if (inView) {
        if (inView) {
            controls.start({ x: 0, transition: { duration: 1 } }); 
          } else {
            controls.start({ x: -100, transition: { duration: 1 } });
          }
    }
  }, [controls, inView]);
    return (
       <div className="mt-20">
         <div className="tourTypeBG h-[80vh] w-full  bg-fixed">
         <motion.h1 
         ref={ref}
         initial={{y:0}}
         animate={controls}
         className="text-center text-5xl font-font-1 font-extrabold pt-10 text-white">Our Tour Type</motion.h1>
              <motion.div
              ref={ref}
              initial={{ x: 300 }}
              animate={controls}
              className="flex justify-center items-center gap-6 mt-16">
             <NavLink to='/tourPlace/hiking'>
             <div className="bg-[#88838366] w-40 h-40 rounded-full btn hover:bg-color-1 hover:text-white">
                <h1 className="text-center  text-3xl text-white uppercase">hiking</h1>
                </div>
             </NavLink>
              <NavLink to='/tourPlace/sports'>
              <div className="bg-[#88838366] w-40 h-40 rounded-full btn hover:bg-color-1 hover:text-white">
                <h1 className="text-center  text-3xl text-white uppercase">sport</h1>
                </div>
              </NavLink>
              <NavLink to='/tourPlace/walking'>
              <div className="bg-[#88838366] w-40 h-40 rounded-full btn hover:bg-color-1 hover:text-white">
                <h1 className="text-center  text-3xl text-white uppercase">walking</h1>
                </div>
              </NavLink>
              </motion.div>
        </div>
       </div>
    );
};

export default TourType;