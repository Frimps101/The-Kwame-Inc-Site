import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import './About.css';
import PageHero from '../components/PageHero'
// import '../components/Footer';

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
            Why is framing something we love such a hassle? If framing was simple and affordable, what would you frame?
            The founder of Kwame Inc. recognized the difficulty consumers faced when having their images framed in 2018 and the necessity to develop a cutting-edge solution.
            <br />
            <br />
            We had a distinct advantage because we knew the market and worked with seasoned providers who could give us insider knowledge on what the market was lacking.
            We provide a highly personalized service and product. Our frame service is quick and extremely fairly priced. Every customer experience is special to us.
            <br />
            <br />
            Our goal is to make telling your story simple by framing the things you enjoy. Come frame with us!
          </p>
        </div>

        <section className="owner section">
          <img src="/images/Nana.jpg" alt="" />
          <div className="title">
            <h2>Founder & CEO</h2>
            <p>
            An extremly hardworking human, with a passion for the details and ensures that each frame is perfect and is exactly what clients ask for.
            <hr />
            Maxwell Konadu Kwakye is the founder and CEO of the Kwame Inc. He works hard to create and produce work that customers will be proud of.  He also has an extremely supporting sister who he is proud of 😂😂😂😂.
            </p>
            <div className="social_icons">
              <img src="/images/instagram.png" alt="instagram" />
              <img src="/images/twitter.png" alt="twitter" />
              <img src="/images/facebook.png" alt="facebook" />
            </div>
          </div>
        </section>

        <Footer/>
    </div>
  )
}

export default About