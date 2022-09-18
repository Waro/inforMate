import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Flights = () => {
  const { store, actions } = useContext(Context);

  return (
    <h1 className="pagetitle">
      <span className="navtitle"> Flights </span>
    </h1>
  );
};
