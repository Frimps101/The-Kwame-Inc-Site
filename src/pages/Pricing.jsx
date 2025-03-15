import React from 'react'
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";

const Pricing = () => {
  return (
    <>
      <Nav />
      <PageHero
        title="Pricing"
        content="By accessing or using our website and services, you agree to be bound by the following Terms of Service. Please read them carefully."
      />
      <div className="section pricing-container">
        
      </div>

      <Footer />
    </>
  )
}

export default Pricing