import { Col, Card, Button } from "react-bootstrap";
import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import "../../styles/home.css";

const restaurantActions = (actions) => ({
  add: {
    title: "+ Add to myTrip",
    action: (itemToAdd) => actions.addItem(itemToAdd),
  },

  remove: {
    title: "- Delete from my Trip",
    action: (itemToRemove) => actions.removeItem(itemToRemove),
  },
});

const RestaurantCard = (props) => {
  const { actions } = useContext(Context);
  const restaurant = props.restaurant;
  const cardActions = restaurantActions(actions);
      
  return (
    <div className="card container py-3">
      <div className="row ">
        <div className="col-md-4 ">
          <img
            alt="Card image cap"
            class="card-img-top img-fluid"
            src={restaurant.image}
          />
        </div>
        <div className="col-md-8 px-3">
          <div className="card-block px-3">
            <Card.Title
              style={{
                textTransform: "uppercase",
                fontWeight: "bold",
                fontSize: "2rem",
              }}
            >
              {restaurant.businessname}
            </Card.Title>
            {restaurant ? (
              <Card.Text>
                <p className="mb-2">Address: {restaurant.address}</p>
                <p className="mb-2">Type: {restaurant.restauranttype}</p>
                <p className="mb-2">Phone: {restaurant.phone}</p>
                <p className="mb-2">
                  Parking:{" "}
                  {restaurant.parkinglot ? "Available" : "Not Available"}
                </p>
              </Card.Text>
            ) : (
              ""
            )}
            {props.type && (
              <a
                variant="outline-warning"
                className="likeBtn btn  btn-outline-secondary  rounded-pill"
                onClick={() => cardActions[props.type]?.action(restaurant)}
                
              >
                {cardActions[props.type]?.title}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

RestaurantCard.propTypes = {
  index: PropTypes.number,
  restaurant: PropTypes.object,
  id: PropTypes.number,
};

export default RestaurantCard;
