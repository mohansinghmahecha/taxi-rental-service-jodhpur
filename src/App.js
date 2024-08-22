import "./App.css";
import React, { Suspense } from "react";
import Intro from "./components/introduction/Intro";
import MainNevbar from "./components/navbar/MainNevbar";
import OurPackages from "./components/our-packages/OurPackages";
import SlidingImage from "./components/slider/SlidingImage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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

export default function App() {
  // Lazy load the OneWayTaxi component
  const OneWayTaxi = React.lazy(() =>
    import("./components/one-way-taxi/OneWayTaxi.js")
  );

  // details js lazy load
  const DetailedInfo = React.lazy(() =>
    import("./components/taxi-services/DetailedInfo.js")
  );
  // sight seen
  const SeightSeenPage = React.lazy(() =>
    import("./components/sightSeensPage/SightSeenPage.js")
  );
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
                <SlidingImage />
                <Intro />
                <SocialMedia/>
                <OurPackages />
                <LocationOfffer /> {/* Popular Destinations */}
                <NormalParagraph />
                <Reviews />
                <Partners />
              </>
            }
          />
          <Route
            path="/onewaytaxi/:cityName"
            element={
              <Suspense fallback={<div>Our Schenious Are Loading</div>}>
                <SeightSeenPage />
              </Suspense>
            }
          />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contect-us" element={<ContectUs />} />
          <Route
            path="/taxi-services/:LocationName"
            element={
              <Suspense fallback={<div>Loading.. Our Blog.</div>}>
                <DetailedInfo />
              </Suspense>
            } /* texi services in details */
          />
          <Route
            path="/one-way-taxi"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <OneWayTaxi />
              </Suspense>
            }
          />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/priviacy-policy" element={<PrivacyPolicy />} />
          <Route path="/cancellation-policy" element={<CancilationPolicy />} />
          <Route path="/term-and-conditions" element={<TermAndConsition />} />
          {/* blog routes */}
          <Route path="/car-rent-jodhpur" element={<JodhpurBlog />} />
          <Route path="/car-rent-jaisalmer" element={<JaisalmerBlog />} />
          <Route path="/car-rent-pushkar" element={<PushkatBlog />} />
          <Route path="/car-rent-delhi" element={<DelhiBlog />} />

          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
      <Floating />
    </BrowserRouter>
  );
}
