import React from 'react'

import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import Gallery from '../components/Gallery';
import FrameStyles from '../components/FrameStyles';
import Offer from '../components/Offer';
import IconArea from '../components/IconArea';
import Pricing from '../components/Pricing';
import Process from '../components/Process';
import Contacts from '../components/Contacts';
import Footer from '../components/Footer';
import Copyright from '../components/Copyright';

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Slider/>
      <IconArea/>
      <Pricing/>
      <Gallery/>
      <FrameStyles/>
      <Offer/>
      <Process/>
      <Contacts/>
      <Footer />
      <Copyright />
    </div>
  )
}

export default Home