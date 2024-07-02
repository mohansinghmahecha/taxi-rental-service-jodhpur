import logo from "../../assets/JCR_Logo_white.webp";
import NavBarMainList from "./NavBarMainList";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import "./MainNevbar.css";

const MainNevbar = () => {
  return (
    <nav>
      <div className="main-menu">

        
        <div class="flex bg-black w-full flex-nowrap text-white p-2 items-center justify-end">
          <p class="text-sm  ">
            Call us for Booking +919414137405 +919799735500 /
          </p>
          <div class=" flex flex-nowrap items-center gap-2">
            <span class="   p-1 rounded-lg bg-orange-500">
              jcrcab12@gmail.com
            </span>
            <FaFacebook />
            <AiFillInstagram />
          </div>
        </div>

        <div className="sub-main">
          <div ></div>

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

        
      </div>
    </nav>
  );
};
export default MainNevbar;
