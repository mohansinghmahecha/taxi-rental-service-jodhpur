import React, { useEffect, useRef, useState } from "react";
import img1 from "../../asserts/junagarh-fort-bikaner-rajasthan-1024x733-1.jpg";
import img2 from "../../asserts/premium_photo-1661962428918-6a57ab674e23.jpg";
import "./ImageSlider.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

export default function CustomSlider() {
  const [sliderData, setSliderData] = useState([
    {
      img: img1,
      heading: "Welcome to JCR Cab & Car Rental Rajasthan",
      desc: "This is Main",
    },
    {
      img: img2,
      heading: "Heading Second",
      desc: "Second Description",
    },
    {
      img: img1,
      heading: "Three",
      desc: "Three Description",
    },
  ]);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const sliderRef = useRef(null);

  const handleNextClick = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % sliderData.length);
  };

  const handlePrevClick = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? sliderData.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    // ... existing scroll event listener logic, if needed ...
  }, []);

  return (
    <div className="full-width-slider">
      <div className="slider-container">
        <div>
          <FaAngleLeft
            className="absolute left-0 top-80 z-10 w-[100px] h-[100px]"
            onClick={handlePrevClick}
          />
        </div>

        <div>
          <FaAngleRight
            className="absolute right-0 top-80 z-10 w-[100px] h-[100px]"
            onClick={handleNextClick}
          />
        </div>

        {sliderData.map((item, index) => (
          <div
            key={index}
            className={`slide ${index === activeIndex ? "active" : ""}`}
          >
            <img src={item.img} alt="Full Width Image" />
            <div className="content-wrapper">
              <p className="heading text-6xl font-medium text-white">
                {item.heading}
              </p>
              <p className="desc text-2xl font-normal text-white">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
