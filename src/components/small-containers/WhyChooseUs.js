import React from "react";
import { FaOilCan } from "react-icons/fa6";
import { GiCarWheel } from "react-icons/gi";
import { FaWifi } from "react-icons/fa";
import { BsCashCoin } from "react-icons/bs";

export default function WhyChooseUs() {
  return (
    <div className="m-4 mt-40 max-w-full sm:max-w-[100%] m-10">
      <p className="text-center text-5xl">Reason ! To Choose Us</p>
      <p className="text-center text-lg">Here 10+ Years Of Experience</p>

      {/* grid main */}
      <div className="flex justify-center items-center w-full">
        <div className="w-full gap-10 grid grid-cols-1 sm:grid-cols-1 sm:gap-12 md:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-10 justify-center items-center mt-10 ">
          {/* item start */}
          <div className="flex justify-start items-start w-full">
            <div>
              <BsCashCoin className="w-20 h-10" />
            </div>
            <div>
              <p>Affordable Price For Car Renting</p>
            </div>
          </div>

          {/* item end */}
          {/* item start */}
          <div className="flex justify-start items-start w-full">
            <div>
              <BsCashCoin className="w-20 h-10 text-green-400" />
            </div>
            <div>
              <p>Choose Us Now</p>
            </div>
          </div>

          {/* item end */}

          {/* item start */}
          <div className="flex justify-start items-start w-full">
            <div>
              <FaWifi className="w-20 h-10" />
            </div>
            <div>
              <p>Free Wifi</p>
            </div>
          </div>

          {/* item end */}

          {/* item start */}
          <div className="flex justify-start items-start w-full">
            <div>
              <GiCarWheel className="w-20 h-10" />
            </div>
            <div>
              <p>Fast Service</p>
            </div>
          </div>

          {/* item end */}

          {/* item start */}
          <div className="flex justify-start items-start w-full">
            <div>
              <FaOilCan className="w-20 h-10" />
            </div>
            <div>
              <p>Best Service of our vehicles</p>
            </div>
          </div>

          {/* item end */}
        </div>
      </div>
    </div>
  );
}
