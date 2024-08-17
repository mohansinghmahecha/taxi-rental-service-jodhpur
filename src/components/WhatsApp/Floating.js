import React from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdPhoneCallback } from "react-icons/md";
import "./Floating.css";

function whatsappopen() {
  window.open("https://wa.me/+919001502506", "_blank");
}

function callNumber() {
  window.location.href = "tel:+919001502506";
}

export default function Floating() {
  return (
    <div className="whatsapp flex flex-col w-30 gap-4">
      <div>
        <IoLogoWhatsapp
          className="text-green-900 logo-size animate-bounce hover:cursor-pointer"
          onClick={whatsappopen}
        />
      </div>
      <div>
        <MdPhoneCallback
          className="text-blue-900 logo-size hover:cursor-pointer"
          onClick={callNumber} // Add this onClick handler
        />
      </div>
    </div>
  );
}
