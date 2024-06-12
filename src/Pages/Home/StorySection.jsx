import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import StoryCard from '../../Components/StoryCard/StoryCard';

import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
const StorySection = () => {
    const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,  
    threshold: 0.1      
  });
  useEffect(() => {
    if (inView) {
        if (inView) {
            controls.start({ x: 0, transition: { duration: 1 } }); // Set duration to 1 second
          } else {
            controls.start({ x: -100, transition: { duration: 1 } }); // Set duration to 1 second
          }
    }
  }, [controls, inView]);
    const {data:story=[]}=useQuery({queryKey:['story'],queryFn:async()=>{
        const res=await axios.get(`${import.meta.env.VITE_BASE_URL}/allStory`)
        return res.data
    }})
    console.log(story)
    return (
        <div className="mt-20 ">
            <motion.h1 
            ref={ref}
            initial={{ x: -300 }}
            animate={controls}
            className="text-4xl font-font-1 capitalize text-center ">Tourist Story</motion.h1>
            <motion.p
             ref={ref}
             initial={{ x:300 }}
             animate={controls}
            className='w-[800px] mx-auto text-center mb-10 font-font-1'>Welcome to the Tourist Story section, where tales from globetrotters come alive! Here, we share inspiring, adventurous, and unforgettable experiences from travelers around the world. From serene beaches to bustling cities, and from majestic mountains to hidden gems, every story is a testament to the wonders of exploration.</motion.p>
            <div className="">
            <Swiper
        slidesPerView={2}
        spaceBetween={59}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <div className=''>
        {
            story.map(item=><SwiperSlide key={item._id}>
                <StoryCard
                item={item}
                ></StoryCard>
            </SwiperSlide>)
        }
        </div>
      </Swiper>
            </div>
        </div>
    );
};

export default StorySection;