import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import bootstrap from "bootstrap";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="left mt-5 body">
      <h1>InforMate</h1>
      <div className="card-container">
        <div className="row">
          <div className="row md-4">
            <div class="card">
              <img
                src="https://www.travelplusstyle.com/wp-content/gallery/cache/28302__940x_san-deluxeroomsplunge-slider-03.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <a href="#" class="btn btn-outline-secondary">
                  Hotels
                </a>
              </div>
            </div>

            <div class="card">
              <img
                src="https://lifebeyondsportmedia.com/bestanden/Most-Luxurious-restaurants/Nautika_restaurant_800_x600.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <a href="#" class="btn btn-outline-secondary">
                  Restaurants
                </a>
              </div>
            </div>

            <div class="card">
              <img
                src="https://media.istockphoto.com/photos/passenger-airplane-flying-above-clouds-during-sunset-picture-id155439315?k=20&m=155439315&s=612x612&w=0&h=BvXCpRLaP5h1NnvyYI_2iRtSM0Xsz2jQhAmZ7nA7abA="
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <a href="#" class="btn btn-outline-secondary">
                  Flights
                </a>
              </div>
            </div>

            <div class="card">
              <img
                src="https://media.istockphoto.com/photos/passenger-airplane-flying-above-clouds-during-sunset-picture-id155439315?k=20&m=155439315&s=612x612&w=0&h=BvXCpRLaP5h1NnvyYI_2iRtSM0Xsz2jQhAmZ7nA7abA="
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <a href="#" class="btn btn-outline-secondary">
                  InforMATE Trip
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
