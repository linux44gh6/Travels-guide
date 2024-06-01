import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useRef, useState } from 'react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../../CSS/Banner.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const Banner = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
      progressCircle.current.style.setProperty('--progress', 1 - progress);
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <div className='-translate-y-10'>
           <div className='h-[100vh] relative'>
           <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide className='slide1'></SwiperSlide>
        <SwiperSlide className='slide2'></SwiperSlide>
        <SwiperSlide className='slide3'></SwiperSlide>
        <SwiperSlide className='slide4'></SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
           </div>
      <div className='absolute top-[20%] z-20 left-[20%]' >
                <h1 className='text-white mb-2 lg:text-7xl font-extrabold font-font-1 text-center'>Experience The Wonder</h1>
                <h2 className='lg:text-5xl font-font-2 text-center text-white'>People Don’t Take Trips, Trips Take People</h2>
            </div>
        </div>
    );
};

export default Banner;