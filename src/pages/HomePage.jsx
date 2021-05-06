import React from "react";
import Footer from "../components/Footer/Footer";
import Banner from "../components/Banner/Banner";
import InfoSection from "../components/InfoSection/InfoSection";
import Products from "../components/Products/Products";
import Team from "../components/Team/Team";
const HomePage = () => {
  return (
    <>
      <Banner />
      <InfoSection />
      <Products />
      <Team />
      <Footer />
    </>
  );
};

export default HomePage;
