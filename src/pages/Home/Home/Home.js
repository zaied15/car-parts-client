import React from "react";
import Banner from "../Banner/Banner";
import BusinessSummery from "../BusinessSummery/BusinessSummery";
import Contact from "../Contact/Contact";
import FeaturedParts from "../FeaturedParts/FeaturedParts";
import GetQuote from "../GetQoute/GetQuote";
import Reviews from "../Reviews/Reviews";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <FeaturedParts></FeaturedParts>
      <BusinessSummery></BusinessSummery>
      <Reviews></Reviews>
      <GetQuote></GetQuote>
      <Contact></Contact>
    </div>
  );
};

export default Home;
