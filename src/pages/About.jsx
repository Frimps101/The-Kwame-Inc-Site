import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import "./About.css";
import PageHero from "../components/PageHero";
// import '../components/Footer';
// import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa6";

const About = () => {
  return (
    <div>
      <Nav />
      <PageHero
        title="About Us"
        content="We work tirelessly to provide you with the highest level of service, empowered by complete transparency and user involvement."
      />

      <div className="about_content">
        <p>
          Why is framing something we love such a hassle? If framing was simple
          and affordable, what would you frame? The founder of Kwame Inc.
          recognized the difficulty consumers faced when having their images
          framed in 2018 and the necessity to develop a cutting-edge solution.
          <br />
          <br />
          We had a distinct advantage because we knew the market and worked with
          seasoned providers who could give us insider knowledge on what the
          market was lacking. We provide a highly personalized service and
          product. Our frame service is quick and extremely fairly priced. Every
          customer experience is special to us.
          <br />
          <br />
          Our goal is to make telling your story simple by framing the things
          you enjoy. Come frame with us!
        </p>
      </div>

      <section className="owner">
        <div className="overflow-hidden py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div className="lg:pr-8 lg:pt-4">
                <div className="lg:max-w-lg">
                  <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Founder & CEO
                  </p>
                  <p className="mt-6 text-lg leading-8 text-gray-600">
                    An extremly hardworking human, with a passion for the
                    details and ensures that each frame is perfect and is
                    exactly what clients ask for.Maxwell Konadu Kwakye is the
                    founder and CEO of the Kwame Inc. He works hard to create
                    and produce work that customers will be proud of. He also
                    has an extremely supporting sister who he is proud of
                    😂😂😂😂.
                  </p>
                </div>
              </div>
              <img
                src="/images/Nana.jpg"
                alt="Product screenshot"
                className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
                width={2432}
                height={1442}
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
