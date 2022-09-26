import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Example } from "./Modal";
import { Tripbtn } from "./Buttons";
import "../../styles/home.css";
//coment test dummie changes
export const Navbar = () => {
  const [signup, setSignup] = useState();

  useEffect(() => {
    localStorage.getItem("token") ? setSignup(true) : setSignup(false);
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg  sticky-top">
        <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2 ">
          <Link to="/" className="brand">
            <a>InforMATE</a>
          </Link>
        </div>
        <div
          className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex flex-row-reverse"
          id="navbarTogglerDemo02"
        >
          <ul className="navbar-nav ml-auto">
            <li className="nav-item ">
              <Link to="/hotels">
                <button
                  className=" btn btn-outline-secondary rounded-pill "
                  aria-current="page"
                  href="#"
                >
                  Hotels
                </button>
              </Link>
            </li>
            <li className="nav-item ">
              <Link to="/restaurants">
                <button
                  className="btn btn-outline-secondary rounded-pill"
                  aria-current="page"
                >
                  Restaurants
                </button>
              </Link>
            </li>
            <li className="nav-item ">
              <Link to="/flights">
                <button
                  className="btn btn-outline-secondary rounded-pill"
                  aria-current="page"
                >
                  Flights
                </button>
              </Link>
            </li>
            {signup === true ? (
              <div className="mx-3">
                <Tripbtn />
              </div>
            ) : (
              <></>
            )}
            <div className="mx-3">
              <Example />
            </div>
          </ul>
        </div>
      </nav>
    </>
  );
};
