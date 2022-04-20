import React from "react";
import { Link } from "react-router-dom";

function Carousel() {
  return (
    <>
      <div className="carousel">
        <div className="carouselContent">
          <h2>Book a Maid</h2>
          <p style={{ fontFamily: "Poppins, san-serif", fontWeight: "bold" }}>
            Here we provide monthly subscription for booking maids at reasonable
            prices.
          </p>
          <button className="mainButton">
            <Link
              to="/findMaids"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Find maids
            </Link>
          </button>
        </div>
      </div>
    </>
  );
}
export default Carousel;
