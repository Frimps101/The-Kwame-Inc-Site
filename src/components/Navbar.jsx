import React from "react";
import { useState } from "react";
import "./Navbar.css";
import { Outlet, Link } from "react-router-dom";
// import motion from "framer-motion";
import { motion } from "framer-motion";

const navVariants = {
  hidden: {
    y: -150,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: { delay: 0.2, type: "spring" },
  },
};

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header>
      <Link to="/" className="logo">
        <h2>the kwame inc</h2>
      </Link>

      <motion.nav
        className="navbar navigation"
        variants={navVariants}
        initial="hidden"
        animate="visible"
      >
        <ul className={`menu ${showMenu ? "show-menu" : ""}`}>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/faqs">FAQs</Link>
        </ul>

        <button
          className="toggle-menu"
          aria-label="Toggle Menu"
          onClick={() => setShowMenu(!showMenu)}
        >
          <span className="burger">
            <i class="fa-solid fa-bars"></i>
          </span>
        </button>
      </motion.nav>
      <Outlet />
    </header>
  );
};

export default Navbar;
