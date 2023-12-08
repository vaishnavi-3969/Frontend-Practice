import React from "react";
import 'styles/navigation.css'
import logo from "assets/images/logo-wordmark-color.svg"

const Navigation = () => {
  return (
    <div className="nav__container">
      <a href="/">
        <img src={logo} alt="logo" className="logo" />
      </a>
      <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/tours-events">Tours & Events</a>
        <a href="/oil-lovers-club">Oil Lover's Club</a>
        <a href="/shop">Shop</a>
        <a href="/blog">Blog</a>
        <a href="/contact">Contact</a>
      </nav>
    </div>
  );
};

export default Navigation;