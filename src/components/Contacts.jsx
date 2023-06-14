import { useContext, useRef, useState } from "react";
import "./Contacts.css";

const Contacts = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);

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
          <form ref={formRef}>
            <input className="c-input" type="text" placeholder="Name" name="user_name" />
            <input className="c-input" type="text" placeholder="Subject" name="user_subject" />
            <input className="c-input" type="text" placeholder="Email" name="user_email" />
            <textarea name="message" rows="5 " placeholder="Message"></textarea>
            <button className="c-right__btn">Submit</button>
            <p className="c-thanks">{done && "Thank you for contacting us."}</p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
