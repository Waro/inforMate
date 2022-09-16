import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import RestaurantCard from "../component/restaurantCard";

export const Restaurants = () => {
  const { store, actions } = useContext(Context);
  console.log(store);
  return (
    <div className=" mt-0 body">
      <h1>InforMATE RESTAURANTS</h1>

      <div className="card-block px-3 scroll">
        {store.resturants
          ? store.resturants.map((elem, index) => (
              <RestaurantCard key={index} id={++index} restaurant={elem} />
            ))
          : ""}
      </div>
    </div>
  );
};
