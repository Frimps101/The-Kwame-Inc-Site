import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer' 
import PageHero from '../components/PageHero'

const Contact = () => {
  return (
    <div>
      <Navbar />
      <PageHero 
        title="Contact"
        content="We work tirelessly to provide you with the highest level of service, empowered by complete transparency and user involvement."
      />
      <Footer/>
    </div>
  )
}

export default Contact