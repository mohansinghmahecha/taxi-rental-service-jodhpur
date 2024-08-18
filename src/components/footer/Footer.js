import "./Footer.css";
import img1 from "../../assets/main-logo.webp";
import { Link } from "react-router-dom";

export default function Footer() {
  const d = new Date();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // This will animate the scroll
    });
  };
  return (
    <div className="p-2 bg-black ">
      <div className="footer-container p-14">
        <div>
          <div>
            <img src={img1} alt="car tours jodhpur logo " width={250} height={200}/>
            <p>
              Welcome to the official website of Rajasthan Trips. We offer
              jodhpur tour and travlers
            </p>
          </div>
        </div>

        <div>
          <p className="decoration-dashed	text-white mt-10">Support</p>
          <p className=" hover:cursor-pointer mt-2" onClick={()=>{
            window.location.href = "tel:+919001502506";
          }}>Call Us</p>
          <p
            className="hover:cursor-pointer"
            onClick={() => {
              window.open("https://wa.me/+919001502506", "_blank");
            }}
          >
            whats App
          </p>
        </div>

        <div>
          <p className="decoration-dashed	text-white mt-10"> About Us</p>
          <Link className="hover:cursor-pointer" to="/about-us">
            <p className="mt-2" onClick={scrollToTop}>
              Our Story
            </p>
          </Link>
          <Link to="/priviacy-policy">
            <p onClick={scrollToTop}>Privacy Policy</p>
          </Link>
          <Link to="/cancellation-policy">
            <p>Cancellations Policy</p>
          </Link>
          <Link to="/refund-policy">
            <p onClick={scrollToTop}>Refund policy</p>
          </Link>
        </div>
        <div>
          <p className="decoration-dashed	text-white mt-10">Contact Info</p>
          <p className="mt-2">
            Near Airport Road 5 Batti Circle Jodhpur , 342001
          </p>
          <p>+91 9001502506</p>

          <p>toursshreeganesh5@gmail.com</p>
        </div>
      </div>

      <div className="bg-black text-white text-center">
        <p>© {d.getFullYear()} Taxi service in jodhpur</p>
      </div>
    </div>
  );
}
