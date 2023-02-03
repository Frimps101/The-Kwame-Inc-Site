import React from 'react'
import "./Gallery.css"

const Gallery = () => {
  return (
    <section className='container'>
        <div className="header">
            <h2>Framed Photos You'll Always Remember</h2>
            <p>Always create memories with the ones you love</p>
        </div>
        <div className="gallery">
            <img src="/images/gallery1.jpeg" alt="Sample photo1" />
            <img src="/images/gallery2.jpeg" alt="Sample photo2"  />
            <img src="/images/gallery3.jpeg" alt="Sample photo3" />
            <img src="/images/gallery4.jpeg" alt="Sample photo4" />
            <img src="/images/gallery5.jpeg" alt="Sample photo5" />
            <img src="/images/gallery6.jpeg" alt="Sample photo6" />
            <img src="/images/gallery7.jpg" alt="Sample photo7" />
            <img src="/images/gallery8.jpg" alt="Sample photo8" />
            <img src="/images/gallery9.jpg" alt="Sample photo9" />
            <img src="/images/gallery10.jpg" alt="Sample photo10" />
        </div>
        <div className="text">
          <p>
            Choose any photo and a high-quality frame to complement it. Within days, we'll print your photo, construct the frame, and bring it to you ready to hang.
            We take exceptional care of each image entrusted to us, converting the digital file into a handcrafted, custom framed portrait that will survive for decades.
            </p>
        </div>
    </section>
  )
}

export default Gallery