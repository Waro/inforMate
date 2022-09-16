import { Col, Card, Button } from "react-bootstrap";
import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import "../../styles/home.css";

const RestaurantCard = (props) => {
  const restaurant = props.restaurant;

  return (
    <div className="card container py-3">
      <div className="row ">
        <div className="col-md-4">
          <img
            alt="Card image cap"
            class="card-img-top img-fluid"
            src="https://programathor.com.br/blog/wp-content/uploads/2018/08/api-768x768.png"
          />
        </div>
        <div className="col-md-8 px-3">
          <div className="card-block px-3">
            <Card.Title>{restaurant.businessname}</Card.Title>
            {restaurant ? (
              <Card.Text>
                <p>Population: {restaurant.businessname}</p>
                <p>Address: {restaurant.address}</p>
              </Card.Text>
            ) : (
              ""
            )}

            <p className="card-text">INFO ?????</p>
            <a
              variant="outline-warning"
              className="likeBtn btn  btn-outline-secondary  rounded-pill"
              onClick={() => actions.addItem(restaurant.businessname)}
            >
              &#9825; Favorite
            </a>
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
