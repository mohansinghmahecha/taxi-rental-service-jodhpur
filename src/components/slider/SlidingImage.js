import React from "react";
import { Slide } from "react-slideshow-image";
import img1 from "../../assets/slide-image/slide1.webp";
import img2 from "../../assets/slide-image/rajasthan-wallpaper.webp";
import img3 from "../../assets/slide-image/mehrangadh-right.webp";
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
  const slideImages = [
    {
      url: img3,
      caption: "Welcome to cars tours jodhpur",
      disc: "We are trusted and best car rental company in Rajasthan.",
    },
    {
      url: img1,
      caption: "Car Rental In Jodhpur",
      disc: "Need a ride in Jodhpur? Look no further! Our car rental service provides a range of vehicles to suit your needs.",
    },
    {
      url: img2,
      caption: "Your Journey, Our Cars",
      disc: "Explore the Blue City in style with our car rental services.",
    },
  ];

  return (
    <div className="slide-container">
      <Slide prevArrow={<PrevArrow />} nextArrow={<NextArrow />} duration={2000}>
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "600px",
                backgroundImage: `url(${slideImage.url})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Placeholder for stable layout */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(0, 0, 0, 0.5)", // Dark overlay for text visibility
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "white",
                  textAlign: "center",
                  padding: "0 20px",
                }}
              >
                <div>
                  <p style={{ fontSize: "2rem", fontWeight: "bold", margin: 0 }}>
                    {slideImage.caption}
                  </p>
                  <p style={{ fontSize: "1.2rem" }}>{slideImage.disc}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
}
