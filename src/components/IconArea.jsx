import React from "react";
import "./IconArea.css";

const IconArea = () => {
  return (
    <section className="icons">
      <div className="icon_head">
        <h1 className="icon-title text-3xl font-bold text-center mb-[3rem]">
          Whether it’s something from your closet or a photo on your phone, we
          make it last.
        </h1>
      </div>
      <div className="icon_imgs">
        <div className="imgs">
          <i class="fa-sharp fa-solid fa-tags iconArea"></i>
          <p className="icon_txt">Honest pricing you cannot deny</p>
        </div>
        <div className="imgs">
          <i class="fa-solid fa-images iconArea"></i>
          <p className="icont_txt">Crafted using high-quality materials</p>
        </div>
        <div className="imgs">
          <i class="fa-solid fa-truck-fast iconArea"></i>
          <p className="icont_txt">Delivered to your doorstep.</p>
        </div>
      </div>
    </section>
  );
};

export default IconArea;
