import React from "react"
import "styles/home.css"
import Banner from "./Banner"
import Footer from "components/Footer"
import Products from "./Products"
import Promo from "./Promo"
import LearnMore from "./LearnMore"

const Home = () => {
  return (
    <div id="home__container">
      <Banner />
      <Products />
      <Promo />
      <LearnMore />
      <Footer />
    </div>
  );
};

export default Home