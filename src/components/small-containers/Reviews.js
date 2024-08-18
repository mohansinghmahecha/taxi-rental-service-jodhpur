import React from "react";
import hemaMalini from "../../assets/vip-reviews/hema-malini.webp";
import mukesh from "../../assets/vip-reviews/Mukesh.webp";
import kainaatArira from "../../assets/vip-reviews/kainaat-arira.webp";

export default function Reviews() {
  return (
    <div className="overflow-hidden">
      <div className=" p-4 text-center">
        <p className="text-3xl p-4">
          OUR VIP CUSTOMER REVIEW ABOUT CAR TOURS JODHPUR
        </p>

        <div className="grid p-4 sm:grid-cols-1 md:grid-cols-3 justify-center items-center  justify-items-center	 gap-10 ">
          {/* item start */}
          <div className="flex flex-col justify-center items-center  min-h-[350px] w-[300px] bg-orange-400 rounded-lg">
            <div className="">
              <img
                src={mukesh}
                alt="actor mukesh in car tours used our service"
                width={100}
                height={100}
                className="rounded-full "
              />
            </div>

            <p className="p-4">
              The entire tour was successful because of Bhanwar lal ji ( Car
              driver). He is very polite & obedient. His Driving is completely
              safe. I can recommend this anyone who wants to visit Rajasthan
              tour. Thank Car Tours Jodhpur once again.
            </p>
            <p> </p>
            <p className="font-semibold">Mukesh Rishi</p>
            <p className="text-sm text-gray-800 p-2">Actor</p>
          </div>
          {/* item end */}

          {/* item start */}
          <div className="flex flex-col justify-center items-center  min-h-[350px] w-[300px] bg-orange-400 rounded-lg">
            <div className="">
              <img
                src={kainaatArira}
                alt=""
                width={100}
                height={100}
                className="rounded-full "
              />
            </div>

            <p className="p-4">
              We reserved a cab for jodhpur tour and we got MR. BHANWAR LAL JI
              as the driver. He was wonderful and his driving skills were
              awesome. He was very cooperative and suggested us some of the best
              places in jodhpur.
            </p>
            <p> </p>
            <p className="font-semibold">Kainaat Arora</p>
            <p className="text-sm text-gray-800 p-2">Actor</p>
          </div>
          {/* item end */}

          {/* item start */}
          <div className="flex flex-col justify-center items-center min-h-[350px] w-[300px] bg-orange-400 rounded-lg">
            <div className="">
              <img
                src={hemaMalini}
                alt=""
                width={100}
                height={100}
                className="rounded-full mb-8"
              />
            </div>

            <p className="p-4">
              Very nice service and Mr. Bhanwar lal ji is such a great man.. His
              behavior and attitude is so good and very humble man. Car Tours
              Jodhpur is the best cab service in jodhpur.
            </p>
            <p> </p>
            <p className="font-semibold">Hema Malini</p>
            <p className="text-sm text-gray-800 p-2">Actor</p>
          </div>
          {/* item end */}
        </div>
      </div>
    </div>
  );
}
