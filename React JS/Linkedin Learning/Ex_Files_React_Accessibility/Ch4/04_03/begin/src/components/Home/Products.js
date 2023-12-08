import React from "react"
import "styles/products.css"
import delicate from "assets/images/products/delicate-bottle.png"

const Products = () => {
  return (
    <section>
        <h2>Premium Quality Olive Oils</h2>

        <div className="products">
          <ul>
            <li>DELICATE</li>
            <li>MEDIUM</li>
            <li>BOLD</li>
            <li>BASIL</li>
            <li>LEMON</li>
            <li>GARLIC</li>
            <li>ROSEMARY</li>
            <li>CHILI</li>
          </ul>

          <img src={delicate}/>

          <div className="products__description">
            <p>DELICATE</p>
            <p>When you need an olive oil that’s smooth and buttery, with zero bitterness, and an ever-so-light peppery flavor. An excellent substitute for butter, and ideal for baking and seafood.</p>
            <p>500 ml bottle</p>
            <p>$24.50</p>
            <button className="products_section_1__button">Buy Now</button>
          </div>
        
        </div>
      </section>
  )
}

export default Products