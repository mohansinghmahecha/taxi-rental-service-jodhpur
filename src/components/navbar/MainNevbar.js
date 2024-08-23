import logo from "../../assets/main-logo-white.webp";
import NavBarMainList from "./NavBarMainList";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";

import { RiMenu3Fill } from "react-icons/ri";
import { MdArrowDropDown } from "react-icons/md";
import "./MainNevbar.css";
import instaLogo from "../../assets/insta-logo.webp";
import { useState } from "react";

const MainNevbar = () => {
  const [isMenuOpen, setisMenuOpened] = useState(false);
  const [isTaxiServicesOpen, setIsTaxiServicesOpen] = useState(false);
  const [isSightSeenOpen, setIsSightSeenOpen] = useState(false);

  const toggleMenu = () => {
    setisMenuOpened(!isMenuOpen);
  };

  const toggleTaxiServices = () => {
    setIsTaxiServicesOpen(!isTaxiServicesOpen);
    if (isSightSeenOpen) setIsSightSeenOpen(false);
  };

  const toggleSightSeen = () => {
    setIsSightSeenOpen(!isSightSeenOpen);
    if (isTaxiServicesOpen) setIsTaxiServicesOpen(false);
  };

  const closeMenu = () => {
    setisMenuOpened(false);
    setIsTaxiServicesOpen(false);
    setIsSightSeenOpen(false);
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

  return (
    <nav>
      <div className="main-menu">
        <div className="flex bg-black w-full text-white p-2 items-center justify-between md:justify-end">
          <p className="text-xs md:text-sm md:mr-4">
            Call us for Booking +919001502506
          </p>
          <span className="text-xs md:text-sm p-1 rounded-lg bg-orange-500">
            toursshreeganesh5@gmail.com
          </span>
          <FaFacebook
            onClick={FbBoxOpen}
            className="w-8 h-10 text-blue-500 ml-1 hover:cursor-pointer"
          />
          <img
            src={instaLogo}
            alt="social-media-icon"
            width={35}
            className="ml-[4px] hover:cursor-pointer"
            onClick={intaBoxOpen}
          />
        </div>

        <div className="sub-main">
          <div></div>

          <Link to="/">
            <div>
              <img src={logo} alt="logo" width={180} height={100} />
            </div>
          </Link>
          <div>
            <div className="">
              <NavBarMainList />
            </div>
          </div>
        </div>

        {/* Mobile menu */}

        <div className="mobile-submenu-maincontainer">
          <div className="menu-container">
            <div className="image-logo">
              <Link to="/" onClick={closeMenu}>
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
                onClick={toggleMenu}
              />
            </div>
          </div>

          {isMenuOpen && (
            <div className="menu-box border">
              <div className="flex flex-col gap-4 text-2xl">
                <div className="custom-font">
                  <Link to="/about-us" onClick={closeMenu}>
                    About Us
                  </Link>
                </div>

                <div className="custom-font" onClick={toggleTaxiServices}>
                  <span>
                    Taxi Services <MdArrowDropDown className="inline" />
                  </span>
                  {isTaxiServicesOpen && (
                    <ul className="block ml-4 font-bold text-white">
                      <li className="border-b border-blue-400">
                        <Link to="/taxi-services/jaipur" onClick={closeMenu}>
                          Jaipur
                        </Link>
                      </li>
                      <li className="border-b border-blue-400">
                        <Link to="/taxi-services/jodhpur" onClick={closeMenu}>
                          Jodhpur
                        </Link>
                      </li>
                      <li className="border-b border-blue-400">
                        <Link to="/taxi-services/Balotra" onClick={closeMenu}>
                          Balotra
                        </Link>
                      </li>
                      <li className="border-b border-blue-400">
                        <Link to="/taxi-services/Barmer" onClick={closeMenu}>
                          Barmer
                        </Link>
                      </li>
                      <li className="border-b border-blue-400">
                        <Link to="/taxi-services/Ajmer" onClick={closeMenu}>
                          Ajmer
                        </Link>
                      </li>
                      <li className="border-b border-blue-400">
                        <Link to="/taxi-services/Pali" onClick={closeMenu}>
                          Pali
                        </Link>
                      </li>
                      <li className="border-b border-blue-400">
                        <Link to="/taxi-services/Osian" onClick={closeMenu}>
                          Osian
                        </Link>
                      </li>
                    </ul>
                  )}
                </div>

                <div className="custom-font" onClick={toggleSightSeen}>
                  <span>
                    Sight Seen <MdArrowDropDown className="inline" />
                  </span>
                  {isSightSeenOpen && (
                    <ul className="ml-4 text-white custom-font">
                      <li className="border-b border-blue-400">
                        <Link to="/onewaytaxi/:Jodhpur" onClick={closeMenu}>
                          Jodhpur
                        </Link>
                      </li>
                      <li className="border-b border-blue-400">
                        <Link to="/onewaytaxi/:Jaipur" onClick={closeMenu}>
                          Jaipur
                        </Link>
                      </li>
                      <li className="border-b border-blue-400">
                        <Link to="/onewaytaxi/:Udaipur" onClick={closeMenu}>
                          Udaipur
                        </Link>
                      </li>
                    </ul>
                  )}
                </div>

                <div className="custom-font">
                  <Link to="/one-way-taxi" onClick={closeMenu}>
                    One Way Taxi
                  </Link>
                </div>

                <Link to="/car-rent-jodhpur" onClick={closeMenu}>
                  <div className="custom-font">Jodhpur Cab</div>
                </Link>

                <div className="custom-font">
                  <Link to="/contect-us" onClick={closeMenu}>
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default MainNevbar;
