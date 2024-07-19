import ownerImage from "../../assets/owner-clear.png";
import instastory from "../../assets/InstagramStory.svg";
import "./AboutUs.css";
import SmallAboutUs from "../small-containers/SmallAboutUs";

export default function AboutUs() {
  return (
   
    <div>
         <div className="w-full img-gradient-file p-4">
      <div className="text-center mt-10">
        <p className="text-5xl font-extralight">Know About Us</p>
        <p>Let's GoOn Drive</p>
      </div>

      <div className="h-auto p-4 w-full grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-4 justify-start ">
        <img
          src={ownerImage}
          alt="Owner"
          style={{ objectFit: "contain", overflow: "hidden" , height: '300px'}}
          className="rounded-full btn-gradient-2 p-4 mt-5 items-start sm:w-full sm:h-64 sm:p-0"
        />

        <div className="bg-white w-full p-4 text-center">
          <p className="font-bold text-4xl">Our Story</p>
          <p className="mt-10">
            Riskified aims to empower your business to unleash ecommerce growth
            by outsmarting risk. Ecommerce fraud teams play a crucial role in
            enabling their company’s growth and profitability. To do so, you
            require an enterprise-grade fraud and risk intelligence solution
            that can efficiently combat fraud, curb policy abuse, and boost
            revenue to the max. The problem is, the speed, scale, and
            sophistication of fraud and abuse can stretch the team and profit
            margins thin. We believe risk should never keep you from growing
            your business with confidence. That’s why we don’t just promise
            great business outcomes–we are accountable for them. As part of the
            strongest network of merchant brands that rely on our accurate
            machine learning approach, you can shift fraud chargeback liability
            and optimize performance according to your risk tolerance and
            business goals. Instead of feeling uncertain, you gain confidence
            and an accountable partner to your success. Take risk off the table
            with Riskified, and put your business on the sure path to growth and
            profitability.
          </p>
        </div>
      </div>

      {/* image only for the mobile*/}
      <div><img id="img-insta" src={instastory} alt="" /></div>

     
    </div>
    <SmallAboutUs />
    </div>
  );
}
