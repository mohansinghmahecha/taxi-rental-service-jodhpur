import React from "react";
import callLogo from "../../assets/call-logo.png";
import whatsappLogo from "../../assets/whatsapp-logo.png";
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
        <img
          src={whatsappLogo}
          className="logo-size animate-bounce hover:cursor-pointer w-10 h-10"
          alt="whatsApp"
          onClick={whatsappopen}
        />
        <img
          src={callLogo}
          alt="call-logo"
          className="  hover:cursor-pointer  w-10 h-10 mt-2"
          onClick={callNumber}
        />
      </div>
      <div></div>
    </div>
  );
}
