import React from 'react'
import Videos from '../components/Videos'
import './Gallery.css';
import Arcade from '../components/Arcade';

const Gallery = () => {
  return (
    <section className='gal_container'>
      <Videos />
      <Arcade />
    </section>
  )
}

export default Gallery