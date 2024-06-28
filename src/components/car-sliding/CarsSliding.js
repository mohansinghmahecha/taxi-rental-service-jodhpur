
export default function CarsSliding() {
  const carData = [
    {
      id: 1,
      img: 'https://xpd0c6.p3cdn1.secureserver.net/wp-content/uploads/2020/08/innova_crysta-400x300-1.jpg?time=1719520026',
      Name: 'Innova Crysta',
      Occupancy: '6/7',
      InsideCity: '8h/80km,3000rs-12h/100km,3500rs',
      Outsidestation: "17rs/km {300km daily}",
      Drivernightcharge: '300rs',
    },
    {
      id: 2,
      img: 'https://xpd0c6.p3cdn1.secureserver.net/wp-content/uploads/2020/08/Untitled-1-1.png?time=1719520026',
      Name: 'Toyota Innova',
      Occupancy: '6/7',
      InsideCity: '8h/80km,3000rs-12h/100km,3500rs',
      Outsidestation: "17rs/km {300km daily}",
      Drivernightcharge: '300rs',
    },
    {
      id: 2,
      img: 'https://xpd0c6.p3cdn1.secureserver.net/wp-content/uploads/2020/08/Untitled-1-1.png?time=1719520026',
      Name: 'Toyota Innova',
      Occupancy: '6/7',
      InsideCity: '8h/80km,3000rs-12h/100km,3500rs',
      Outsidestation: "17rs/km {300km daily}",
      Drivernightcharge: '300rs',
    },
    {
      id: 2,
      img: 'https://xpd0c6.p3cdn1.secureserver.net/wp-content/uploads/2020/08/Untitled-1-1.png?time=1719520026',
      Name: 'Toyota Innova',
      Occupancy: '6/7',
      InsideCity: '8h/80km,3000rs-12h/100km,3500rs',
      Outsidestation: "17rs/km {300km daily}",
      Drivernightcharge: '300rs',
    },
    {
      id: 2,
      img: 'https://xpd0c6.p3cdn1.secureserver.net/wp-content/uploads/2020/08/Untitled-1-1.png?time=1719520026',
      Name: 'Toyota Innova',
      Occupancy: '6/7',
      InsideCity: '8h/80km,3000rs-12h/100km,3500rs',
      Outsidestation: "17rs/km {300km daily}",
      Drivernightcharge: '300rs',
    },
    {
      id: 2,
      img: 'https://xpd0c6.p3cdn1.secureserver.net/wp-content/uploads/2020/08/Untitled-1-1.png?time=1719520026',
      Name: 'Toyota Innova',
      Occupancy: '6/7',
      InsideCity: '8h/80km,3000rs-12h/100km,3500rs',
      Outsidestation: "17rs/km {300km daily}",
      Drivernightcharge: '300rs',
    },
  ];

  return (
    <div>
      <div className="constainer w-[90%] flex h-auto flex-wrap justify-start gap-10 ml-[130px] p-4">
        {carData.map((item, index) => (
          <div key={index} className=" border-red-500 block rounded-lg shadow-md">
            <img src={item.img} style={{ objectFit: 'cover' , padding: '10px'}} />
            <div className="block p-4 ">
            
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