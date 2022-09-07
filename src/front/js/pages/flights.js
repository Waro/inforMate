import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Flights = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="mt-0 body">
      <h1 full screen>
        flights
      </h1>
    </div>
  );
};
