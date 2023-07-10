import React from "react";
import Header from "./Header/Header";
import Banner from "./Banner/Banner";
import Featured from "./FeaturedSection/Featured";
import Service from "./Service/Service";
import Sponsor from "./Sponsor/Sponsor";
import Testimonial from "./Testimonial/Testimonial";
import NewsLetter from "./NewsLetter/NewsLetter";
import Footer from "./Footer/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Featured />
      <Service />
      <Sponsor />
      <Testimonial />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default Home;
