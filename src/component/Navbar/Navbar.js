import React from "react";
import './Navbar.css'

const Navbar = () => {
  return (
    <>
      <div className="navbar-box">
        <div className="navbar-links">
          <a href="home"className="navbar-links-tags">Home</a>
          <a href="home"className="navbar-links-tags">About Us</a>
          <a href="home"className="navbar-links-tags">Pricing</a>
          <a href="home"className="navbar-links-tags">Contact Us</a>
        </div>
        <div className="navbar-button">
          <button className="button-sign">Login</button>
          <button className="button-sign">Sign Up</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
