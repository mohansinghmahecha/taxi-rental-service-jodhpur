import "./Partner.css";
import oyo from "../../assets/oyo.png"

export default function Partners() {
  return (
    <div className="p-20 bg-cyan-300">
      <h2 className="mt-2 text-3xl font-semibold text-center p-8">our Parners</h2>
      <div className="box-con">
        <div className="new-box">
                <img src={oyo} style={{width: '150px', height:'200px'}}/>
                <img src={oyo} style={{width: '150px', height:'200px'}}/>
                <img src={oyo} style={{width: '150px', height:'200px'}}/>
                <img src={oyo} style={{width: '150px', height:'200px'}}/>
                <img src={oyo} style={{width: '150px', height:'200px'}}/>
                <img src={oyo} style={{width: '150px', height:'200px'}}/>
                <img src={oyo} style={{width: '150px', height:'200px'}}/>
                <img src={oyo} style={{width: '150px', height:'200px'}}/>
                <img src={oyo} style={{width: '150px', height:'200px'}}/>
                <img src={oyo} style={{width: '150px', height:'200px'}}/>
                <img src={oyo} style={{width: '150px', height:'200px'}}/>
        </div>
      </div>
    </div>
  );
}
