import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import bootstrap from "bootstrap";

export const Flights = () => {
  const { store, actions } = useContext(Context);
  //coment
  return (
    <div className="mt-0 body">
      <div>
        <h1 className="pagetitle">
          <span className="navtitle"> Flights </span>
        </h1>
        <div class="container">
          <div class="card p-4 mt-5">
            <div class="row g-3">
              <div class="col-12 mb-4">
                <h4>Flight Booking</h4>
                <span class="text-muted">
                  Please make the payment to start enjoying all the features of
                  our premium plan as soon as possible
                </span>
              </div>
              <div class="col-12">
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="Roundtrip"
                    value="option1"
                  />
                  <label class="form-check-label" for="Roundtrip">
                    Roundtrip
                  </label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="Oneway"
                    value="option2"
                  />
                  <label class="form-check-label" for="Oneway">
                    One way
                  </label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="MultiCity"
                    value="option3"
                  />
                  <label class="form-check-label" for="MultiCity">
                    Multi-City
                  </label>
                </div>
              </div>
              <div class="col-lg-6 col-md-12">
                <div class="form-floating">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="FLYING FROM"
                  />
                  <label>FLYING FROM</label>
                </div>
              </div>
              <div class="col-lg-6 col-md-12">
                <div class="form-floating">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="FLYING TO"
                  />
                  <label>FLYING TO</label>
                </div>
              </div>
              <div class="col-lg-6 col-md-12">
                <div class="form-floating">
                  <input
                    type="date"
                    class="form-control"
                    placeholder="DEPARTING"
                  />
                  <label>DEPARTING</label>
                </div>
              </div>
              <div class="col-lg-6 col-md-12">
                <div class="form-floating">
                  <input
                    type="date"
                    class="form-control"
                    placeholder="RETURNING"
                  />
                  <label>RETURNING</label>
                </div>
              </div>
              <div class="col-lg-4 col-md-12">
                <div class="form-floating">
                  <select class="form-select">
                    <option selected="" hidden="">
                      Open this select menu
                    </option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                  <label>ADULTS(18+)</label>
                </div>
              </div>
              <div class="col-lg-4 col-md-12">
                <div class="form-floating">
                  <select class="form-select">
                    <option selected="" hidden="">
                      Open this select menu
                    </option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                  <label>CHILDREN(0-17)</label>
                </div>
              </div>
              <div class="col-lg-4 col-md-12">
                <div class="form-floating">
                  <select class="form-select">
                    <option selected="" hidden="">
                      Open this select menu
                    </option>
                    <option value="1">Economy</option>
                    <option value="2">Premium</option>
                    <option value="3">Business</option>
                  </select>
                  <label>TRAVEL CLASS</label>
                </div>
              </div>
              <div class="col-12 mt-4">
                <button class="btn btn-secondary text-uppercase" type="button">
                  Close
                </button>
                <button class="btn btn-primary text-uppercase" type="button">
                  SHOWN FLIGHTS<i class="fa fa-plane ms-3"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
