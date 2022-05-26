import React from "react";
import { Link } from "react-router-dom";
import slide1 from "../../../images/slider/slider1.jpg";
import slide2 from "../../../images/slider/slider2.jpg";

const Banner = () => {
  return (
    <div
      className="hero"
      style={{
        backgroundImage: `url(${slide2})`,
        height: "500px",
      }}
    >
      <div className=""></div>
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-4xl font-bold">
            WE CAN FIND
            <br />
            SPARE PARTS OF
            <br />
            ANY CAR
          </h1>
          <Link to="/blog" className="btn btn-primary">
            LEARN MORE
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
