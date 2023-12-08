import React from "react"
import "styles/learn-more.css"

const LearnMore = () => {
  return (
    <section className="learn_more">
      <div className="learn_more__container">
        <div className="learn_more__articles">
          <article>
            <p>Tour Our Facility</p>
            <button>Learn More</button>
          </article>
          <article>
            <p>Let Us Host Your Event</p>
            <button>Learn More</button>
          </article>
        </div>
      </div>
    </section>
  );
};

export default LearnMore