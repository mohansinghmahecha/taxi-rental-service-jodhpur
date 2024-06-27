import React from 'react'; // Import React for JSX syntax
import img1 from '../../asserts/junagarh-fort-bikaner-rajasthan-1024x733-1.jpg'; // Corrected path (assets)
import img2 from '../../asserts/premium_photo-1661962428918-6a57ab674e23.jpg'; // Corrected path (assets)
import '../slider/ImageSlider.css'
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";

export default function CustomSlider() {
    const sliderData = [
        {
            img: img1,
            heading: "Welcome to JCR Cab & Car Rental Rajasthan ", // Corrected typos
            desc: "This is Main"
        },
        {
            img: img2,
            heading: "Heading Second",
            desc: "Second Description"
        },
        {
            img: img1,
            heading: "Three",
            desc: "Three Description"
        }

    ];

    return (
        <div className="full-width-slider">

            <div className="slider-container">
                <div > <FaAngleLeft className='absolute left-0 top-80 z-10 w-[100px] h-[100px]' /></div>

                <div> <FaAngleRight className='absolute right-0 top-80 z-10 w-[100px] h-[100px] ' /></div>

                {sliderData.map((item, index) => (
                    <div key={index} className="slide">
                        <img src={item.img} alt="Full Width Image" />
                        <div className="content-wrapper"> {/* New wrapper for heading and desc */}
                            <p className="heading text-6xl font-medium text-white">{item.heading}</p>
                            <p className="desc text-2xl font-normal text-white">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
