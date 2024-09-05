import car2 from "../../assets/intro-pic.webp";

import "./Intro.css";

export default function Intro() {
  return (
    <div className="grid-container paragraph ">
      <div className="">
        <h1 className="mb-5 font-bold text-center md:m-3 text-3xl text-yellow-500 underline-offset-auto	">
          CAR TOURS JODHPUR
        </h1>
        <p>
          Car Tours Jodhpur is a leading provider of car, cab, and taxi services
          in Jodhpur, offering you a seamless way to explore this vibrant city.
          Whether you're planning a family vacation, a business trip, or a solo
          adventure, we ensure you experience the magic of Jodhpur at your own
          pace and convenience. Our diverse fleet ranges from budget-friendly
          hatchbacks to luxurious sedans, catering to every travel need.
        </p>

        <h2 className="text-start text-2xl font-bold mt-2">
          Why Choose Car Tours Jodhpur?
        </h2>
        <p>
          
          Transparent and Quality Service: We believe in providing transparent
          services, ensuring you get the best value for your money without any
          hidden charges.
        </p>

        <p>
          GPS-Enabled Cabs: All our cabs, cars, and taxis are integrated with
          high-quality GPS tracking systems, guaranteeing your safety and
          convenience during your journey.
        </p>
        <p>
          Comfortable A.C Cars: Beat the Jodhpur heat with our air-conditioned
          cars and cabs, designed for a comfortable and relaxed travel
          experience.
        </p>
        <p>
          Experienced and Trained Staff: Our drivers and staff are well-trained,
          with in-depth knowledge of both local and rural areas, ensuring you
          reach your destination safely and efficiently.
        </p>
        <p>
          Affordable Hourly Packages: Car Tours Jodhpur offers hourly package
          trips at affordable fares, giving you the flexibility to explore the
          city without worrying about time constraints
        </p>

        <h3 className="font-bold text-xl mt-2">Event & Wedding Cabs:</h3>
        <p>
          We provide specialized cab services for events and weddings, ensuring
          your guests travel in comfort and style.
        </p>
        <p>
          Certified Drivers and Clean Cars: Our tour taxi services come with
          certified drivers and clean, new cars, perfect for both local and
          outstation tours.
        </p>
        <h4 className="text-lg font-bold mt-2">Easy Online and Offline Booking</h4>
        <p>
          Booking a cab in Jodhpur has never been easier. With our 24/7 service,
          you can book your preferred car, cab, or taxi online or offline at any
          time. Whether you're heading to the iconic Mehrangarh Fort, indulging
          in local cuisine, or exploring the city's vibrant streets, we’ve got
          you covered.
        </p>
        <h4 className="text-lg font-bold mt-2">Services Offered: </h4>
        <ul>
          <li>
            Car Hire in Jodhpur: Choose from our wide range of vehicles for a
            comfortable and convenient travel experience.
          </li>
          <li>
            Cab Service in Jodhpur: Reliable and affordable cab services
            tailored to meet your travel needs.
          </li>
          <li>
            Taxi Services in Jodhpur: Quick and easy taxi booking for local and
            outstation travel.
          </li>
          <li>
            Car Rental Jodhpur: Flexible car rental options for a hassle-free
            journey.
          </li>
          <li>
            Car Rental Innova Crysta Jodhpur: Rent the premium Innova Crysta for
            a luxurious travel experience.
          </li>
        </ul>
        <p>
          Join our growing base of loyal clients and riders who trust us as the
          best cab service provider in Jodhpur. Experience the city like never
          before with Car Tours Jodhpur, where your journey is our priority.
        </p>
      </div>
      <div className="image-container img2 ">
        <img
          src={car2}
          alt={car2}
          width={480}
          height={100}
          className="  border  "
        />
      </div>
    </div>
  );
}
