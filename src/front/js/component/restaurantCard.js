import { Col, Card, Button } from "react-bootstrap";
import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

const RestaurantCard = props => {
const restaurant = props.restaurant
	

	return (
		<Col>
			<Card>
				<Card.Body>
					<Card.Title>{restaurant.businessname}</Card.Title>
					{restaurant ? (
						<Card.Text>
							<p>Population: {restaurant.businessname}</p>
							<p>Address: {restaurant.address}</p>
						</Card.Text>
					) : (
						""
					)}
					
					<Button
						variant="outline-warning"
						className="likeBtn"
						onClick={() => actions.addItem(restaurant.businessname)}>
						&#9825;
					</Button>
				</Card.Body>
			</Card>
		</Col>
	);
};

RestaurantCard.propTypes = {
	index: PropTypes.number,
	restaurant: PropTypes.object,
	id: PropTypes.number
};

export default RestaurantCard;