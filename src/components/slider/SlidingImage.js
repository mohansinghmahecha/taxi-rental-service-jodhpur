import React from "react";
import { Slide } from "react-slideshow-image";
import img2 from "../../assets/slide-image/rajasthan-wallpaper.webp";
import img3 from "../../assets/slide-image/mehrangadh-right.webp";
import hemaMalini from "../../assets/vip-reviews/hema-malini-actor-vip-customer.jpg";
import mukeshRishi from "../../assets/vip-reviews/mukesh-rishi=vip-cutomer.jpg";

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
      dataforcolor: true,
    },
    {
      url: hemaMalini,
      caption: "Car Rental In Jodhpur",
      disc: "Need a ride in Jodhpur? ",
      dataforcolor: true,
    },
    {
      url: img2,
      caption: "Your Journey, Our Cars",
      disc: "Explore the Blue City in style with our car rental services.",
      dataforcolor: true,
    },
    {
      url: mukeshRishi,
      dataforcolor: false,
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
              className={`slide-laptop slide-mobile`}
              style={{
                position: "relative", // Ensure overlay is positioned correctly
                backgroundImage: `url(${slideImage.url})`,
              }}
            >
              {slideImage.dataforcolor && (
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0, 0, 0, 0.5)", // The overlay color
                    zIndex: 1, // Ensure the overlay is above the background image
                  }}
                ></div>
              )}
              {slideImage.caption && (
                <div
                  style={{
                    position: "relative", // Ensure text is above the overlay
                    zIndex: 2,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "white",
                    textAlign: "center",
                    padding: "0 20px",
                    height: "100%",
                  }}
                >
                  <div>
                    <p className="p-laptop p-mobile">{slideImage.caption}</p>
                    <p className="innerp">{slideImage.disc}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
}
