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

        <script
          src="https://widgets.skyscanner.net/widget-server/js/loader.js"
          async
        ></script>
      </div>
    </div>
  );
};
