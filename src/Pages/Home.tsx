import React, { useEffect } from "react";
import Header from "../Components/Header";
import FAQ from "../Components/FAQ";
import FeaturesSection from "../Components/FeaturesSection";
import Footer from "../Components/Footer";
import HeroSection from "../Components/HeroSection";
import PocketSection from "../Components/PocketSection";
import WhoWeAre from "../Components/WhoWeAre";
import WhyChooseUs from "../Components/WhyChooseUs";

const Home: React.FC = () => {
  useEffect(() => {
    // Scroll logic to add/remove class from header
    const handleScroll = () => {
      const header = document.getElementById("allish-header");
      if (header) {
        if (window.scrollY > 70) {
          header.classList.add("test");
        } else if (window.scrollY < 10) {
          header.classList.remove("test");
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Header />
      <HeroSection />
      <PocketSection />
      <FeaturesSection />
      <WhoWeAre />
      <WhyChooseUs />
      <FAQ />
      <Footer />
    </>
  );
};

export default Home;
