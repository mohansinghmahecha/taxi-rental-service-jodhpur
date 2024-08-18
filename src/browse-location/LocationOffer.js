import "./LocationOffer.css";
import jodhpur from "../assets/locations/jodhpur.jpg";
import delhi from "../assets/locations/delhi.jpg";
import JaipurCity from "../assets/locations/jaipur-city.jpg";
import jaisalmer from "../assets/locations/jaisalmer.jpg";
import pushkar from "../assets/locations/pushkar.jpg";
import fallbackImage from "../assets/locations/fallback.webp";
import { Link } from "react-router-dom";
import { useEffect, useCallback, useMemo } from "react";

// Memoize the images to avoid re-creating them on every render
const usePreloadedImages = () => {
  return useMemo(() => [jodhpur, delhi, JaipurCity, jaisalmer, pushkar], []);
};

export default function LocationOffer() {
  const preloadedImages = usePreloadedImages();

  const preloadImages = useCallback(() => {
    preloadedImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [preloadedImages]);

  useEffect(() => {
    preloadImages();
  }, [preloadImages]);

  const handleImageError = (event) => {
    event.target.src = fallbackImage;
  };

  const locationData = [
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
    <div className="location-offer block p-4 rounded-md">
      <div className="flex justify-between">
        <div className="p-12 m-4 text-2xl">
          <p>Popular Destinations</p>
          <p>Explore some popular destinations in Rajasthan.</p>
        </div>
      </div>

      <div>
        <div className="flex gap-10 flex-wrap justify-center">
          {locationData.map((location, index) => (
            <div
              key={index}
              className="w-[333px] h-[380px] rounded-lg p-4 border bg-white"
            >
              <div className="w-full h-[300px] overflow-hidden">
                <img
                  className="hover:cursor-pointer hover:-translate-y-6"
                  src={location.image}
                  alt={location.description}
                  loading="lazy"
                  onError={handleImageError}
                  style={{
                    objectFit: "fill",
                    width: "100%",
                    height: "100%",
                    objectPosition: "center",
                  }}
                />
              </div>

              <div className="flex flex-col items-center">
                <div className="w-full">
                  <p className="w-full text-start ml-2 bg-white text-orange-400 font-bold text-lg tracking-widest">
                    {location.description}
                  </p>
                </div>
                <div>
                  {location.navigate ? (
                    <Link to={location.navigate}>
                      <button className="text-black mr-4 bg-orange-300 p-1 rounded-lg">
                        Explore Now
                      </button>
                    </Link>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
