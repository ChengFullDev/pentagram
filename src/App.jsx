import { useState, useEffect, useRef } from "react";

import "./App.css";
import "./components/RetrospectiveSwiper.css";
import Header from "./components/Header";
import StickyHeader from "./components/StickyHeader";
import SvgCollections from "./components/SvgCollections";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
import Section6 from "./components/Section6";
import Section7 from "./components/Section7";
import Section8 from "./components/Section8";

import Footer from "./components/Footer";
import Section9 from "./components/Section9";
import HeroSection from "./components/HeroSection";

function App() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  // Close mobile nav when search opens
  useEffect(() => {
    if (isSearchOpen) {
      setIsMobileNavOpen(false);
    }
  }, [isSearchOpen]);

  // Close search when mobile nav opens
  useEffect(() => {
    if (isMobileNavOpen) {
      setIsSearchOpen(false);
    }
  }, [isMobileNavOpen]);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <div className="w-full">
      <SvgCollections />
      <Header />
      <StickyHeader />

      <div className="wrapper">
        <main className="content">
          <div id="pjax">
            <div className="pjax__container" data-namespace="home">
              <HeroSection />
              <Section1 />
              <Section2 />
              <Section3 />
              <Section4 />
              <Section5 />
              <Section6 />
              <Section7 />
              <Section8 />
              <Section9 />
            </div>
          </div>

          <Footer />
        </main>
      </div>
    </div>
  );
}

export default App;
