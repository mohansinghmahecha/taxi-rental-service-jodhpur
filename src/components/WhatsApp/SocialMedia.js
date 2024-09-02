import React from 'react'
import insta from '../../assets/insta-logo.webp'
import whatsApp from '../../assets/whatsapp-logo.webp'
import { FaFacebook } from "react-icons/fa";

  

export default function SocialMedia() {
    function FbBoxOpen() {
        window.open(
          "https://www.facebook.com/share/AE3w4KDPuhyL7bF5/?mibextid=qi2Omg",
          "_blank"
        );
      }
      function intaBoxOpen() {
        window.open(
          "https://www.instagram.com/cartoursjodhpur/?igsh=OTkwZmVyYTc5c3Ru",
          "_blank"
        );
      }
    
      function whatsappopen() {
        window.open("https://wa.me/+919001502506", "_blank");
      }
  return (
    <div className="w-full flex justify-center items-center gap-4">
        <img src={insta}  className='w-10 h-10 hover:cursor-pointer'  alt="socialmedia-instagram" onClick={intaBoxOpen}/>
        <img src={whatsApp}  className='w-10 h-10 hover:cursor-pointer' alt="socialmedia-whatsapp" onClick={whatsappopen}/>
        <FaFacebook className='w-10 h-10 text-blue-400 hover:cursor-pointer' alt="facebook-logo-for-car-service-jodhpur" onClick={FbBoxOpen}/>

    </div>
  )
}
