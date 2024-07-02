import React from "react";
import { Slide } from "react-slideshow-image";
import img1 from "../../assets/Feature-City-Palace-Udaipur-Rajasthan.jpg";
import img2 from "../../assets/home-slider.jpg";
import "react-slideshow-image/dist/styles.css";
import "../navbar/MainNevbar.css";

import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";

const PrevArrow = ({ onClick }) => {
  return <FaAngleLeft onClick={onClick} className="icon" />;
};

const NextArrow = ({ onClick }) => {
  return (
    <FaAngleRight
      onClick={onClick}
      className="icon2"
    />
  );
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
      url: "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
      caption: "Welcome to JCR Cab & Car Rental Rajasthan",
      disc: "JCR Cab & Car Rental is a trusted and best car rental company in Rajasthan. We have most modern Luxury Cars, Coaches and Small Cars in our fleet.",
    },
    {
      url: img1,
      caption: "Car Rental",
      disc: "JCR Cab & Car Rental is a trusted and best car rental company in Rajasthan. We have most modern Luxury Cars, Coaches and Small Cars in our fleet.",
    },
    {
      url: img2,
      caption: "Mohan",
      disc: "JCR Cab & Car Rental is a trusted and best car rental company in Rajasthan. We have most modern Luxury Cars, Coaches and Small Cars in our fleet.",
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
                }}
              >
                <p style={{ ...spanStyle, color: "white" }}>
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
