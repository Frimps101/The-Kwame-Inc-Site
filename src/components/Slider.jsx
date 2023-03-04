import "./Slider.css";

import Hero from "./Hero"
import {data} from "../data" 

export default function Slider() {

  
  return (
    <>
      {data.map((item)=>(
            <Hero title={ item.title } desc={ item.desc } imgFile={item.img}/>
        ))}  
    </>
  );
}
