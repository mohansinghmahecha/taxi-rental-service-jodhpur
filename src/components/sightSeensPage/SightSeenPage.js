import React from "react";
import { useParams } from "react-router-dom";
import WhyChooseUs from "../small-containers/WhyChooseUs";

export default function SeightSeenPage() {
  const { cityName } = useParams();
  return (
    <div className="max-w-full sm:max-w-[90%] m-10">
      <p className="text-center text-3xl font-light ">
        Easy TO Book A Services
      </p>
      <p className="text-center text-md font-light  text-gray-400">Try Now </p>

      <div className="flex flex-wrap gap-10 justify-center items-center w-full p-4 m-4 ">
        {/* items */}
        <div className="w-[200px]  ">
          <div className=" border border-yellow-600 flex w-full h-full justify-center items-center rounded-full ">
            <span className="text-[100px] p-2 text-blue-400">1</span>
          </div>
          <div className="text-center break-words m-2">
            <p className="font-bold text-lg">Choose A Car</p>
            <p className="text-sm text-gray-400"></p>
          </div>
        </div>

        <div className="w-[200px]  ">
          <div className=" border border-yellow-600 flex w-full h-full justify-center items-center rounded-full ">
            <span className="text-[100px] p-2 text-blue-400">2</span>
          </div>
          <div className="text-center break-words m-2">
            <p className="font-bold text-lg">Contact Us</p>
            <p className="text-sm text-gray-400">919001502506 </p>
          </div>
        </div>

        <div className="w-[200px] ">
          <div className=" border  bg-orange-400 border-yellow-600 flex w-full h-full justify-center items-center rounded-full ">
            <span className="text-[100px] p-2 text-blue-400">3</span>
          </div>
          <div className="text-center break-words m-2">
            <p className="font-bold text-lg">Done!</p>
            <p className="text-sm text-gray-400"></p>
          </div>
        </div>
      </div>
      <hr className="mt-20" />

      <p className="text-center text-4xl font-semibold">We Are In {cityName}</p>
      <p className="text-start text-md mt-8">
        <body>
          <h1>
            <span className="text-3xl">
              Experience the Best Car Rental Service Across Cities
            </span>
          </h1>

          <p className="mt-4">
            When it comes to exploring a new city, nothing beats the convenience
            of having a reliable car at your disposal. Whether you're visiting
            for business or pleasure, the ability to move freely without being
            tied to public transportation schedules is a luxury everyone
            deserves. At <span>Car Tours in Jodhpur</span>, we are committed to
            offering you the best car rental experience in every city we
            operate. Known as the{" "}
            <strong>No. 1 car rental service provider in Jodhpur</strong>, we
            extend our top-notch services across various cities, ensuring that
            wherever you go, you have access to the same excellence.
          </p>

          <h2>
            <span>Rent a Car with Ease</span>
          </h2>

          <p>
            Renting a car should be a simple, hassle-free experience, and that’s
            exactly what we offer. Our streamlined booking process allows you to
            rent a car in just a few clicks, whether you’re planning your trip
            in advance or need a vehicle on short notice. We offer a diverse
            fleet of vehicles to suit every need, from compact cars for solo
            travelers to spacious SUVs for family trips. Whether you're
            navigating the bustling streets of a busy city or exploring the
            scenic routes in the countryside, our cars are equipped to provide
            you with a smooth and comfortable ride.
          </p>

          <h2>
            <span>Best Price Car Rent</span>
          </h2>

          <p>
            One of our core values is to provide exceptional service at
            competitive prices. We understand that everyone has different budget
            constraints, which is why we offer the{" "}
            <strong>best price car rentals</strong> across all our locations.
            Our pricing is transparent, with no hidden fees, so you can plan
            your journey without worrying about unexpected costs. Whether you
            need a car for a day, a week, or longer, we have flexible rental
            plans that cater to your specific needs. Our commitment to
            affordability doesn’t compromise the quality of our service or
            vehicles, ensuring you get the best value for your money.
          </p>

          <h2>
            <span>No. 1 in Jodhpur and Beyond</span>
          </h2>

          <p>
            While our roots are in Jodhpur, our reputation as the{" "}
            <strong>No. 1 car rental service</strong> extends to every city we
            serve. We take pride in maintaining the highest standards of
            service, no matter where you are. Our dedication to{" "}
            <span>customer satisfaction</span>, coupled with our extensive
            knowledge of each city's roads and landmarks, makes us the top
            choice for car rentals. Whether you’re visiting for a short trip or
            staying longer, we ensure that your transportation needs are met
            with professionalism and care.
          </p>

          <h2>
            <span>Luxury Cars for a Premium Experience</span>
          </h2>

          <p>
            For those who seek a little extra, we offer a selection of{" "}
            <strong>luxury cars</strong> that elevate your travel experience.
            Our luxury fleet includes top-of-the-line models that combine style,
            comfort, and performance. Whether you're attending a special event,
            meeting important clients, or simply want to travel in style, our
            luxury cars are the perfect choice. Renting a luxury car with us is
            more than just transportation; it’s an experience that reflects your
            taste and status. Enjoy the finer things in life as you cruise
            through the city in one of our premium vehicles.
          </p>

          <h2>
            <span>Cars Are Affordable for Everyone</span>
          </h2>

          <p>
            We believe that everyone should have access to affordable car
            rentals, regardless of their destination. Our cars are not only
            luxurious but also budget-friendly, making it possible for everyone
            to enjoy the convenience of private transportation. We regularly
            maintain our fleet to ensure that every vehicle is in excellent
            condition, offering you a safe and reliable ride without breaking
            the bank. Our diverse range of vehicles means that there’s something
            for everyone, from economy cars to luxury sedans, all at prices that
            won’t stretch your budget.
          </p>

          <h2>
            <span>Why Choose Us?</span>
          </h2>

          <p>
            There are many reasons why travelers choose{" "}
            <span>Car Tours in Jodhpur</span> for their car rental needs. Our
            commitment to quality, affordability, and customer satisfaction sets
            us apart from the competition. Here’s why we’re the preferred
            choice:
          </p>

          <ul className="mt-8 mb-8">
            <li>
              <strong>Wide Selection of Vehicles:</strong> From compact cars to
              luxury vehicles, we have a car for every occasion.
            </li>
            <li>
              <strong>Transparent Pricing:</strong> No hidden fees or surprise
              charges – what you see is what you get.
            </li>
            <li>
              <strong>Convenient Locations:</strong> Easily pick up and drop off
              your car at multiple locations across the city.
            </li>
            <li>
              <strong>24/7 Customer Support:</strong> Our team is always
              available to assist you, no matter the time or day.
            </li>
            <li>
              <strong>Flexible Rental Plans:</strong> Whether you need a car for
              a few hours or several weeks, we have options to suit your
              schedule.
            </li>
            <li>
              <strong>Top-Notch Maintenance:</strong> Our cars are regularly
              serviced to ensure they are in perfect condition for your journey.
            </li>
          </ul>

          <h2>
            <span>Explore the City Your Way</span>
          </h2>

          <p>
            With <span>Car Tours in Jodhpur</span>, you have the freedom to
            explore the city on your terms. Say goodbye to the limitations of
            public transport and hello to the convenience of a rental car.
            Discover hidden gems, visit popular attractions, or simply enjoy a
            leisurely drive – the choice is yours. We’re here to make your
            travel experience as seamless and enjoyable as possible, providing
            you with the best cars at the best prices.
          </p>

          <p>
            No matter where you’re headed, let us be your trusted partner in car
            rentals. Experience the best in service, value, and convenience with{" "}
            <span>Car Tours in Jodhpur</span> – your go-to car rental service in
            every city.
          </p>
        </body>
      </p>

      <div className="mt-20 p-4 w-full text-white flex  bg-black justify-evenly gap-8 sm:gap-0 flex-wrap">
        <div className="">
          <p>Please Note: Toll/Parking/Taxes Extra </p>
        </div>

        <div>
          <p> Call or Whatsapp to book a Car Rental in Rajasthan :</p>
          <p>
            Contact No.: +919001502506 or +919413802506 / E-Mail us at
            contact@cartoursjodhpur.com
          </p>
        </div>
      </div>
      <WhyChooseUs />
    </div>
  );
}
