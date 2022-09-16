import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import hotelCard from "../component/restaurantCard";

export const Hotels = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className=" mt-0 body">
      <h1 className="pagetitle">
        InforMATE <span className="navtitle"> HOTELS </span>
      </h1>
      <div className="card container py-3">
        <div className="row ">
          <div className="col-md-4">
            <img
              alt="Card image cap"
              class="card-img-top img-fluid"
              src="http://cdn.cnn.com/cnnnext/dam/assets/181003185114-05-italy-beautiful-hotels-le-sirenuse.jpg"
            />
          </div>
          <div className="col-md-8 px-3">
            <div className="card-block px-3">
              <h4 className="card-title">Hotel Info</h4>
              <p className="card-text">
                Hotel description ( At vero eos et accusamus et iusto odio
                dignissimos ducimus qui blanditiis praesentium voluptatum
                deleniti atque corrupti quos dolores et quas molestias excepturi
                sint occaecati cupiditate non provident, similique sunt in culpa
                qui officia deserunt mollitia animi, id est laborum et dolorum
                fuga. Et harum quidem rerum facilis est ){" "}
              </p>
              <p className="card-text">
                PARKING | WIFI | SWIMINGPOOL | TENIS COURT | BEACH
              </p>
              <a href="#" className="rounded-pill btn btn-outline-secondary">
                Favorite
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="card container py-3">
        <div className="row ">
          <div className="col-md-4">
            <img
              alt="Card image cap"
              class="card-img-top img-fluid"
              src="http://cdn.cnn.com/cnnnext/dam/assets/181003185114-05-italy-beautiful-hotels-le-sirenuse.jpg"
            />
          </div>
          <div className="col-md-8 px-3">
            <div className="card-block px-3">
              <h4 className="card-title">Hotel Info</h4>
              <p className="card-text">
                Hotel description ( At vero eos et accusamus et iusto odio
                dignissimos ducimus qui blanditiis praesentium voluptatum
                deleniti atque corrupti quos dolores et quas molestias excepturi
                sint occaecati cupiditate non provident, similique sunt in culpa
                qui officia deserunt mollitia animi, id est laborum et dolorum
                fuga. Et harum quidem rerum facilis est ){" "}
              </p>
              <p className="card-text">
                PARKING | WIFI | SWIMINGPOOL | TENIS COURT | BEACH
              </p>
              <a href="#" className="rounded-pill btn btn-outline-secondary">
                Favorite
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="card container py-3">
        <div className="row ">
          <div className="col-md-4">
            <img
              alt="Card image cap"
              class="card-img-top img-fluid"
              src="https://secure.s.forbestravelguide.com/img/properties/the-maybourne-beverly-hills/the-maybourne-beverly-hills-exterior.jpg"
            />
          </div>
          <div className="col-md-8 px-3">
            <div className="card-block px-3">
              <h4 className="card-title">Hotel Info</h4>
              <p className="card-text">
                Hotel description ( At vero eos et accusamus et iusto odio
                dignissimos ducimus qui blanditiis praesentium voluptatum
                deleniti atque corrupti quos dolores et quas molestias excepturi
                sint occaecati cupiditate non provident, similique sunt in culpa
                qui officia deserunt mollitia animi, id est laborum et dolorum
                fuga. Et harum quidem rerum facilis est ){" "}
              </p>
              <p className="card-text">
                PARKING | WIFI | RESERVATION | EASY TO GO
              </p>
              <a href="#" className="rounded-pill btn btn-outline-secondary">
                Favorite
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
