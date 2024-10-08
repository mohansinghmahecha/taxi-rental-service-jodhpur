import React, { Component } from "react";
import { FaWhatsappSquare } from "react-icons/fa";
import SmallAboutUS from "../small-containers/SmallAboutUs";

export default class ContectUs extends Component {
  render() {
    return (
      <div className="w-full">
        <div className="text-center mt-10">
          <p className="font-semibold text-2xl">Get in touch with us </p>
          <p>
            Looking for something or have destination suggestions? Tell us about
            it!
          </p>
        </div>

        <div className="  flex ml-4  justify-center gap-10 mt-20   flex-wrap mb-10">
          <div className="bg-orange-400 h-[150px] w-[250px] p-2 rounded-xl">
            <p className="text-start text-2xl font-light">Our Address:</p>
            <p>Near Airport Road 5 Batti Circle Jodhpur , 342001</p>
          </div>

          <div className="bg-orange-400 h-[150px] h-[150px] w-[250px] p-2 rounded-xl ">
            <p className="text-start text-2xl font-light">Email</p>
            <p>toursshreeganesh5@gmail.com</p>
          </div>

          <div className="bg-orange-400 h-[150px] w-[250px] p-2 rounded-xl flex flex-col">
            <p className="text-start text-2xl font-light ">Whats App</p>
            <div className=" w-full  flex justify-center">
              <FaWhatsappSquare className="h-[100px] w-[150px] text-green-500 hover:cursor-pointer" onClick={()=> {
                   window.open('https://wa.me/+919001502506', '_blank');
              }} />
            </div>
          </div>
        </div>
        <SmallAboutUS />
      </div>
    );
  }
}
