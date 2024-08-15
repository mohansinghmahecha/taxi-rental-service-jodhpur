import "./LocationOffer.css";
import jodhpur from "../assets/locations/jodhpur.jpg";
import delhi from "../assets/locations/delhi.jpg";
import JaipurCity from "../assets/locations/jaipur-city.jpg";
import jaisalmer from "../assets/locations/jaisalmer.jpg";
import pushkar from "../assets/locations/pushkar.jpg";
import udaipur from "../assets/locations/udaipur.jpg";

export default function LocationOfffer() {
  const locationData = [
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
    <div className="location-offer block p-4 rounded-md">
      <div className="flex justify-between ">
        <div className="p-12 m-4 text-2xl">
          <p>Popular Destinations </p>
          <p>Explore some popular destinations in Rajasthan.</p>
        </div>
      </div>

      <div className="">
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
                    <button className="text-black  mr-4 bg-orange-300 p-1 rounded-lg ">
                      Explore Now
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
