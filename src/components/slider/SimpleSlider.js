/* import React from 'react';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function SimpleSlider() {
    const images = [
        '../asserts/home-slider.jpg',
        '../../asserts/home-slider.jpg',
        '/asserts/home-slider.jpg',

    ]

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div>
            <Slider {...settings}>
                <div><h3>5</h3></div>
            </Slider>
        </div>

    )
} */

// src/ImageSlider.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from '../../asserts/Feature-City-Palace-Udaipur-Rajasthan.jpg'
import img2 from '../../asserts/home-slider.jpg'
import './ImageSlider.css'; // Import the CSS file



const images = [
    'https://cdn.pixabay.com/photo/2017/08/19/17/38/indian-traditional-2659269_1280.jpg',
    img1,
    img2,

]

const SimpleSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        default: true,
        draggable: false
    };

    return (
        <div className="slider-container">
            <div>
                <div  className=' absolute left-10 top-50 z-40'>
                <h1 >ok ok </h1>
                <p>luds fl sdlkj fskl fls jdflsdl fjlsj df sld fsd ljf lsdjf</p>
                </div>
                <div>
                <Slider {...settings}>
                    {images.map((image, index) => (
                        <div key={index}>
                            <img src={image} alt={`Slide ${index}`} className="slider-image" />
                        </div>
                    ))}
                </Slider>
                </div>
                
            </div>


        </div>
    );
};

export default SimpleSlider;
