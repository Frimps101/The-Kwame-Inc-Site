import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import "./Photography.css";
import PageHero from "../components/PageHero";

const Photography = () => {

  return (
    <div>
      <Nav />
      <PageHero
        title="Photography"
        content="We work tirelessly to provide you with the highest level of service, empowered by complete transparency and user involvement."
      />

      {/* Coming Soon Section */}
      <div className="coming-soon-section">
        <div className="coming-soon-container">
          <h2>Coming Soon</h2>
          <p>We're working hard to bring you an amazing photography experience. Stay tuned for updates!</p>
          <div className="coming-soon-icon">
            📸
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Photography;
