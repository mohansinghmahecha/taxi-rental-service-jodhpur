import "./CarSliding.css";
import innova_crysta from "../../assets/cars-details/innova_crysta.jpg";
import swiftDezire from "../../assets/cars-details/SWIFT-DZIRE.jpg";
import tempo1 from "../../assets/cars-details/TEMPO-TRAVELLER1.jpg";
import tempo2 from "../../assets/cars-details/TEMPO-TRAVELLER.jpg";
import etios from "../../assets/cars-details/TOYOTA-ETIOS.png";
import innova from "../../assets/cars-details/TOYOTA-INNOVA.png";

export default function CarsSliding() {
  const carData = [
    {
      id: 1,
      img: innova_crysta,
      Name: "INNOVA CRYSTA",
      Occupancy: "6/7",
      InsideCity: "8h/80km,3000rs-12h/100km,3500rs",
      Outsidestation: "17rs/km {300km daily}",
      Drivernightcharge: "300rs",
    },
    {
      id: 2,
      img: innova,
      Name: "TOYOTA INNOVA",
      Occupancy: "6/7",
      InsideCity: "8h/80km,3000rs-12h/100km,3500rs",
      Outsidestation: "17rs/km {300km daily}",
      Drivernightcharge: "300rs",
    },
    {
      id: 3,
      img: etios,
      Name: "TOYOTA ETIOS",
      Occupancy: "4",
      InsideCity: "8h/80km, 2000rs-12h/100km,2400rs",
      Outsidestation: "11rs/km {300km daily}",
      Drivernightcharge: "300rs",
    },
    {
      id: 4,
      img: swiftDezire,
      Name: "SWIFT DZIRE",
      Occupancy: "4",
      InsideCity: "8h/80km, 2000rs-12h/100km,2400rs",
      Outsidestation: "11rs/km {300km daily}",
      Drivernightcharge: "300rs",
    },
    {
      id: 5,
      img: tempo1,
      Name: "TEMPO TRAVELLER",
      Occupancy: "12",
      InsideCity: "8h/80km,4500rs-12h/100km,4500rs",
      Outsidestation: "25rs per km {300km daily}",
      Drivernightcharge: "300rs",
    },
    {
      id: 6,
      img: tempo2,
      Name: "TEMPO TRAVELLER",
      Occupancy: "17",
      InsideCity: "8h/80km,4500rs-12h/100km,5500rs",
      Outsidestation: "27rs per km {300km daily}",
      Drivernightcharge: "300rs",
    },
  ];

  return (
    <div className="main">
      <div className="constainer flex flex-wrap  gap-8  p-4 box ">
        {carData.map((item, index) => (
          <div key={index} className=" block rounded-lg shadow-md ">
            <img
              src={item.img}
              alt={item.img}
              style={{
                objectFit: "cover",
                padding: "10px",
                display: "flex",
                width: "auto",
                height: "200px",
                margin: "auto",
              }}
            />
            <div className="block p-4 text-orange-400">
              <p className="font-bold text-center text-xl"> {item.Name}</p>
            </div>

            <div className="flex justify-center p-2 border border-gray-400 rounded-tl-lg rounded-tr-lg">
              <p className="text-center">Occupancy:</p>
              <p className="">{item.Occupancy}</p>
            </div>

            <div className="flex text-start  p-2 border border-gray-400">
              <p className="font-bold">InsideCity:&nbsp;</p>
              <p>{item.InsideCity}</p>
            </div>

            <div className="flex text-start p-2 border border-gray-400">
              <p className="text-start ">Outsidestation:&nbsp;</p>
              <p> {item.Outsidestation}</p>
            </div>

            <div className="flex text-start p-2 border border-gray-400 rounded-bl-lg rounded-br-lg">
              <p className="text-start ">Drivernightcharge:&nbsp;</p>
              <p> {item.Drivernightcharge}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
