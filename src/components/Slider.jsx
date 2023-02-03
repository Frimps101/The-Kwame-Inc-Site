import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import Hero from "./Hero"
import {sliderItems} from "../data" 

import { Navigation, Pagination, Mousewheel, Keyboard, Scrollbar, A11y } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import "./styles.css";


export default function Slider() {

  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        loop={true}
        pagination={{
          dynamicBullets: true,
          clickable: true
        }}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
      {sliderItems.map((item)=>(
        <SwiperSlide>
            <Hero title={ item.title } desc={ item.desc } imgFile={item.img}/>
        </SwiperSlide>
        ))}  
        
        {/* <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide> */}
      </Swiper>
    </>
  );
}
