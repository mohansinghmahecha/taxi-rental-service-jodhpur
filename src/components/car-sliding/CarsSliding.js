import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./CarSliding.css";
import innova_crysta from "../../assets/cars-details/new-image.webp";
import swiftDezire from "../../assets/cars-details/SWIFT-DZIRE.webp";
import tempo1 from "../../assets/cars-details/new-tampo.webp";
import etios from "../../assets/cars-details/toyoto-etios.webp";
import innova from "../../assets/cars-details/TOYOTA-INNOVA.webp";
import ub from "../../assets/cars-details/Urbania-LWB.webp";
import kiaCarans from "../../assets/cars-details/new-kia-carans.webp";
import tourM from "../../assets/cars-details/tour-m.webp";

export default function CarsSliding() {
  const [autoPlay, setAutoPlay] = useState(true);

  const carData = [
    {
      id: 1,
      img: innova_crysta,
      Name: "INNOVA CRYSTA",
      Occupancy: "6/7",
      InsideCity: "8h/80km,3000rs-12h/100km,3500rs",
      Outsidestation: "17rs/km || 300km daily",
      Drivernightcharge: "300rs",
    },
    {
      id: 2,
      img: innova,
      Name: "TOYOTA INNOVA",
      Occupancy: "6/7",
      InsideCity: "8h/80km,3000rs-12h/100km,3500rs",
      Outsidestation: "17rs/km || 300km daily",
      Drivernightcharge: "300rs",
    },
    {
      id: 3,
      img: etios,
      Name: "TOYOTA ETIOS",
      Occupancy: "4",
      InsideCity: "8h/80km, 2000rs-12h/100km,2400rs",
      Outsidestation: "11rs/km || 300km daily",
      Drivernightcharge: "300rs",
    },
    {
      id: 4,
      img: swiftDezire,
      Name: "SWIFT DZIRE",
      Occupancy: "4",
      InsideCity: "8h/80km, 2000rs-12h/100km,2400rs",
      Outsidestation: "11rs/km || 300km daily",
      Drivernightcharge: "300rs",
    },
    {
      id: 5,
      img: tempo1,
      Name: "TEMPO TRAVELLER",
      Occupancy: "12",
      InsideCity: "8h/80km,4500rs-12h/100km,5500rs",
      Outsidestation: "26rs per km || 300km daily",
      Drivernightcharge: "300rs",
    },
    {
      id: 6,
      img: ub,
      Name: "TEMPO TRAVELLER",
      Occupancy: "17",
      InsideCity: "8h/80km,6000rs-12h/100km,8000rs",
      Outsidestation: "35rs per km || 300km daily",
      Drivernightcharge: "300rs",
    },
    {
      id: 7,
      img: kiaCarans,
      Name: "Kia Carens",
      Occupancy: "6",
      InsideCity: "8h/80km,2500rs-12h/100km,3000rs",
      Outsidestation: "14rs per km || 300km daily",
      Drivernightcharge: "300rs",
    },
    {
      id: 8,
      img: tourM,
      Name: "Maruti Ertiga",
      Occupancy: "6",
      InsideCity: "8h/80km,2500rs-12h/100km,3000rs",
      Outsidestation: "27rs per km || 300km daily",
      Drivernightcharge: "300rs",
    },
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1200 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1200, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
    },
  };

  const handleItemClick = () => {
    setAutoPlay(false);
  };

  return (
    <div className="main">
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={autoPlay}
        autoPlaySpeed={2000}
        additionalTransfrom={-10} // Adds extra space when sliding
        arrows={true} // Adds arrows for manual control
        showDots={true} // Shows dots for each slide
      >
        {carData.map((item, index) => (
          <div
            key={index}
            style={{ padding: "40px" }}
            className="slide-item"
            onClick={handleItemClick}
          >
            <img src={item.img} alt={item.Name} className="car-image" />
            <div className="car-info forbold">
              <p className="car-name text-orange-400">{item.Name}</p>
              <p className="">
                Occupancy: <span>{item.Occupancy}</span>
              </p>
              <p>
                Inside City: <span>{item.InsideCity}</span>{" "}
              </p>
              <p>
                Outside Station: <span>{item.Outsidestation}</span>{" "}
              </p>
              <p>
                Driver Night Charge: <span>{item.Drivernightcharge}</span>{" "}
              </p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
