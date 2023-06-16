import React from 'react'

import Nav from '../components/Nav';
// import Slider from '../components/Slider';
import Banner from '../components/Banner';
// import Gallery from '../components/Gallery';
import FrameStyles from '../components/FrameStyles';
import Offer from '../components/Offer';
import IconArea from '../components/IconArea';
import Pricing from '../components/Pricing';
import Process from '../components/Process';
import Contacts from '../components/Contacts';
import Testimonial from '../components/Testimonial';
import Footer from '../components/Footer';
import Copyright from '../components/Copyright';

const Home = () => {
  return (
    <div>
      <Nav/>
      <Banner/>
      <IconArea/>
      <Pricing/>
      {/* <Gallery/> */}
      <FrameStyles/>
      <Offer/>
      <Process/>
      {/* <Contacts/> */}
      <Testimonial />
      <Footer />
      <Copyright />
    </div>
  )
}

export default Home