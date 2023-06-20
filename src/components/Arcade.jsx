import React from "react";
import "./Arcade.css";

const Arcade = () => {
  return (
    <>
      <h3 className="mt-[6rem] text-3xl font-bold text-center my-4">Welcome to Our Picture Gallery</h3>
      <p className="text-center mb-6">Browse through our stunning collection of photos and get inspired.</p>
      <div className="gallery section">
        <div className="gallery__column">
          <figure className="gallery__thumb">
            <img src="/videos/pic1.jpeg" alt="" className="gallery__image" />
          </figure>

          <figure className="gallery__thumb">
            <img src="/videos/pic2.jpeg" 
            alt="" 
            className="gallery__image" />
          </figure>

          <figure className="gallery__thumb">
            <img
              src="/videos/pic3.jpeg"
              alt="Portrait by Alex Perez"
              className="gallery__image"
            />
          </figure>
        </div>

        <div className="gallery__column">
          <figure className="gallery__thumb">
            <img
              src="/videos/pic4.jpeg"
              alt="Portrait by Noah Buscher"
              className="gallery__image"
            />
          </figure>

          <figure className="gallery__thumb">
            <img
              src="/videos/pic5.jpeg"
              alt="Portrait by Ivana Cajina"
              className="gallery__image"
            />
          </figure>

          <figure className="gallery__thumb">
            <img
              src="/videos/pic6.jpeg"
              alt="Portrait by Sam Burriss"
              className="gallery__image"
            />
          </figure>
        </div>

        <div className="gallery__column">
          <figure className="gallery__thumb">
            <img
              src="/videos/pic6.jpeg"
              alt="Portrait by Mari Lezhava"
              className="gallery__image"
            />
          </figure>

          <figure className="gallery__thumb">
            <img
              src="/videos/pic7.jpeg"
              alt="Portrait by Ethan Haddox"
              className="gallery__image"
            />
          </figure>

          <figure className="gallery__thumb">
            <img
              src="/videos/pic8.jpeg"
              alt="Portrait by Amir Geshani"
              className="gallery__image"
            />
          </figure>
        </div>

        <div className="gallery__column">
          <figure className="gallery__thumb">
            <img
              src="/videos/pic9.jpeg"
              alt="Portrait by Guilian Fremaux"
              className="gallery__image"
            />
          </figure>

          <figure className="gallery__thumb">
            <img
              src="/videos/pic11.jpeg"
              alt="Portrait by Jasmin Chew"
              className="gallery__image"
            />
          </figure>

          <figure className="gallery__thumb">
            <img
              src="/videos/pic10.jpeg"
              alt="Portrait by Dima DallAcqua"
              className="gallery__image"
            />
          </figure>
        </div>
      </div>
    </>
  );
};

export default Arcade;
