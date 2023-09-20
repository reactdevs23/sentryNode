import React from "react";
import HeroSection from "../../components/Home/HeroSection/HeroSection";
import Partners from "../../components/Home/Partners/Partners";
import ExperienceTheBenefit from "../../components/Home/ExperienceTheBenefit";
import KeyFeatures from "../../components/Home/KeyFeatures/KeyFeatures";
import LatestExpertise from "../../components/Home/LatestExpertise/LatestExpertise";
import StartDeploying from "../../components/Home/StartDeploying/StartDeploying";
import Footer from "../../components/Home/Footer/Footer";

import Header from "../../components/Home/Header/Header";

const Home = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <Partners />
      <ExperienceTheBenefit />
      <KeyFeatures />
      <StartDeploying />
      <LatestExpertise />
      <Footer />
    </>
  );
};

export default Home;
