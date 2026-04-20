import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import "./Contact.css";

const Contact = () => {
  const formRef = useRef();
  const [status, setStatus] = useState(null); // null | "sending" | "success" | "error"

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setStatus("success");
        formRef.current.reset();
      })
      .catch(() => {
        setStatus("error");
      });
  };

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
            <i className="fa-brands fa-whatsapp"></i>
            <i className="fa-brands fa-linkedin-in"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-facebook-f"></i>
          </div>
        </div>

        <div className="contactright">
          <p className="contact-desc">
            <b>What do you want to do? Get in touch.</b>
            <hr />
            <small>We're always ready for your orders.</small>
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" name="user_name" required />
            <input type="text" placeholder="Subject" name="user_subject" required />
            <input type="email" placeholder="Email" name="user_email" required />
            <textarea name="message" rows="5" placeholder="Message" required></textarea>
            <button type="submit" className="contact-btn" disabled={status === "sending"}>
              {status === "sending" ? "Sending..." : "Submit"}
            </button>
            {status === "success" && (
              <p className="contact-feedback success">Thank you! Your message has been sent.</p>
            )}
            {status === "error" && (
              <p className="contact-feedback error">Something went wrong. Please try again.</p>
            )}
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
