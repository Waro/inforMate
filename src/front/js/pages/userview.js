import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";

import "../../styles/home.css";
import { useNavigate } from "react-router-dom";


export const Userview = () => {
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
    const Restaurants = () => {
    const { store, actions } = useContext(Context);
    console.log(store);
  };

  return (
    <div className=" mt-0 body">
      <h1 className="pagetitle">
        InforMATE TRIP Day one
        <div>
          <a
            onClick={fetchlogout}
            href="/"
            className="rounded-pill btn btn-outline-secondary"
          >
            SIGNOUT
          </a>
        </div>
      </h1>
      <div>
      <div className=" mt-0 body">
      <h1 className="pagetitle">
        <span className="navtitle ">RESTAURANTS</span>
      </h1>
      
      <div className="card-block py-3 pb-5">
        {store.resturants
          ? store.resturants.map((elem, index) => (
              <RestaurantCard key={index} id={++index} restaurant={elem} />
            ))
          : ""}
      </div>
    </div> 
      </div>


      <div className="container py-3">
        <div className="card col-4">
          <div className="row ">
            <div className="col-md-4">
              <img
                alt="Card image cap"
                className="card-img-top img-fluid"
                src="https://i.pinimg.com/originals/6a/4a/b4/6a4ab45313c50a524377287e98cf22de.jpg"
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
                  Mark done
                </a>
                <a href="#" className="rounded-pill btn btn-outline-secondary">
                  Remove
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
                className="card-img-top img-fluid"
                src="https://i.pinimg.com/originals/6a/4a/b4/6a4ab45313c50a524377287e98cf22de.jpg"
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
                  Mark done
                </a>
                <a href="#" className="rounded-pill btn btn-outline-secondary">
                  Remove
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
                className="card-img-top img-fluid"
                src="https://i.pinimg.com/originals/6a/4a/b4/6a4ab45313c50a524377287e98cf22de.jpg"
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
                  Mark done
                </a>
                <a href="#" className="rounded-pill btn btn-outline-secondary">
                  Remove
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="card col-4">
          <div className="row ">
            <div className="col-md-4">
              <img
                alt="Card image cap"
                className="card-img-top img-fluid"
                src="https://i.pinimg.com/originals/6a/4a/b4/6a4ab45313c50a524377287e98cf22de.jpg"
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
                  Mark done
                </a>
                <a href="#" className="rounded-pill btn btn-outline-secondary">
                  Remove
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
                className="card-img-top img-fluid"
                src="https://i.pinimg.com/originals/6a/4a/b4/6a4ab45313c50a524377287e98cf22de.jpg"
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
                  Mark done
                </a>
                <a href="#" className="rounded-pill btn btn-outline-secondary">
                  Remove
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
                className="card-img-top img-fluid"
                src="https://i.pinimg.com/originals/6a/4a/b4/6a4ab45313c50a524377287e98cf22de.jpg"
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
                  Mark done
                </a>
                <a href="#" className="rounded-pill btn btn-outline-secondary">
                  Remove
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
