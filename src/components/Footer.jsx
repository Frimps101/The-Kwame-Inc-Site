import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <div className="wrapper">
        <section className='footer'>
            <div className="footer_gallery">
                <h2>Gallery</h2>
                <div className="gallery_links">
                    <a href="#">Quick Gifts</a>
                    <a href="#">Gallery Walls</a>
                    <a href="#">Gift Cards</a>
                </div>
            </div>
            <div className="about">
                <h2>About</h2>
                <div className="about_links">
                    <a href="#">Company</a>
                    <a href="#">CEO</a>
                    <a href="#">Pricing</a>
                    <a href="#">Customer Reviews</a>
                </div>
            </div>

            <div className="media">
                <div className="statement">
                    <h2>Satisfaction Assurance</h2>
                    <p>
                    Let us know if you're not completely satisfied with your order for any reason, and we'll make it right.
                    </p>
                </div>
                <div className="help">
                    <h1>Need Help?</h1>
                    <p>
                        We can be reached via chat, email, or phone.
                    </p>
                </div>
                <div className="follow">
                    <h2>Follow us</h2>
                    <div className="social_icons">
                        <img src="/images/instagram.png" alt="instagram" />
                        <img src="/images/twitter.png" alt="twitter" />
                        <img src="/images/facebook.png" alt="facebook" />
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Footer