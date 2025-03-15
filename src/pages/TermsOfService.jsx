import React from 'react'
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import { tos } from "../data";
import "./TermsOfService.css";

const TermsOfService = () => {
  return (
    <>
      <Nav />
      <PageHero
        title="Terms of Service"
        content="By accessing or using our website and services, you agree to be bound by the following Terms of Service. Please read them carefully."
      />
      <div className="section tos-container">
        <div className="faq-list">
          {tos.map((item, index) => (
            <div
              key={index}
            >
              <h3 className='tos-title'>
                {item.title}
              </h3>
              <div className='tos-body'>
                <p className='tos-body--item'>{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  )
}

export default TermsOfService