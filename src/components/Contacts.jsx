import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contacts.css";

const Contacts = () => {
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
    <section className="c">
      <div className="c-bg"></div>
      <div className="section c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Hit us up! Let's discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src="/images/phone.png" alt="" className="c-icon" />
              +233 542 730 363
            </div>
            <div className="c-info-item">
              <img src="/images/email.png" alt="" className="c-icon" />
              maxkonadu8@gmail.com
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What do you want to do? Get in touch.</b> We're always ready for
            your orders.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input className="c-input" type="text" placeholder="Name" name="user_name" required />
            <input className="c-input" type="text" placeholder="Subject" name="user_subject" required />
            <input className="c-input" type="email" placeholder="Email" name="user_email" required />
            <textarea name="message" rows="5" placeholder="Message" required></textarea>
            <button className="c-right__btn" type="submit" disabled={status === "sending"}>
              {status === "sending" ? "Sending..." : "Submit"}
            </button>
            {status === "success" && (
              <p className="c-thanks">Thank you! Your message has been sent.</p>
            )}
            {status === "error" && (
              <p className="c-thanks" style={{ color: "red" }}>Something went wrong. Please try again.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
