import React from "react";
import { Slide } from "react-slideshow-image";
import img1 from "../../assets/slide1.jpg";
import img2 from "../../assets/rajasthan-wallpaper.jpg";
import img3 from "../../assets/mehrangadh-right.jpg";
import "react-slideshow-image/dist/styles.css";
import "../navbar/MainNevbar.css";

import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";

const PrevArrow = ({ onClick }) => {
  return <FaAngleLeft onClick={onClick} className="icon" />;
};

const NextArrow = ({ onClick }) => {
  return <FaAngleRight onClick={onClick} className="icon2" />;
};

export default function SlidingImage() {
  const spanStyle = {
    padding: "30px",
    color: "#000000",
    fontSize: "60px",
  };

  const divStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundSize: "cover",
    height: "600px",
  };

  const slideImages = [
    {
      url: img3,
      caption: "Welcome to cars tours jodhpur",
      disc: "we are trusted and best car rental company in Rajasthan.",
    },
    {
      url: img1,
      caption: "Car Rental In Jodhpur",
      disc: "Need a ride in Jodhpur? Look no further! Our car rental service provides a range of vehicles to suit your needs",
    },
    {
      url: img2,
      caption: "Your Journey, Our Cars",
      disc: "Explore the Blue City in style with our car rental services",
    },
  ];

  return (
    <div className="slide-container">
      <Slide
        prevArrow={<PrevArrow />}
        nextArrow={<NextArrow />}
        duration={2000}
      >
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <div
              style={{ ...divStyle, backgroundImage: `url(${slideImage.url})` }}
            >
              <div
                style={{
                  display: "block",
                  textAlign: "center",
                  color: "white",
                  fontSize:"larger"
                }}
              >
                <p style={{ ...spanStyle, color: "white",fontWeight:"bold" }}>
                  {slideImage.caption}
                </p>
                <p>{slideImage.disc}</p>
              </div>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
}
