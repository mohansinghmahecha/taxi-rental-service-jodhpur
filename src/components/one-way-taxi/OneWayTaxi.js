import React from "react";
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
      discrption: "Jodhpur",
      imgage: jodhpur,
    },

    {
      discrption: "Jaipur .",
      imgage: JaipurCity,
    },

    {
      discrption: "Jaisalmer.",
      imgage: jaisalmer,
    },
    {
      discrption: "pushkar",
      imgage: pushkar,
    },

    {
      discrption: "India.",
      imgage: delhi,
    },
  ];
  return (
    <div>
      <div
        className="text-center"
        style={{
          backgroundImage: `url(${mainBackground})`,
          backgroundSize: "cover", // Adjust as needed
          backgroundPosition: "center", // Adjust as needed
          minHeight: "100vh", // Adjust height as needed
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
        {/* cards */}
        <div className="">
          <div className="flex gap-10 flex-wrap justify-center p-4">
            {locationdataforVisit.map((location, index) => {
              return (
                <div
                  key={index}
                  className="w-[333px] h-[380px]  rounded-lg p-4  border bg-white"
                >
                  <div className="w-full h-[300px] overflow-hidden">
                    <img
                      className="hover:cursor-pointer hover:-translate-y-6"
                      src={location.imgage}
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
                      <p className="w-full text-start ml-2 bg-white text-orange-400 font-bold text-lg tracking-widest ">
                        {location.discrption}
                      </p>
                    </div>
                    <div>
                    
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* card end */}
      </div>
      <Reviews />
      <SmallAboutUs />
    </div>
  );
}
