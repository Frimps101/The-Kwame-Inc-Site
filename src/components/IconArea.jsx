import React from 'react'
import "./IconArea.css"

const IconArea = () => {
  return (
    <section className='icons'>
        <div className="icon_head">
            <h1>Whether it’s something from your closet or a photo on your phone, we make it last.</h1>
        </div>
        <div className="icon_imgs">
            <div className="imgs">
                <img src="/images/price.png"/>
                <p className="icon_txt">
                    Honest pricing you cannot deny
                </p>
            </div>
            <div className="imgs">
                <img src="/images/frame.png"/>
                <p className="icont_txt">
                Crafted using high-quality materials
                </p>
            </div>
            <div className="imgs">
                <img src="/images/delivery.png"/>
                <p className="icont_txt">
                    Delivered to your doorstep.
                </p>
            </div>
        </div>
    </section>
  )
}

export default IconArea