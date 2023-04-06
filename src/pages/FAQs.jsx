import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import { faqs } from "../data";
import "./FAQs.css";

const FAQs = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  }
  return (
    <>
      <Navbar />
      <PageHero
        title="FAQs"
        content="We work tirelessly to provide you with the highest level of service, empowered by complete transparency and user involvement."
      />

      {/* <Header title="FAQs" /> */}
      <div className="faq-section section">
        <h2 className="faq-title">Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqs.map((item, index) => (
            <div
              className={`faq-item ${openQuestion === index ? "open" : ""}`}
              key={index}
              onClick={() => toggleQuestion(index)}
            >
              <h3>
                {item.question}{" "}
                <span
                  className={`arrow ${openQuestion === index ? "up" : "down"}`}
                >
                  &#9660;
                </span>
              </h3>
              <div
                className={`faq-answer ${
                  openQuestion === index ? "visible" : ""
                }`}
              >
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default FAQs;
