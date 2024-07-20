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
            <p className="text-sm text-gray-400">
              Lorem ipsum dolor sit amet ipsam aliquam veritatis asperiores est
              quod!
            </p>
          </div>
        </div>

        <div className="w-[200px]  ">
          <div className=" border border-yellow-600 flex w-full h-full justify-center items-center rounded-full ">
            <span className="text-[100px] p-2 text-blue-400">2</span>
          </div>
          <div className="text-center break-words m-2">
            <p className="font-bold text-lg">Contact Us</p>
            <p className="text-sm text-gray-400">
              Lorem ipsum dolor sit amet ipsam aliquam veritatis asperiores est
              quod!
            </p>
          </div>
        </div>

        <div className="w-[200px] ">
          <div className=" border  bg-orange-400 border-yellow-600 flex w-full h-full justify-center items-center rounded-full ">
            <span className="text-[100px] p-2 text-blue-400">3</span>
          </div>
          <div className="text-center break-words m-2">
            <p className="font-bold text-lg">Done!</p>
            <p className="text-sm text-gray-400">
              Lorem ipsum dolor sit amet ipsam aliquam veritatis asperiores est
              quod!
            </p>
          </div>
        </div>
      </div>
      <hr className="mt-20" />

      <p className="text-center text-4xl font-semibold">We Are In {cityName}</p>
      <p className="text-center text-md mt-8">
        Lorem ipsum dolor sit amet Iste quae tempora itaque accusantium libero
        voluptatibus esse. Recusandae fuga similique voluptate quo iure,
        voluptatem temporibus nulla iste! Nihil atque molestiae placeat quia
        consequuntur. Deleniti recusandae libero ipsum. Laborum, repudiandae.
        Rem quae pariatur possimus iste doloremque numquam, veniam porro
        voluptates. Adipisci, provident facere hic explicabo molestias
        accusantium architecto iste quod aliquid ut. Quod rem odio minus
        assumenda ipsam nisi recusandae. dignissimos necessitatibus atque
        facilis, voluptatibus ducimus error corrupti nostrum earum incidunt
        neque sed consequuntur itaque autem exercitationem quos! Expedita,
        corporis voluptatem. Ipsam, dolorem necessitatibus ipsum maxime soluta
        voluptas, placeat id magnam, obcaecati blanditiis tempora facere
        deserunt molestiae! Quis quidem voluptatum facere fugit id? Cum sequi
        laboriosam corporis beatae ducimus voluptate rem. Eveniet repellendus
        vero molestias odio perferendis, beatae a illum. Velit voluptatum
        ratione assumenda sit fugiat nostrum nulla suscipit eos qui quidem minus
        obcaecati inventore aliquam, perferendis minima quam praesentium!
        Quibusdam. Perferendis cupiditate similique deleniti qui a modi et,
        officiis quisquam molestias iste expedita repellendus unde maxime minima
        fugit tempora? Veritatis omnis, deleniti nulla natus modi neque dolore
        libero sit cum. Architecto deleniti quidem aspernatur dolore iure ex
        repellat at consequatur quas quisquam! Reiciendis cumque aliquid
        doloribus laborum rerum earum porro iure voluptatem veniam, tempore nemo
        doloremque, quo aut, enim nobis. Molestias quidem blanditiis sint totam
        animi? Alias ipsa corporis temporibus rat a nobis adipisci unde!
      </p>

      <div className="mt-20 p-4 w-full text-white flex  bg-black justify-evenly gap-8 sm:gap-0 flex-wrap">
        <div className="">
          <p>Please Note: Toll/Parking/Taxes Extra </p>
        </div>

        <div>
          <p> Call or Whatsapp to book a Car Rental in Rajasthan :</p>
          <p>
            Contact No.: +91-9358811941 or 0141 4040687 or E-Mail us at
            ravi@gmail.com
          </p>
        </div>
      </div>
      <WhyChooseUs />
    </div>
  );
}
