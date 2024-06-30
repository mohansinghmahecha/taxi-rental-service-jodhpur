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
              Welcome to the official website of Rajasthan Holiday Trips. We are
              a tour and travels agency based in Rajasthan, India.
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
          <p>rajasthanholidaytrips@</p>
        </div>
        <div>
          <p>Contact Info</p>
          <p className="mt-10">
            F-121, Tulip Enclave, Central Spine Road, VDN, Jaipur, 302039.
          </p>
          <p>6377877505</p>
          <p>rajasthanholidaytrips@</p>
        </div>
      </div>

      <div className="bg-black text-white text-center">
        <p>© {d.getFullYear()} Taxi service in joddhpur</p>
      </div>
    </div>
  );
}
