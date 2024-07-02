import React, { useState } from "react";
import "./MainNevbar.css";

import { MdArrowDropDown } from "react-icons/md";
import { Link } from "react-router-dom";

export default function NavBarMainList() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  return (
    <div className="parent-component">
      <div className="custom-font">
        <Link to="/about-us">About Us</Link>
      </div>

      <div
        className=" custom-font  "
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
       
          <span >Taxi Services <MdArrowDropDown className="inline" /></span>
         
        
        {isHovered && (
          <ul className="submenu">
            <li className="itms">
              <Link to="/taxi-services/jaipur">Jaipur</Link>
            </li>
            <li className="itms">
              <Link to="/taxi-services/jodhpur">Jodhpur</Link>
            </li>
            <li className="itms">
              <Link to="/taxi-services/Balotra">Balotra</Link>
            </li>
            <li className="itms">
              <Link to="/taxi-services/Barmer">Barmer</Link>
            </li>
            <li className="itms">
              <Link to="/taxi-services/Ajmer">Ajmer</Link>
            </li>
            <li className="itms">
              <Link to="/taxi-services/Pali">Pali</Link>
            </li>
            <li className="itms">
              <Link to="/taxi-services/Osian">Osian</Link>
            </li>
          </ul>
        )}
      </div>

      <div className="custom-font">
        <span>
          One Way Taxi
          <MdArrowDropDown className=" inline m-0 p-0" />
        </span>
      </div>
      <div className="custom-font">
        Seight Seen <MdArrowDropDown className=" w-[15px] inline m-0 p-0 " />
      </div>
      <div className="custom-font">Jodhpur Cab </div>
      <div className="custom-font">Contect Us </div>
    </div>
  );
}
