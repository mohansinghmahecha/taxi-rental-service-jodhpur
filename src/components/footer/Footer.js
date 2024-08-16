import "./Footer.css";
import img1 from "../../assets/JCR_Logo_white.webp";

export default function Footer() {
  const d = new Date();
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
          <p>whats App</p>
        </div>

        <div>
          <p>About Us</p>
          <p className="mt-10">Our Story</p>
          <p>Privacy Policy</p>
          <p>Cancellations Policy</p>
          <p>Refund policy</p>
        </div>
        <div>
          <p>Contact Info</p>
          <p className="mt-10">
            16, Gaytri nagar bhadwasiya jodpur rajasthan 342006
          </p>
          <p>+91 9001502506</p>
          <p> +91 9413802506</p>
          <p>contact@cartoursjodhpur.com</p>
        </div>
      </div>

      <div className="bg-black text-white text-center">
        <p>© {d.getFullYear()} Taxi service in joddhpur</p>
      </div>
    </div>
  );
}
