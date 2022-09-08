import { Col, Card, Button } from "react-bootstrap";
import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

const hotelCard = props => {
	const { store, actions } = useContext(Context);
	const hotelStore = store.hotel.filter(hotel => hotel.name == props.hotel.name);
	useEffect(() => actions.charDescription(props.hotel.url), []);

	return (
		<Col>
			<Card>
				<Card.Img
					variant="top"
					src=""
					width="200"
				/>
				<Card.Body>
					<Card.Title>{props.hotel.name}</Card.Title>
					{hotelStore[0] ? (
						<Card.Text>
							<p>Hotel: {hotelStore[0].name}</p>
							<p>Hair Color: {hotelStore[0].description}</p>
							<p>Eye Color: {hotelStore[0].amenities}</p>
						</Card.Text>
					) : (
						""
					)}
				</Card.Body>
			</Card>
		</Col>
	);
};

hotelCard.propTypes = {
	index: PropTypes.number,
	character: PropTypes.object,
	id: PropTypes.number
};

export default hotelCard;