import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Example } from "/workspace/inforMate/src/front/js/component/Modal.js";

//coment test dummie changes
export const Navbar = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-info sticky-top">
      <Link to="/">
        <h6>InforMATE</h6>
      </Link>

      <div
        className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex flex-row-reverse"
        id="navbarTogglerDemo02"
      >
        <ul className="navbar-nav ml-auto">
          <li className="nav-item ">
            <Link to="/hotels">
              <div>
                <button className="rounded-pill btn btn-outline-secondary">
                  Hotels
                </button>
              </div>
            </Link>
          </li>
          <li className="nav-item ">
            <Link to="/restaurants">
              <button className="rounded-pill btn btn-outline-secondary">
                Restaurants
              </button>
            </Link>
          </li>
          <li className="nav-item ">
            <Link to="/flights">
              <button className="rounded-pill btn btn-outline-secondary">
                Flights
              </button>
            </Link>
          </li>
          <div className="App">
            <button
              className="openModalBtn btn btn rounded-pill btn-outline-secondary"
              onClick={() => {
                setModalOpen(true);
              }}
            >
              {" "}
              Login{" "}
            </button>
            {modalOpen && <Modal setOpenModal={setModalOpen} />}
          </div>
        </ul>
      </div>
    </nav>
  );
};
