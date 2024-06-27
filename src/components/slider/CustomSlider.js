import React from 'react'; // Import React for JSX syntax
import img1 from '../../asserts/junagarh-fort-bikaner-rajasthan-1024x733-1.jpg'; // Corrected path (assets)
import img2 from '../../asserts/premium_photo-1661962428918-6a57ab674e23.jpg'; // Corrected path (assets)
import '../slider/ImageSlider.css'

export default function CustomSlider() {
    const sliderData = [
        {
            img: img1,
            heading: "Heading One", // Corrected typos
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
        <div className="custom-slider">
            {sliderData.map((item, index) => (
                <div key={index} className="slide">
                    <img src={item.img} alt={item.heading} /> {/* Added alt text */}
                    <p>{item.heading}</p>
                    <p>{item.desc}</p>
                </div>
            ))}
        </div>
    );
}
