import "./App.css";
import React, { Suspense, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Intro from "./components/introduction/Intro";
import MainNevbar from "./components/navbar/MainNevbar";
import OurPackages from "./components/our-packages/OurPackages";
import SlidingImage from "./components/slider/SlidingImage";
import AboutUs from "./components/about-us/AboutUs.js";
import Footer from "./components/footer/Footer.js";
import LocationOfffer from "./browse-location/LocationOffer.js";
import Partners from "./components/our-partners/Partners.js";
import NotFound from "./components/not-found/NotFound.js";
import NormalParagraph from "./components/small-containers/NormalParagraph.js";
import ContectUs from "./components/contect-us/ContectUs.js";
import Floating from "./components/WhatsApp/Floating.js";
import Reviews from "./components/small-containers/Reviews.js";
import RefundPolicy from "./components/important/RefundPolicy.js";
import PrivacyPolicy from "./components/important/PrivacyPolicy.js";
import CancilationPolicy from "./components/important/CancilationPolicy.js";
import JodhpurBlog from "./components/blogs/jodhpur/JodhpurBlog.js";
import JaisalmerBlog from "./components/blogs/jaisalmer/JaisalmerBlog.js";
import PushkatBlog from "./components/blogs/pushkar/PushkatBlog.js";
import DelhiBlog from "./components/blogs/delhi/DelhiBlog.js";
import ScrollToTop from "./components/ScrollToTop.js";
import TermAndConsition from "./components/important/TermAndConsition.js";
import SocialMedia from "./components/WhatsApp/SocialMedia.js";
import ReactGA from "react-ga4";
import MostVisitedPlaceRajasthan from "./components/blogs/most-visited-place/MostVisitedPlaceRajasthan.js";

// Lazy load components
const OneWayTaxi = React.lazy(() =>
  import("./components/one-way-taxi/OneWayTaxi.js")
);
const DetailedInfo = React.lazy(() =>
  import("./components/taxi-services/DetailedInfo.js")
);
const SeightSeenPage = React.lazy(() =>
  import("./components/sightSeensPage/SightSeenPage.js")
);

export default function App() {
  // Initialize Google Analytics
  useEffect(() => {
    const Trackingid = "G-HM0J366CTJ";
    ReactGA.initialize(Trackingid);
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, []);

  return (
    <BrowserRouter>
      <div className="bg-white">
        <MainNevbar />
        <ScrollToTop />

        <Routes>
          <Route
            path="/"
            element={
              <>
              {/* sliding image */}
                <SlidingImage />
                {/* second page content */}
                <Intro />
                {/* only social media icons */}
                <SocialMedia />
                {/* showing details of available cars */}
                <OurPackages />
                {/* Popular Destinations */}
                <LocationOfffer /> 
                {/* normal text -we are available */}
                <NormalParagraph />
                {/* review component */}
                <Reviews />
                {/* our all partner information */}
                <Partners />
              </>
            }
          />
          <Route
            path="/onewaytaxi/:cityName"
            element={
              <Suspense fallback={<div className="text-3xl font-bold text-center">Loading... Page</div>}>
                <SeightSeenPage />
              </Suspense>
            }
          />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contect-us" element={<ContectUs />} />
          <Route
            path="/taxi-services/:LocationName"
            element={
              <Suspense fallback={<div>Loading Taxi Service Details...</div>}>
                <DetailedInfo />
              </Suspense>
            }
          />
          <Route
            path="/one-way-taxi"
            element={
              <Suspense fallback={<div>Loading One Way Taxi...</div>}>
                <OneWayTaxi />
              </Suspense>
            }
          />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/priviacy-policy" element={<PrivacyPolicy />} />
          <Route path="/cancellation-policy" element={<CancilationPolicy />} />
          <Route path="/term-and-conditions" element={<TermAndConsition />} />
          {/* Blog routes */}
          <Route path="/car-rent-jodhpur" element={<JodhpurBlog />} />
          <Route path="/car-rent-jaisalmer" element={<JaisalmerBlog />} />
          <Route path="/car-rent-pushkar" element={<PushkatBlog />} />
          <Route path="/car-rent-delhi" element={<DelhiBlog />} />
          <Route path="/Most-Visited-Places-in-Rajasthan-Explore-with-Car-Tours-Jodhpur" element={<MostVisitedPlaceRajasthan />} />
          {/* Catch-all route for 404 */}
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
      <Floating />
    </BrowserRouter>
  );
}
