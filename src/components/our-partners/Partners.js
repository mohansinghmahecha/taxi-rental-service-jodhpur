import "./Partner.css";
import oyo from "../../assets/oyo.png";
import { Slide } from "react-slideshow-image";

export default function Partners() {
  const partnersData = [
    { img: oyo },
    { img: "https://www.jcrcab.com/wp-content/themes/JCR_CAB/images/rentalcars-com-vector-art-png-clip-art.png" },
    { img: oyo },
    { img: "https://www.jcrcab.com/wp-content/themes/JCR_CAB/images/TA_logo_primary_v2.svg" },
    { img: oyo },
    { img: oyo },
    { img: oyo },
  ];

  return (
    <div className="p-20 bg-orange-500 mt-0">
      <h2 className="mt-2 text-3xl font-semibold text-center p-8">
        Our Partners
      </h2>
      <div className="box-con">
        <Slide autoplay={false} arrows={false}>
        <div className="new-box  ">
          
       
          {partnersData.map((items, key) => (
            <img src={items.img} alt={items.img} key={key} width={180} height={46} /> // Add key prop
          ))}
        </div>
        </Slide>
       
      </div>
    </div>
  );
}
