import React from "react";
import { Link } from "react-router-dom";
import slide1 from "../../../images/slider/slider1.jpg";
import slide2 from "../../../images/slider/slider2.jpg";

const Banner = () => {
  return (
    <div
      class="hero"
      style={{
        backgroundImage: `url(${slide2})`,
        height: "500px",
      }}
    >
      <div class=""></div>
      <div class="hero-content text-center">
        <div class="max-w-md">
          <h1 class="mb-5 text-4xl font-bold">
            WE CAN FIND
            <br />
            SPARE PARTS OF
            <br />
            ANY CAR
          </h1>
          <Link to="/blog" class="btn btn-primary">
            LEARN MORE
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
