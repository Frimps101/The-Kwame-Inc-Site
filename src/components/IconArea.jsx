import React from "react";
import "./IconArea.css";

const IconArea = () => {
  return (
    <section className="icons section">
      <div className="icon_head">
        <h1 className="icon-title text-3xl font-bold text-center mb-[4rem]">
          Whether it's something from your closet<br />
          or a photo on your phone, we make it last.
        </h1>
      </div>
      <div className="icon_imgs">
        <div className="imgs">
          <i className="fa-sharp fa-solid fa-tags iconArea"></i>
          <p className="icon_txt">Honest pricing you cannot deny</p>
        </div>
        <div className="imgs">
          <i className="fa-solid fa-images iconArea"></i>
          <p className="icon_txt">Crafted using high-quality materials</p>
        </div>
        <div className="imgs">
          <i className="fa-solid fa-truck-fast iconArea"></i>
          <p className="icon_txt">Delivered to your doorstep.</p>
        </div>
        <div className="imgs">
          <i className="fa-solid fa-hourglass-start iconArea"></i>
          <p className="icon_txt">Preserve memories with timeless detail.</p>
        </div>
      </div>
    </section>
  );
};

export default IconArea;
