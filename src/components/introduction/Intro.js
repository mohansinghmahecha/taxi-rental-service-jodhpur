import smallcar from "../../assets/bdr.png";
import bigcar from "../../assets/car.jpg";
import "./Intro.css";

export default function Intro() {
  return (
    <div className=" m-10 grid-container">
      <div className=" paragraph ">
        <p className="mb-5 font-bold ">
          WELCOME TO JCR CAB & CAR RENTAL RAJASTHAN
        </p>
        <img src={smallcar} alt={smallcar} />
        <span className="paragraph">
          Are you planning to visit a city and do not want to follow the typical
          tourist-beaten part, or do you want to explore the untouched corners
          of your own city? Or perhaps, you have a business meeting in some
          other city? Or maybe looking to book a royal fleet for your wedding?
          If your query falls among any of them, look no further because JCR
          Cabs can be the solution! We have emerged as the one-stop solution for
          Cab Service in Rajasthan. Booking a Taxi in Rajasthan is no longer a
          hassle with our platform. We are known for our easy online booking
          services and round-the-clock availability. Personify the spirit of
          traveling as we help you carve a unique path through the city of your
          choice. From the golden sands of Jaisalmer to the bustling markets of
          Jodhpur, Hire a Cab in Rajasthan with JCR cabs and car Rental and see
          all the sites on your own schedule. JCR Cab offers cab services in
          India Like Taxi Service In Jodhpur, and Taxi Service In Jaipur.
        </span>
      </div>
      <div>
        <img src={bigcar} alt={bigcar} />
      </div>
    </div>
  );
}
