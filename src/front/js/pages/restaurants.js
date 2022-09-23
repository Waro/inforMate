import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import RestaurantCard from "../component/restaurantCard";

export const Restaurants = () => {
  const { store, actions } = useContext(Context);
  console.log(store);
  return (
    <div className=" mt-0 body">
      <h1 className="pagetitle">
        <span className="navtitle ">RESTAURANTS</span>
      </h1>

      <div className="card-block py-3 pb-5">
        {store.resturants
          ? store.resturants.map((elem, index) => (
              <RestaurantCard
                key={index}
                id={++index}
                restaurant={elem}
                type = "add"
              />
            ))
          : ""}
      </div>
    </div>
  );
};
