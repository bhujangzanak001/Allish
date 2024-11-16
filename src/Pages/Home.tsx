import React from "react";
import Header from "../Components/Header";
import FAQ from "../Components/FAQ";
import FeaturesSection from "../Components/FeaturesSection";
import Footer from "../Components/Footer";
import HeroSection from "../Components/HeroSection";
import PocketSection from "../Components/PocketSection";
import WhoWeAre from "../Components/WhoWeAre";
import WhyChooseUs from "../Components/WhyChooseUs";
import usePageTitle from "../Hooks/UsePageTitle";

const Home: React.FC = () => {
  usePageTitle("Allish");
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
