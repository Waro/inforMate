import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";

import "../../styles/home.css";
import { useNavigate } from "react-router-dom";

export const Tripbtn = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  const fetchlogout = (e) => {
    localStorage.removeItem("token");
    localStorage.removeItem("users_id");
    localStorage.removeItem("email");
  };

  return (
    <div className="  rounded-pill ">
      <a
        href="/"
        onClick={fetchlogout}
        className="rounded-pill btn btn-outline-secondary"
      >
        SignOut
      </a>

      <a href="/userview" className="rounded-pill btn btn-outline-secondary">
        MyTrip
      </a>
    </div>
  );
};
