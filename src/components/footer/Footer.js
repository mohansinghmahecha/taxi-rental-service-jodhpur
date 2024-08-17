import "./Footer.css";
import img1 from "../../assets/main-logo.jpg";
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
            <img src={img1} alt="" />
            <p>
              Welcome to the official website of Rajasthan Trips. We offer
              jodhpur tour and travlers
            </p>
          </div>
        </div>

        <div>
          <p>Support</p>
          <p className="mt-10">Call Us</p>
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
          <p>About Us</p>
          <Link className="hover:cursor-pointer" to="/about-us">
            <p className="mt-10" onClick={scrollToTop}>
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
          <p>Contact Info</p>
          <p className="mt-10">
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
