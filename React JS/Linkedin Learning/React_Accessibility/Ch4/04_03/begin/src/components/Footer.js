import React from "react";
import "styles/footer.css";
import logo from "assets/images/logo-wordmark-white.svg";

const Footer = () => {
  return (
    <footer>
      <div className="footer__container">
        <img src={logo} className="footer__logo"/>

        <form className="footer__form">
          <label>WANT RECIPES? GET OUR NEWSLETTER!</label>
          <input type="text" placeholder="Enter your email"/>
          <button>SIGN UP</button>
        </form>

        <p>
          This is a fictitious company created by LinkedIn Corporation, or its
          affiliates, solely for the creation and development of educational
          training materials. Any resemblance to real products or services is
          purely coincidental. Information provided about the products or
          services is also fictitious and should not be construed as
          representative of actual products or services on the market in a
          similar product or service category.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
