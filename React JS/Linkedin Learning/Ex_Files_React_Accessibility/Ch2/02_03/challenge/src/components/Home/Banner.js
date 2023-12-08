import React from 'react'
import "styles/home-banner.css"
import Navigation from "components/Navigation"

const Banner = () => {
  return (
    <section className="banner">
        <Navigation />

      <div className="banner__intro">
        <h1>Sustainably Grown, Highest Quality</h1>
        <button>Shop Now</button>
      </div>
    </section>
  )
}

export default Banner