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
import ContectUs from "./components/contect-us/ContectUs.js";
import Floating from "./components/WhatsApp/Floating.js";
import SeightSeenPage from "./components/sightSeensPage/SightSeenPage.js";
import Reviews from "./components/small-containers/Reviews.js";
import OneWayTaxi from "./components/one-way-taxi/OneWayTaxi.js";
import RefundPolicy from "./components/important/RefundPolicy.js";
import PrivacyPolicy from "./components/important/PrivacyPolicy.js";
import CancilationPolicy from "./components/important/CancilationPolicy.js";
import JodhpurBlog from "./components/blogs/jodhpur/JodhpurBlog.js";

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
                <LocationOfffer /> {/* Popular Destinations */}
                <NormalParagraph />
                <Reviews />
                <Partners />
              </>
            }
          />
          <Route path="/onewaytaxi/:cityName" element={<SeightSeenPage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contect-us" element={<ContectUs />} />
          <Route
            path="/taxi-services/:LocationName"
            element={<DetailedInfo />}
          />
          <Route path="/one-way-taxi" element={<OneWayTaxi />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/priviacy-policy" element={<PrivacyPolicy />} />
          <Route path="/cancellation-policy" element={<CancilationPolicy />} />
          {/* blog routes */}
          <Route path="/car-rent-jodhpur" element={<JodhpurBlog />} />

          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
      <Floating />
    </BrowserRouter>
  );
}
