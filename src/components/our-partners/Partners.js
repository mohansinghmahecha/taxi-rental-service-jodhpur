import React, { useEffect, useState } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css"; // Ensure your CSS file path is correct
import "./Partner.css";
import oyo from "../../assets/partners/oyo.png";
import aha from "../../assets/partners/AHA-Taxis.png";
import hindusthantimes from "../../assets/partners/Hindustan-Times-Logo.png";
import justdial from "../../assets/partners/justdial.jpg";
import makemytrip from "../../assets/partners/Make-My-Trip-Logo.png";
import rentcars from "../../assets/partners/rentalcars-com-.png";
import rome from "../../assets/partners/rome.png";
import treeboLogo from "../../assets/partners/treebo_logo.png";
import tripadvisor from "../../assets/partners/tripadvisor.png";

export default function Partners() {
  const partnersData = [
    {
      img: aha,
    },
    {
      img: hindusthantimes,
    },
    {
      img: justdial,
    },
    {
      img: oyo,
    },
    {
      img: makemytrip,
    },
    {
      img: rentcars,
    },
    {
      img: rome,
    },
    {
      img: treeboLogo,
    },
    {
      img: tripadvisor,
    },
  ];

  const chunkArray = (array, chunkSize) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
  };

  const [chunkSize, setChunkSize] = useState(getChunkSize());

  useEffect(() => {
    const handleResize = () => {
      setChunkSize(getChunkSize());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function getChunkSize() {
    const width = window.innerWidth;
    if (width <= 767) {
      return 1; // mobile
    } else if (width <= 1024) {
      return 2; // tablet
    } else {
      return 3; // desktop
    }
  }

  const chunkedPartnersData = chunkArray(partnersData, chunkSize);

  return (
    <div className="p-20 bg-orange-500 mt-0">
      <h2 className="mt-2 text-3xl font-semibold text-center p-8">
        Our Partners
      </h2>
      <div className="box-con">
        <Slide autoplay={true} arrows={true} duration={5000}>
          {chunkedPartnersData.map((chunk, index) => (
            <div key={index} className="new-box">
              {chunk.map((item, i) => (
                <img
                  key={i}
                  src={item.img}
                  alt={`Partner ${i}`}
                  className="partner-logo"
                  loading="lazy"
                />
              ))}
            </div>
          ))}
        </Slide>
      </div>
    </div>
  );
}
