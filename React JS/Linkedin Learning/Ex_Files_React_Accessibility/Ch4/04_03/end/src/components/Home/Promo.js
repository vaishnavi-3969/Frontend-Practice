import React from "react"
import "styles/promo.css"

const Promo = () => {
  return (
    <section className="promo">
      <div className="promo__container">
        <p className="promo__intro">10% Off All Olive Oils</p>
        <p>Use Code:
          <span>10DISCOUNT</span>
        </p>
        <button className="promo__button">Visit Shop</button>
        </div>
    </section>
  )
}

export default Promo