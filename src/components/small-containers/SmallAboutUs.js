import React from "react";
import { FaCarAlt } from "react-icons/fa";
import { MdFamilyRestroom } from "react-icons/md";
export default function SmallAboutUS() {
  return (
    <div className="w-full bg-white">
      <div className="text-center p-4 text-2xl font-semibold bg-black text-white ">
        <p>We are always ready to pick you up - 24/7</p>
      </div>

      <div className="w-full flex flex-wrap justify-center items-center  p-4 gap-8 ">
        {/* one box */}
        <div className="flex flex-col justify-center items-center shadow-lg rounded-lg bg-orange-400 p-4  w-[300px] h-[300px]">
          {/* <p className=" text-white  font-bold text-2xl mb-2">Our vission</p> */}
          <FaCarAlt
            className="text-blue-500"
            style={{
              width: "100px",
              height: "100px",
            }}
          />
          <p className="text-center ">
            we cares for you and family , let us give a try for you we assure
            your safety
          </p>
        </div>
        {/* one end */}

        {/* one box */}
        <div className="flex flex-col justify-center items-center shadow-lg rounded-lg bg-orange-400 p-4  w-[300px] h-[300px]">
          <p className=" text-white  font-bold text-2xl mb-2">Our vission</p>
          {/*  <img
            className="bg-transparent mix-blend-multiply"
            src="https://xpd0c6.p3cdn1.secureserver.net/wp-content/uploads/2020/08/images-1-1.png?time=1721209120"
            alt=""
          /> */}

          <p className="text-center ">
            Our vision is to become a forward motion-oriented car rental company
            by serving perfect and best service to value-conscious customers for
            all of their car rental demands and attain functional excellence.
          </p>
        </div>
        {/* one end */}

        {/* one box */}
        <div className="flex flex-col justify-center items-center shadow-lg rounded-lg bg-orange-400 p-4  w-[300px] h-[300px]">
          {/* <p className=" text-white  font-bold text-2xl mb-2">Our vission</p> */}
          {/*   <img
            className="bg-transparent mix-blend-multiply"
            src="https://xpd0c6.p3cdn1.secureserver.net/wp-content/uploads/2020/08/images-2-150x150.png"
            alt=""
          /> */}
          <MdFamilyRestroom
            className="text-blue-500"
            style={{
              width: "100px",
              height: "100px",
            }}
          />
          <p className="text-center ">
            we are best for car rental services in jodhpur , we qualify the need
            of customer.
          </p>
        </div>
        {/* one end */}
      </div>
      {/* paragrahs */}
      <div className="p-16 ">
        <p>
          We ensure that clean, comfortable and well interior cars with
          professional and experienced chauffeurs those have good knowledge
          about all local & domestic area routes. If you are looking for a cheap
          and budgeted cab on rent in Jodhpur, Then Jodhpur Cab Service here to
          serve you. Car tours jodhpur makes your ride, even more, happier.
          while you reach your destination on right time. You can call and book
          your cab on that number You can book your cab from our website also
          www.cartoursjodhpur.com We are providing economical and efficient cab
          service in Rajasthan, India. car tours jodhpur is reliable and
          affordable hire cab in jodhpur. The livery of cabs in India varies
          from state to state, for private cab rental services are not required
          to have a specific color, interior or livery.We strive to continually
          improve your experience with our company and your feedback is very
          important to us. In case of any suggestions or questions drop us an
          email at cartoursjodhpur@gmail.com
        </p>
        <p>
          car tours jodhpur is one of the pioneer cab service in jodhpur founded
          by mr bhanwar lal choudhary in 1990. We provide cheap and best cab
          services from jodhpur, jaipur & Rajasthan at very affordable price..
          Our mission is to provide International & Professional class services
          in Jodhpur with cheapest and lowest prices, that compete with the ones
          those who offered Car, Taxi or Cab rental service in Jodhpur. We are
          offering discount and schemes time to time for our customers. We offer
          a wide variety of cars to choose from -Etios, Innova Crysta, Sedans.
          We provide tour package and guide you which place you must visit if
          you visit first time in Jodhpur and also offer airport and railway
          pick up and drop facility in Jodhpur. Feel free to book your next trip
          with car tours jodhpur. We are always at your service. Call us at +91
          9001502506
        </p>
      </div>
    </div>
  );
}
