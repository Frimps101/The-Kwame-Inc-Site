import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import "./Contact.css";
import { useRef } from "react";

const Contact = () => {
  const formRef = useRef();
  return (
    <div>
      <Nav />
      <PageHero
        title="Contact"
        content="We work tirelessly to provide you with the highest level of service, empowered by complete transparency and user involvement."
      />

      <div className="contact-container">
        <div className="contact-left">
          <h2>Get in touch with us</h2>
          <div className="contact-left-phone">
            <h4>Phone:</h4>
            <span>+233 556 402 727</span>
          </div>

          <div className="contact-left-email">
            <h4>Email:</h4>
            <span>mkk@gmail.com</span>
          </div>

          <div className="contact-left-social">
            <i class="fa-brands fa-whatsapp"></i>
            <i class="fa-brands fa-linkedin-in"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-facebook-f"></i>
          </div>
        </div>

        <div className="contactright">
          <p className="contact-desc">
            <b>What do you want to do? Get in touch.</b> 
            <hr /> 
            <small>We're always ready for
            your orders.
            </small>
          </p>
          <form ref={formRef}>
            <input type="text" placeholder="Name" name="user_name" />
            <input type="text" placeholder="Subject" name="user_subject" />
            <input type="text" placeholder="Email" name="user_email" />
            <textarea name="message" rows="5 " placeholder="Message"></textarea>
            <button>Submit</button>
          </form>
        </div>

      </div>
      <Footer />
    </div>
  );
};

export default Contact;
