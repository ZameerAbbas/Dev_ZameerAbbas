import React, { useState } from 'react';
import "./Navbar.css";
import { Link } from 'react-scroll';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link href="/" style={{cursor:"pointer"}}>Portfolio</Link>
      </div>
      <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <Link to="/" smooth={100} className='activelink' style={{cursor:"pointer"}}>Home</Link>
        <Link to="about" smooth={100} style={{cursor:"pointer"}}>About</Link>
        <Link to="services" smooth={100} style={{cursor:"pointer"}}>Services</Link>
        <Link to="portfolio" smooth={100} style={{cursor:"pointer"}}>Portfolio</Link>
        <Link to="contact" smooth={100} style={{cursor:"pointer"}}>Contact</Link>
      </div>
      <div className={`navbar-toggle ${isOpen ? 'open' : ''}`} onClick={toggleNavbar}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar