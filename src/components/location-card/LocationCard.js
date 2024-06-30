import testimag from "../../assets/car.jpg";
import "./Location.css";

export default function LocationCard() {
  return (
    <div>
      {/* <div class="w-full h-px bg-gray-200 border border-gray-200"></div> */}

      <p className="text-center text-4xl p-4 m-4 bg-orange-500 text-white rounded-full  font-extrabold ">
        Discover Rajasthan with Car Tours Jodhpur
      </p>

      <div className="flex-container  flex flex-wrap w-full h-full  gap-6  border container">
        {/* 1 */}
        <div className=" flex p-4 relative   ">
          <div className="w-[390px] h-auto shadow-lg p-4 rounded-lg ok">
            <div>
              <img
                src={testimag}
                alt=""
                style={{ objectFit: "cover", width: "100%" }}
              />
              <p className="text-center">Jodhpur</p>
              <span className="design">
                Jodhpur: Popular as the Sun City and the Blue city, Jodhpur is a
                well to do tourist destination which constitutes of many
                temples, forts, and Havelis. Some of the other tourist
                attractions of Jodhpur include Mandore gardens, Kaylana Lake,
                Shastri Circle, Masuria Hill Garden, Rao Jodha Desert Rock Park,
                etc
              </span>
            </div>
          </div>
        </div>

        <div className=" flex p-4 relative   ">
          <div className="w-[390px] h-auto shadow-lg p-4 rounded-lg ok">
            <div>
              <img
                src={testimag}
                alt=""
                style={{ objectFit: "cover", width: "100%" }}
              />
              <p className="text-center">Jodhpur</p>
              <span className="design">
                Jodhpur: Popular as the Sun City and the Blue city, Jodhpur is a
                well to do tourist destination which constitutes of many
                temples, forts, and Havelis. Some of the other tourist
                attractions of Jodhpur include Mandore gardens, Kaylana Lake,
                Shastri Circle, Masuria Hill Garden, Rao Jodha Desert Rock Park,
                etc
              </span>
            </div>
          </div>
        </div>

        <div className=" flex p-4 relative   ">
          <div className="w-[390px] h-auto shadow-lg p-4 rounded-lg ok">
            <div>
              <img
                src={testimag}
                alt=""
                style={{ objectFit: "cover", width: "100%" }}
              />
              <p className="text-center">Jodhpur</p>
              <span className="design">
                Jodhpur: Popular as the Sun City and the Blue city, Jodhpur is a
                well to do tourist destination which constitutes of many
                temples, forts, and Havelis. Some of the other tourist
                attractions of Jodhpur include Mandore gardens, Kaylana Lake,
                Shastri Circle, Masuria Hill Garden, Rao Jodha Desert Rock Park,
                etc
              </span>
            </div>
          </div>
        </div>

        <div className=" flex p-4 relative   ">
          <div className="w-[390px] h-auto shadow-lg p-4 rounded-lg ok">
            <div>
              <img
                src={testimag}
                alt=""
                style={{ objectFit: "cover", width: "100%" }}
              />
              <p className="text-center">Jodhpur</p>
              <span className="design">
                Jodhpur: Popular as the Sun City and the Blue city, Jodhpur is a
                well to do tourist destination which constitutes of many
                temples, forts, and Havelis. Some of the other tourist
                attractions of Jodhpur include Mandore gardens, Kaylana Lake,
                Shastri Circle, Masuria Hill Garden, Rao Jodha Desert Rock Park,
                etc
              </span>
            </div>
          </div>
        </div>

        <div className=" flex p-4 relative   ">
          <div className="w-[390px] h-auto shadow-lg p-4 rounded-lg ok">
            <div>
              <img
                src={testimag}
                alt=""
                style={{ objectFit: "cover", width: "100%" }}
              />
              <p className="text-center">Jodhpur</p>
              <span className="design">
                Jodhpur: Popular as the Sun City and the Blue city, Jodhpur is a
                well to do tourist destination which constitutes of many
                temples, forts, and Havelis. Some of the other tourist
                attractions of Jodhpur include Mandore gardens, Kaylana Lake,
                Shastri Circle, Masuria Hill Garden, Rao Jodha Desert Rock Park,
                etc
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
