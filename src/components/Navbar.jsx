import React from 'react'
import "./Navbar.css"
import { Outlet, Link } from "react-router-dom";
import Logo from "../logo.png"
// import motion from "framer-motion";
import { motion } from "framer-motion"

const navVariants = {
  hidden: {
    y: -150, 
    opacity: 0
  },
  visible: {
    y: 0, 
    opacity: 1,
    transition: { delay: 0.2, type: 'spring'}
  }
}


const Navbar = () => {
  return (
    <header>
        <a href="#" className="logo">
            {/* <img src={Logo} alt="" /> */}
            <h2>the kwame inc</h2>
        </a>

        <motion.nav 
          className="navbar"
          variants={navVariants}
          initial="hidden"
          animate="visible"
        >
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/pricing">Pricing</Link>
            <Link to="/faqs">FAQs</Link> 
        </motion.nav>
        <Outlet />
    </header>
    
  )
}

export default Navbar;