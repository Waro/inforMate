import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Example } from "./Modal";
import "../../styles/home.css";
//coment test dummie changes
export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-info sticky-top">
        <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2 ">
          <Link to="/">
            <a className="navbar-brand p-3" href="#">
              InforMATE
            </a>
          </Link>
        </div>
        <div
          className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex flex-row-reverse"
          id="navbarTogglerDemo02"
        >
          <ul className="navbar-nav ml-auto">
            <li className="nav-item ">
              <Link to="/hotels">
                <a
                  className=" btn btn-outline-secondary rounded-pill "
                  aria-current="page"
                  href="#"
                >
                  Hotels
                </a>
              </Link>
            </li>
            <li className="nav-item ">
              <Link to="/restaurants">
                <a
                  className="btn btn-outline-secondary rounded-pill"
                  aria-current="page"
                  href="#"
                >
                  Restaurants
                </a>
              </Link>
            </li>
            <li className="nav-item ">
              <Link to="/fights">
                <a
                  className="btn btn-outline-secondary rounded-pill"
                  aria-current="page"
                  href="#"
                >
                  Flights
                </a>
              </Link>
            </li>
            <div className="mx-3  ">
              <Example />
            </div>
          </ul>
        </div>
      </nav>
    </>
  );
};
