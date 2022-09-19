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

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/");
    }
    fetch(process.env.BACKEND_URL + "api/private", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Autorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((resp) => {
        return resp.json;
      })
      .then((data) => {
        console.log("response user identity", data);
      });
  }, []);

  return (
    <div className="  rounded-pill ">
      
        <a
          href="/"
          onClick={fetchlogout}
          className="rounded-pill btn btn-outline-secondary"
        >
          SignOut
        </a>
      
        <a href="/" className="rounded-pill btn btn-outline-secondary">
          MyTrip
        </a>
      </div>
    
  );
};
