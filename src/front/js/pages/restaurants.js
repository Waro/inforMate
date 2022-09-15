import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import  RestaurantCard  from "../component/restaurantCard"

export const Restaurants = () => {
  const { store, actions } = useContext(Context);
  console.log(store);
  return (
    <div className=" mt-0 body">
      <h1>InforMATE RESTAURANTS</h1>
      <div className="row" >
        <a className="row" > Start </a>
        <div className="d-flex justify-content-between overFlow">
					{store.resturants
						? store.resturants.map((elem, index) => <RestaurantCard key={index} id={++index} restaurant={elem} />)
						: ""}
				</div>
        <a className="row"> End </a>
      </div>     

      <div className="container py-3">
        <div className="card">
          <div className="row ">
            <div className="col-md-4">
              <img
                alt="Card image cap"
                class="card-img-top img-fluid"
                src="https://cdn.thespaces.com/wp-content/uploads/2018/02/Prado-Lisbon-restaurants-for-design-lovers-ft.jpg"
              />
            </div>
            <div className="col-md-8 px-3">
              <div className="card-block px-3">
                <h4 className="card-title">Restaurant Info</h4>
                <p className="card-text">
                  Restaurant description ( At vero eos et accusamus et iusto
                  odio dignissimos ducimus qui blanditiis praesentium voluptatum
                  deleniti atque corrupti quos dolores et quas molestias
                  excepturi sint occaecati cupiditate non provident, similique
                  sunt in culpa qui officia deserunt mollitia animi, id est
                  laborum et dolorum fuga. Et harum quidem rerum facilis est ){" "}
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
        <div className="card">
          <div className="row ">
            <div className="col-md-4">
              <img
                alt="Card image cap"
                class="card-img-top img-fluid"
                src="https://www.restaurantinteriordesign.eu/wp-content/uploads/2019/07/Pal%C3%A1cio-Chiado.jpg"
              />
            </div>
            <div className="col-md-8 px-3">
              <div className="card-block px-3">
                <h4 className="card-title">Restaurant Info</h4>
                <p className="card-text">
                  Restaurant description ( At vero eos et accusamus et iusto
                  odio dignissimos ducimus qui blanditiis praesentium voluptatum
                  deleniti atque corrupti quos dolores et quas molestias
                  excepturi sint occaecati cupiditate non provident, similique
                  sunt in culpa qui officia deserunt mollitia animi, id est
                  laborum et dolorum fuga. Et harum quidem rerum facilis est ){" "}
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
        <div className="card">
          <div className="row ">
            <div className="col-md-4">
              <img
                alt="Card image cap"
                class="card-img-top img-fluid"
                src="https://www.lisbonlux.com/images/restaurantes/eneko-lisboa.jpg"
              />
            </div>
            <div className="col-md-8 px-3">
              <div className="card-block px-3">
                <h4 className="card-title">Restaurant Info</h4>
                <p className="card-text">
                  Restaurant description ( At vero eos et accusamus et iusto
                  odio dignissimos ducimus qui blanditiis praesentium voluptatum
                  deleniti atque corrupti quos dolores et quas molestias
                  excepturi sint occaecati cupiditate non provident, similique
                  sunt in culpa qui officia deserunt mollitia animi, id est
                  laborum et dolorum fuga. Et harum quidem rerum facilis est ){" "}
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
    </div>
  );
};
