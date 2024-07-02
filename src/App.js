import "./App.css";
import Intro from "./components/introduction/Intro";
import MainNevbar from "./components/navbar/MainNevbar";
import OurPackages from "./components/our-packages/OurPackages";
import SlidingImage from "./components/slider/SlidingImage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./components/about-us/AboutUs.js";

import Footer from "./components/footer/Footer.js";
import DetailedInfo from "./components/taxi-services/DetailedInfo.js";
import LocationOfffer from "./browse-location/LocationOffer.js";
import Partners from "./components/our-partners/Partners.js";
import NotFound from "./components/not-found/NotFound.js";
import NormalParagraph from "./components/small-containers/NormalParagraph.js";
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
                {/* <LocationCard /> */}
                <LocationOfffer />
                <NormalParagraph/>
                <Partners/>
                

                

              </>
            }
          />
          <Route path="/about-us" element={<AboutUs />} />
          <Route
            path="/taxi-services/:LocationName"
            element={<DetailedInfo />}
          />
          <Route path="/*" element={<NotFound/>}/>
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}
