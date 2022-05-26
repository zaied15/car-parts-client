import React from "react";
import { Link } from "react-router-dom";

const MyPortfolio = () => {
  return (
    <div class="overflow-x-auto h-screen">
      <h2 className="text-4xl text-primary font-bold mt-20 mb-10">
        MY PORTFOLIO
      </h2>
      <table class="table w-full text-xl">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Education</th>
            <th>Skills</th>
            <th>Live Projects</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-primary">Md. Anwar Zaied</td>
            <td>mda800@gmail.com</td>
            <td className="text-primary">B.Sc and M.sc in Statistics</td>
            <td>
              html5, css3, bootstrap,
              <br /> tailwindcss, react, nodejs,
              <br />
              mongodb,firebase, heroku,
              <br /> netlify, daisyUI, react router, <br />
              react query, axios, jwt
            </td>
            <td>
              <Link
                className="text-primary"
                to="https://car-parts-auth-a92ca.web.app/"
              >
                https://car-parts-auth-a92ca.web.app/
              </Link>
              <br />
              <Link
                className="inline-block my-3 text-primary"
                to="https://car-inventory-auth.web.app/"
              >
                https://car-inventory-auth.web.app/
              </Link>
              <br />
              <Link
                className="text-primary"
                to="https://traveline-firebase-auth.web.app/"
              >
                https://traveline-firebase-auth.web.app/
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MyPortfolio;
