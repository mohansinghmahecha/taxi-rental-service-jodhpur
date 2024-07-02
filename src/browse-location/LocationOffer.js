import { Slide } from "react-slideshow-image";
import "./LocationOffer.css";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa";

export default function LocationOfffer() {
  
  const locationData = [
    {
      discrption: "Jodhpur",
      imgage: "https://picsum.photos/seed/picsum/200/300",
    },

    {
      discrption: "Jaipur .",
      imgage:
        "https://fastly.picsum.photos/id/1069/200/200.jpg?hmac=kdrhLJLz2Y5ldVFXX84RRoiGMO3j6z6AHWfWK7sxgI8",
    },

    {
      discrption: "Two.",
      imgage:
        "https://fastly.picsum.photos/id/1069/200/200.jpg?hmac=kdrhLJLz2Y5ldVFXX84RRoiGMO3j6z6AHWfWK7sxgI8",
    },
    {
      discrption: "Kota",
      imgage:
        "https://fastly.picsum.photos/id/1069/200/200.jpg?hmac=kdrhLJLz2Y5ldVFXX84RRoiGMO3j6z6AHWfWK7sxgI8",
    },

    {
      discrption: "Royal City .",
      imgage:
        "https://fastly.picsum.photos/id/1069/200/200.jpg?hmac=kdrhLJLz2Y5ldVFXX84RRoiGMO3j6z6AHWfWK7sxgI8",
    },

    {
      discrption: "Two.",
      imgage:
        "https://fastly.picsum.photos/id/1069/200/200.jpg?hmac=kdrhLJLz2Y5ldVFXX84RRoiGMO3j6z6AHWfWK7sxgI8",
    },

    {
      discrption: "India.",
      imgage:
        "https://fastly.picsum.photos/id/1069/200/200.jpg?hmac=kdrhLJLz2Y5ldVFXX84RRoiGMO3j6z6AHWfWK7sxgI8",
    },
    {
      discrption: "Two.",
      imgage:
        "https://fastly.picsum.photos/id/1069/200/200.jpg?hmac=kdrhLJLz2Y5ldVFXX84RRoiGMO3j6z6AHWfWK7sxgI8",
    },
  ];
  return (
    <div className="location-offer block p-4">
      <div className="flex justify-between ">
        <div className="p-2 m-4 text-2xl">
          <p>Popular Destinations </p>
          <p>Explore some popular destinations in Rajasthan.</p>
        </div>

        <div className="flex p-4 gap-4 ">
          <FaAngleLeft className="border border-orange-300 rounded-full p-0" />

          <FaAngleRight className="border border-orange-300 rounded-full p-0 text-white" />
        </div>
      </div>

      <div className="">
        <Slide autoplay={false} arrows={false}>
          <div className="flex gap-10 flex-wrap justify-center">
            {locationData.map((location, index) => {
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
                        objectFit: "cover",
                        width: "100%",
                        height: "auto",
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
                      <button className="text-black  mr-4 bg-orange-300 p-1 rounded-lg ">
                        Explore Now
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Slide>
      </div>
    </div>
  );
}
