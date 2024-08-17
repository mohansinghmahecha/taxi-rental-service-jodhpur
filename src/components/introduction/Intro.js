import car2 from "../../assets/jeeps.jpg";
import bigcar from "../../assets/car.jpg";
import "./Intro.css";

export default function Intro() {
  return (
    <div className="grid-container paragraph ">
      <div className="">
        <p className="mb-5 font-bold text-center md:m-3 ">
          WELCOME TO JCR CAB & CAR RENTAL RAJASTHAN
        </p>

        <p className="text-start ">
          Experience the magic of Jodhpur at your own pace. Our diverse fleet,
          from budget-friendly hatchbacks to luxurious sedans, caters to every
          need. Explore the iconic Mehrangarh Fort, indulge in local cuisine, or
          simply soak in the city's vibrant energy. Enjoy hassle-free travel
          with our easy online booking and round-the-clock assistance. Whether
          it's a family vacation, business trip, or solo adventure
        </p>
        <p>
          we provide service 24*7 for your cab and taxi rental needs and queries
          about online and offline cab booking in jodhpur. We have well Trained
          staff who thoroughly know all the local and rural area. Our growing
          base of loyal clients and riders is a testimony in itself that we are
          the best cab service provider in jodhpur.
        </p>
        <p>
          <ul>
            <li className="font-bold mt-2">
              Following Key Points summarize the impeccable quality of our
              service :
            </li>
            <li>➥We provide Transparent and quality service.</li>
            <li>
              ➥All cabs , cars and taxis integrated with quality GPS tracking
              system.
            </li>
            <li>➥A.C Cars and Cab service.</li>
            <li>➥Experienced and well trained staff.</li>
            <li>
              ➥Car Tours Jodhpur Offers Hourly Package Trips at Affordable
              Fares.
            </li>
            <li> ➥Cabs for any Events & Weddings.</li>
            <li>
              ➥We offer tour taxi service with certified drivers and clean new
              cars. You can book from here for local and outstation tour.
            </li>
          </ul>
        </p>
      </div>
      <div className="image-container img2 ">
        <img
          src={car2}
          alt={bigcar} 
          width={550}
          height={100}

          className="  border border-black rounded-full  p-10 "
        />
      </div>
    </div>
  );
}
