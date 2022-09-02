import React from "react";
import { Link } from "react-router-dom";
//coment test dummie changes
export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light left">
      <Link to="/">
        <span className="navbar-brand mb-0 h1 left">InforMATE</span>
      </Link>
      <div className="bcontainer">
        <div className="ml-auto">
          <Link to="/hotels">
            <button type="button" class="btn btn-outline-secondary">
              Hotels
            </button>
          </Link>
          <Link to="/fights">
            <button type="button" class="btn btn-outline-secondary">
              Flights
            </button>
          </Link>
          <Link to="/restaurants">
            <button type="button" class="btn btn-outline-secondary">
              Retaurants
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
