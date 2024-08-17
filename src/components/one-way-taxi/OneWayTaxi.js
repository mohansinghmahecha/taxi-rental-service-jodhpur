import React from "react";
import LazyLoad from "react-lazyload";
import { Link } from "react-router-dom";
import Reviews from "../small-containers/Reviews";
import SmallAboutUs from "../small-containers/SmallAboutUs";
import jodhpur from "../../assets/locations/jodhpur.jpg";
import delhi from "../../assets/locations/delhi.jpg";
import JaipurCity from "../../assets/locations/jaipur-city.jpg";
import jaisalmer from "../../assets/locations/jaisalmer.jpg";
import pushkar from "../../assets/locations/pushkar.jpg";
import mainBackground from "../../assets/locations/jaipur-city.jpg";

export default function OneWayTaxi() {
  const locationdataforVisit = [
    {
      description: "Jodhpur",
      image: jodhpur,
      navigate: "/car-rent-jodhpur",
    },
    {
      description: "Jaipur",
      image: JaipurCity,
      navigate: "/taxi-services/jaipur",
    },
    {
      description: "Jaisalmer",
      image: jaisalmer,
      navigate: "/car-rent-jaisalmer",
    },
    {
      description: "Pushkar",
      image: pushkar,
      navigate: "/car-rent-pushkar",
    },
    {
      description: "Delhi",
      image: delhi,
      navigate: "/car-rent-delhi",
    },
  ];

  return (
    <div>
      <LazyLoad height={600} offset={100}>
        <div
          className="text-center"
          style={{
            backgroundImage: `url(${mainBackground})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "100vh",
          }}
        >
          <p
            style={{
              position: "relative",
              backgroundColor: "transparent",
              color: "black",
              fontWeight: "bold",
              fontSize: "3rem",
              textAlign: "center",
            }}
          >
            CHOOSE US 😍
          </p>
          <p>Let's Book Our Service</p>
          <div className="">
            <div className="flex gap-10 flex-wrap justify-center p-4">
              {locationdataforVisit.map((location, index) => (
                <Link to={location.navigate} key={index}>
                  <div
                    className="w-[333px] h-[380px] rounded-lg p-4 border bg-white "
                    onClick={() => {
                      window.scroll({ top: "0", behavior: "smooth" });
                    }}
                  >
                    <div className="w-full h-[300px] overflow-hidden">
                      <img
                        className="hover:cursor-pointer hover:-translate-y-6"
                        src={location.image}
                        loading="lazy"
                        alt=""
                        style={{
                          objectFit: "fill",
                          width: "100%",
                          height: "100%",
                          objectPosition: "center",
                        }}
                      />
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-full ">
                        <p className="w-full text-start ml-2 bg-white text-orange-400 font-bold text-lg tracking-widest">
                          {location.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </LazyLoad>
      <Reviews />
      <SmallAboutUs />
    </div>
  );
}
