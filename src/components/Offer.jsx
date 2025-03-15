import React from 'react'
import './Offer.css'

const Offer = () => {
  return (
    <div className='wrapper'>
        <div className="wrapper_header">
            <h3>Frame your life</h3>
            <p>We have all you'll ever need</p>
        </div>
        <div className="wrapper_imgs">
            <img src="/images/offer1.jpg" alt="" className="imgs_item1" />
            <img src="/images/offer4.jpg" alt="" className="imgs_item2" />
            <img src="/images/offer5.jpg" alt="" className="imgs_item3" />
        </div>
        <div className="wrapper_txt">
            <p>
                We can make a picture from your wedding or family trip, a piece for your next gallery show, or one of life's most treasured moments last a lifetime.
            </p>
        </div>
    </div>
  )
}

export default Offer
