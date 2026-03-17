import React from "react";
import "./simple.css";

import img1 from "../../assets/simple/img1.avif";
import img2 from "../../assets/simple/img2.avif";
import img3 from "../../assets/simple/img3.avif";
import img4 from "../../assets/simple/img4.avif";
import img5 from "../../assets/simple/img5.avif";
import img6 from "../../assets/simple/img6.avif";

const Item = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6
];

const Carousel = () => {
  return (
    <div className="carousel-simple">

      {/* First loop */}
      <div className="group-simple">
        {Item.map((image, i) => (
          <div key={i} className="card-simple">
            <img src={image} alt={`carousel-${i}`} />
          </div>
        ))}
      </div>

      {/* Duplicate loop for infinite scroll */}
      <div aria-hidden className="group-simple">
        {Item.map((image, i) => (
          <div key={i} className="card-simple">
            <img src={image} alt={`carousel-${i}`} />
          </div>
        ))}
      </div>

    </div>
  );
};

export default Carousel;