import React from "react";
import Videos from "../components/Videos";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import "./Gallery.css";
import Arcade from "../components/Arcade";

const Gallery = () => {
  return (
    <>
      <Nav />
      <PageHero
        title="Gallery"
        content="We work tirelessly to provide you with the highest level of service, empowered by complete transparency and user involvement."
        class="mb-10"
      />

      <section className="gal_container">
        <Videos />
        <Arcade />
      </section>

      <Footer />
    </>
  );
};

export default Gallery;
