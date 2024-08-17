import logo from "../../assets/main-logo-white.webp";
import NavBarMainList from "./NavBarMainList";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { RiMenu3Fill } from "react-icons/ri";
import { MdArrowDropDown } from "react-icons/md";
import "./MainNevbar.css";
import { useState } from "react";

const MainNevbar = () => {
  const [isMenuOpen, setisMenuOpened] = useState(false);

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  const onMenuClick = () => {
    setisMenuOpened(!isMenuOpen);
  };
  function FbBoxOpen() {
    window.open(
      "https://www.facebook.com/share/AE3w4KDPuhyL7bF5/?mibextid=qi2Omg",
      "_blank"
    );
  }
  function intaBoxOpen() {
    window.open(
      "https://www.instagram.com/cartoursjodhpur/?igsh=OTkwZmVyYTc5c3Ru",
      "_blank"
    );
  }

  // for sight seen menu
  const [isSight, setIsSinght] = useState(false);
  const handleMouseEnter = () => {
    setIsSinght(true);
  };

  const handleMouseLeave = () => {
    setIsSinght(false);
  };

  return (
    <nav>
      <div className="main-menu">
        <div class="flex bg-black w-full text-white p-2 items-center justify-between md:justify-end">
          <p class="text-xs md:text-sm md:mr-4">
            Call us for Booking +919001502506
          </p>
          <span class="text-xs md:text-sm p-1 rounded-lg bg-orange-500">
            contact@cartoursjodhpur.com
          </span>
          <FaFacebook
            onClick={FbBoxOpen}
            className="w-8 h-10 text-blue-500 ml-1"
          />
          <AiFillInstagram
            onClick={intaBoxOpen}
            className="w-8 h-10 text-red-500 ml-1"
          />
        </div>

        <div className="sub-main">
          <div></div>

          <Link to="/">
            <div>
              <img src={logo} alt={logo} width={180} height={100} />
            </div>
          </Link>
          <div>
            <div className="  ">
              <NavBarMainList />
            </div>
          </div>
        </div>

        {/* important   for     here */}

        {/* for mobile menu */}

        <div className="mobile-submenu-maincontainer">
          <div className="menu-container">
            <div className="image-logo">
              <Link to="/">
                <img
                  src={logo}
                  alt="car tour jodhpur logo"
                  width={100}
                  height={140}
                />
              </Link>
            </div>
            <div className="burger-icon">
              <RiMenu3Fill
                style={{ cursor: "pointer", width: "25px", height: "30px" }}
                onClick={onMenuClick}
              />
            </div>
          </div>

          {isMenuOpen && (
            <div className="menu-box border  " onClick={onMenuClick}>
              <div className="flex flex-col gap-4 text-2xl">
                {/* start */}

                <div className="custom-font items ">
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
                    <ul className="block ml-4  font-bold  text-white">
                      <li className="border-b border-blue-400">
                        <Link to="/taxi-services/jaipur">Jaipur</Link>
                      </li>
                      <li className="border-b border-blue-400">
                        <Link to="/taxi-services/jodhpur">Jodhpur</Link>
                      </li>
                      <li className="border-b border-blue-400">
                        <Link to="/taxi-services/Balotra">Balotra</Link>
                      </li>
                      <li className="border-b border-blue-400">
                        <Link to="/taxi-services/Barmer">Barmer</Link>
                      </li>
                      <li className="border-b border-blue-400">
                        <Link to="/taxi-services/Ajmer">Ajmer</Link>
                      </li>
                      <li className="border-b border-blue-400">
                        <Link to="/taxi-services/Pali">Pali</Link>
                      </li>
                      <li className="border-b border-blue-400">
                        <Link to="/taxi-services/Osian">Osian</Link>
                      </li>
                    </ul>
                  )}
                </div>

                <div
                  className="custom-font hover:cursor-pointer"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <span className="">
                    Sight Seen <MdArrowDropDown className="inline" />
                  </span>
                  {isSight && (
                    <ul
                      className="ml-4  text-white custom-font"
                      onClick={() => setIsSinght(false)}
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
                <div className="custom-font">
                  <Link to="/one-way-taxi">One Way Taxi</Link>
                </div>
                <Link to="/car-rent-jodhpur">
                  <div className="custom-font">Jodhpur Cab </div>
                </Link>

                <div className="custom-font">
                  <Link to="/contect-us">Contect Us</Link>
                </div>
              </div>

              {/* end */}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
export default MainNevbar;
