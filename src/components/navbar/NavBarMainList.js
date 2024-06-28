import React, { useState } from "react";
import './MainNevbar.css'

import { MdArrowDropDown } from "react-icons/md";

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
            <div className="custom-font">About Us</div>


            <div className="inline custom-font" onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}>
                Taxi Services

                {isHovered && <ul className="submenu ">
                    <li className="itms">Jaipur</li>
                    <li className="itms">Jodhpur</li>
                    <li className="itms">Balotra</li>
                    <li className="itms">Barmer</li>
                    <li className="itms">Ajmer</li>
                    <li className="itms">Pali</li>
                    <li className="itms">Osian</li>
                </ul>}


            </div>

            <div className="custom-font"><span>One Way Taxi</span> <MdArrowDropDown className=" w-[15px] inline m-0 p-0 " /> </div>
            <div className="custom-font">Seight Seen  <MdArrowDropDown className=" w-[15px] inline m-0 p-0 " /></div>
            <div className="custom-font">Jodhpur Cab </div>
            <div className="custom-font">Contect Us </div>

        </div>
    );
}
