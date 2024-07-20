import React from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdPhoneCallback } from "react-icons/md";
import "./Floating.css";

export default function Floating() {
  return (
    <div className="whatsapp flex flex-col   w-30  gap-4">
      <div className="">
        <IoLogoWhatsapp className=" text-green-900 logo-size animate-bounce" />
        {/* <p>whats App</p> */}
      </div>
      <div>
        <MdPhoneCallback className="text-blue-900 logo-size" />
      </div>
    </div>
  );
}
