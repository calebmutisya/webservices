import React from "react";
import Slider from "react-slick";
import '../main.css'
import { banners } from "../constants/constants";
// Slick Carousel styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { BiWorld } from "react-icons/bi";

const SlickCarousel = () => {
  const settings = {
    infinite: true,
    autoplay: true,
    variableWidth: true,
    centerMode: true,
    arrows: false,
    slidesToShow: 1,
    autoplaySpeed: 1400,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          variableWidth: false,
        },
      },
    ],
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {banners.map((banner, index) => (
          <div className="banner-slide" key={index}>
            <div className="banner">
              <img src={banner.image} alt={`Banner ${index + 1}`} />
              <a
                href={banner.url}
                className="linklabel"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BiWorld className="icon" /> Visit Site
              </a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SlickCarousel;
