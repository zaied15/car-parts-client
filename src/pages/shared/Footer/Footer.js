import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const date = new Date();
  const getYear = date.getFullYear();
  return (
    <footer className="block lg:flex lg:justify-around bg-slate-800 mt-10 lg:items-center py-8">
      <div>
        <p className="text-white">
          &copy; {getYear} Pitstop, Car Parts Manufacturing Company. Developed
          by <Link to="https://facebook.com/zaied15">Zaied</Link>
        </p>
      </div>
      <div>
        <p>
          <span className="text-2xl">
            <Link to="#">
              <i className="fa-brands fa-facebook-square text-white"></i>
            </Link>
          </span>
          <span className="mx-2 text-2xl text-white">
            <Link to="#">
              <i className="fa-brands fa-twitter"></i>
            </Link>
          </span>
          <span className="text-2xl">
            <Link to="#">
              <i className="fa-brands fa-instagram-square text-white"></i>
            </Link>
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
