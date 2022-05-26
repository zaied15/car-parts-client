import React from "react";
import { Link } from "react-router-dom";

const MyPortfolio = () => {
  return (
    <div className="h-screen">
      <h2 className="text-4xl text-primary font-bold mt-20 mb-10">
        MY PORTFOLIO
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body text-left">
            <h2 className="card-title text-primary">Md Anwar Zaied</h2>
            <p className="text-xl">
              <span className="my-2 inline-block">mda800@gmail.com</span>
              <br />
              M.Sc in statistics
            </p>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body text-left">
            <h2 className="card-title text-primary">My Skills</h2>
            <p className="text-xl">
              html5, css3, bootstrap, tailwindcss, react, nodejs,
              mongodb,firebase, heroku, netlify, daisyUI, react router, react
              query, axios, jwt
            </p>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body text-left">
            <h2 className="card-title text-primary">Live Projects</h2>
            <p className="text-xl">
              <Link to="https://car-parts-auth-a92ca.web.app/">
                https://car-parts-auth-a92ca.web.app/
              </Link>
              <br />
              <Link
                className="inline-block my-3"
                to="https://car-inventory-auth.web.app/"
              >
                https://car-inventory-auth.web.app/
              </Link>
              <br />
              <Link to="https://traveline-firebase-auth.web.app/">
                https://traveline-firebase-auth.web.app/
              </Link>
            </p>
          </div>
        </div>
      </div>
      {/* <div className="overflow-x-auto h-screen">
        <table className="table w-full text-xl">
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
      </div> */}
    </div>
  );
};

export default MyPortfolio;
