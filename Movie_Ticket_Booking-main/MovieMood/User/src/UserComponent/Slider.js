import React from "react";
import Slider from "react-slick";
import "C:/Users/dhruv/Downloads/MovieMood-main/User/node_modules/slick-carousel/slick/slick.css";
import "C:/Users/dhruv/Downloads/MovieMood-main/User/node_modules/slick-carousel/slick/slick-theme.css";
import Woman from "../Assets/image/96647-PVR.avif";
import "../css/Slider.css";

const slider = () => {
  var settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 2,
    speed: 2000,
    dots: false,
    adaptiveHeight: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
  };
  return (
    <div className="div_slider">
      {/* <h2>Movie Masti </h2> */}
      <Slider {...settings}>
        {/* <div className="app_slider"> */}
        <img src={Woman} alt="wonder woman" className="slider__img" />
        {/* </div> */}
        {/* <div className="app_slider"> */}
        <img src={Woman} alt="wonder woman" className="slider__img"></img>
        {/* </div> */}
        {/* <div className="app_slider"> */}
        <img src={Woman} alt="wonder woman" className="slider__img"></img>
        {/* </div> */}
        {/* <div className="app_slider"> */}
        <img src={Woman} alt="wonder woman" className="slider__img"></img>
        {/* </div> */}
        {/* <div className="app_slider"> */}
        <img src={Woman} alt="wonder woman" className="slider__img"></img>
        {/* </div> */}
        {/* <div className="app_slider"> */}
        <img src={Woman} alt="wonder woman" className="slider__img"></img>
        {/* </div> */}
      </Slider>
    </div>
  );
};

export default slider;
