import React, { useEffect, useState } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css"; // Ensure your CSS file path is correct
import "./Partner.css";
import oyo from "../../assets/oyo.png";

export default function Partners() {
  const partnersData = [
    {
      img: "https://xpd0c6.p3cdn1.secureserver.net/wp-content/uploads/2020/08/1364908823-8234-e1597567153389.jpg?time=1721209120",
    },
    {
      img: "https://xpd0c6.p3cdn1.secureserver.net/wp-content/uploads/2020/08/treebo_logo_og_image_3-300x110.png",
    },
    {
      img: "https://xpd0c6.p3cdn1.secureserver.net/wp-content/uploads/2020/08/rentalcars-com-vector-art-png-clip-art-300x96.png",
    },
    {
      img: oyo,
    },
    {
      img: "https://xpd0c6.p3cdn1.secureserver.net/wp-content/uploads/2020/08/Hindustan-Times-Logo-PNG-03118-300x133.png",
    },
    {
      img: "https://xpd0c6.p3cdn1.secureserver.net/wp-content/uploads/2020/08/AHA-Taxis-300x70.png",
    },
    {
      img: "https://xpd0c6.p3cdn1.secureserver.net/wp-content/uploads/2020/08/Make-My-Trip-Logo-PNG-Photo-300x126.png",
    },
    {
      img: "https://xpd0c6.p3cdn1.secureserver.net/wp-content/uploads/2020/08/Make-My-Trip-Logo-PNG-Photo-300x126.png",
    },
    {
      img: "https://xpd0c6.p3cdn1.secureserver.net/wp-content/uploads/2020/08/Make-My-Trip-Logo-PNG-Photo-300x126.png",
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
                />
              ))}
            </div>
          ))}
        </Slide>
      </div>
    </div>
  );
}
