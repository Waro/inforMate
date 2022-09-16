import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import bootstrap from "bootstrap";

export const Home = () => {
  const { store, actions } = useContext(Context);
  //coment
  return (
    <div className="mt-0 body">
      <div>
        <h1 className="pagetitle">
          Start your <span className="navtitle"> InforMATE </span> Trip
        </h1>
      </div>
      <div className="card-container">
        <div className="card-group justify-content-center align-content-center">
          <div className="card">
            <img
              className="card-img-top"
              src="https://media.cntraveler.com/photos/62fff5f056e550cd4d97a221/master/w_2580%2Cc_limit/Monsieur%2520Didot%2520%25C2%25A9%2520Ioanna%2520Roufopoulou_ROOM%25206%2520THE%2520ODE%25201.jpg"
              alt="Card image cap"
            />
            <div className="card-body text-center">
              <a
                href="/hotels"
                className="btn  btn-outline-secondary  rounded-pill "
              >
                Hotels
              </a>
            </div>
          </div>
          <div className="card">
            <img
              className="card-img-top"
              src="https://media.cntraveler.com/photos/5bc8ec072383b345456ab323/master/pass/Prado__RC36688-EditRodrigo-Cardoso.jpg"
              alt="Card image cap"
            />
            <div className="card-body text-center">
              <a
                href="/restaurants"
                className="btn btn-outline-secondary  rounded-pill btn-outline-secondary"
              >
                Restaurants
              </a>
            </div>
          </div>
          <div className="card">
            <img
              className="card-img-top"
              src="https://media.istockphoto.com/photos/passenger-airplane-flying-above-clouds-during-sunset-picture-id155439315?k=20&m=155439315&s=612x612&w=0&h=BvXCpRLaP5h1NnvyYI_2iRtSM0Xsz2jQhAmZ7nA7abA="
              alt="Card image cap"
            />
            <div className="card-body  text-center">
              <a
                href="/flights"
                className="btn btn-outline-secondary  rounded-pill btn-outline-secondary"
              >
                Flights
              </a>
            </div>
          </div>
          <div className="card">
            <img
              className="card-img-top"
              src="https://media.istockphoto.com/photos/passenger-airplane-flying-above-clouds-during-sunset-picture-id155439315?k=20&m=155439315&s=612x612&w=0&h=BvXCpRLaP5h1NnvyYI_2iRtSM0Xsz2jQhAmZ7nA7abA="
              alt="Card image cap"
            />
            <div className="card-body text-center">
              <a
                href="/userview"
                className="btn btn-outline-secondary rounded-pill  btn-outline-secondary"
              >
                My trip
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
