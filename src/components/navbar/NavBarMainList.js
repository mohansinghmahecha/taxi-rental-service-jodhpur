import React, { useState, useRef } from "react";
import "./MainNevbar.css";

import { MdArrowDropDown } from "react-icons/md";
import { Link } from "react-router-dom";

export default function NavBarMainList() {
  const dropdownRef = useRef(null); // Ref for the dropdown container
  const [isHovered, setIsHovered] = useState(false);
  const [isSightSeen, setIsSightSeen] = useState(false);
  const handleMouseSightIn = () => {
    setIsSightSeen(true);
  };
  const handleMouseSightOut = (e) => {
    // Check if the mouse moved to the dropdown (ul)
    if (dropdownRef.current && dropdownRef.current.contains(e.relatedTarget)) {
      return; // Do nothing if moving to the dropdown
    }
    setIsSightSeen(false);
  };

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
        <span>
          Taxi Services <MdArrowDropDown className="inline" />
        </span>

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
        <Link to="/one-way-taxi">One Way Taxi</Link>
        {/* One Way Taxi <MdArrowDropDown className=" w-[15px] inline m-0 p-0 " /> */}
      </div>

      {/* sight seen box is here  */}
      <div className="custom-font hover:cursor-pointer ">
        <span
          onMouseEnter={handleMouseSightIn}
          onMouseLeave={handleMouseSightOut}
          className=""
        >
          Seight Seen
          <MdArrowDropDown className=" inline m-0 p-0 " />
        </span>
        {isSightSeen && (
          <ul
            ref={dropdownRef} // Ref added to the ul
            className="absolute z-40 bg-yellow-400 w-[100px] flex flex-col gap-2 p-2 border-b-2 p-4"
            onMouseEnter={handleMouseSightIn} // Keep dropdown open on ul mouse enter
            onMouseLeave={handleMouseSightOut} // Handle mouse leave on ul
          >
            <li className="border-b border-blue-400">
              <Link to="/onewaytaxi/:Jodhpur">Jodhpur</Link>
            </li>
            <li className="border-b border-blue-400">
              <Link to="/onewaytaxi/:Jaipur">Jaipur</Link>
            </li>
            <li className="border-b border-blue-400">
              <Link to="/onewaytaxi/:Udaipur">Udaipur</Link>
            </li>
          </ul>
        )}
      </div>

      <Link to="/car-rent-jodhpur">
        <div className="custom-font hover:cursor-pointer">Jodhpur Cab </div>
      </Link>

      <div className="custom-font">
        <Link to="/contect-us">Contect Us</Link>
      </div>
    </div>
  );
}
