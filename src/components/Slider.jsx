
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "./Slider.css";

import Hero from "./Hero"
import {sliderItems} from "../data" 

import {  Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import "./styles.css";


export default function Slider() {

  
  return (
    <>
      <Swiper
        pagination={true} modules={[Pagination]} className="mySwiper"
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
