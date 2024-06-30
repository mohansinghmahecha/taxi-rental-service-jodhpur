import "./App.css";
import Intro from "./components/introduction/Intro";
import MainNevbar from "./components/navbar/MainNevbar";
import OurPackages from "./components/our-packages/OurPackages";
import SlidingImage from "./components/slider/SlidingImage";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AboutUs from "./components/about-us/AboutUs.js";
import LocationCard from "./components/location-card/LocationCard.js";

export default function App() {
  return (
    <BrowserRouter>
      <div className="bg-white">
        <MainNevbar />
       
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SlidingImage />
                <Intro />
                <OurPackages />
                <LocationCard/>
              </>
            }
          />
          <Route path="/about-us" element={<AboutUs />} />
      
        </Routes>
      </div>
    </BrowserRouter>
  );
}
