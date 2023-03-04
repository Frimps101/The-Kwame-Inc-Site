import React from 'react'
import './PageHero.css';
// import '../components/Footer';

const About = ({title, content}) => {
  return (
    <div>
          <div className="about_hero_title">
            <div className='about_title'>
              <h2>{title}</h2>
              <p className='about_txt'>{content}</p>
            </div>
          </div>

    </div>
  )
}

export default About