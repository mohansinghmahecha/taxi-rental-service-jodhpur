import React from "react";
import { useParams } from "react-router-dom";
import img1 from "../../assets/bdr.png"; // Assuming a generic default image
import "./CardsDetail.css";

export default function DetailedInfo() {
  const { LocationName } = useParams();

  const detailedData = {
    jaipur: {
      description: (
        <>
          <p>
            Jaipur is known as the <strong>Pink City</strong> due to its
            distinct color.
          </p>
        </>
      ),
      image: img1,
    },
    jodhpur: {
      description: (
        <>
          <p>
            Jodhpur is famous for its <strong>blue houses</strong> and vibrant
            culture.
          </p>
          <ul>
            <li>Mehrangarh Fort</li>
            <li>Umaid Bhawan Palace</li>
            <li>Clock Tower</li>
          </ul>
        </>
      ),
      image: img1,
    },
    Balotra: {
      description: (
        <>
          <p>
            Balotra is known for its <strong>textile industry</strong>. For more
            information, visit the
            <a
              href="https://example.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              official site
            </a>
            .
          </p>
        </>
      ),
      image: img1,
    },
    Barmer: {
      description: (
        <>
          <p>
            Barmer is renowned for its <strong>folk music</strong> and vibrant
            festivals.
          </p>
          <ul>
            <li>Desert Festival</li>
            <li>Barmer Fort</li>
          </ul>
        </>
      ),
      image: img1,
    },
    Ajmer: {
      description: (
        <>
          <p>
            Ajmer is famous for the <strong>Ajmer Sharif Dargah</strong>.
          </p>
        </>
      ),
      image: img1,
    },
    Pali: {
      description: (
        <>
          <p>
            Pali is known for its <strong>historical temples</strong> and scenic
            beauty.
          </p>
        </>
      ),
      image: img1,
    },
    Osian: {
      description: (
        <>
          <p>
            Osian is known for its <strong>ancient Jain temples</strong>.
          </p>
          <ul>
            <li>Osian Temples</li>
            <li>Sand Dunes</li>
          </ul>
          <p>
            Learn more about Osian
            <a
              href="https://example.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>
          </p>
        </>
      ),
      image: img1,
    },
  };

  return (
    <>
      <h1 className="text-center text-4xl mt-10 text-orange-500 font-bold">
        Welcome in {LocationName}
      </h1>
      <div className="  w-full dynamic-conainer sm:grid sm:grid-cols-1">
        <div>
          {console.log("1", detailedData.LocationName)}
          <p>{detailedData[LocationName].description}</p>
          {console.log("2", detailedData[LocationName].image)}
        </div>
        <div className="image-container">
          <img
            src={detailedData[LocationName].image}
            alt={detailedData[LocationName].image}
          />
        </div>
      </div>
    </>
  );
}
