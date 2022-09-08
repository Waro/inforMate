import { Col, Card, Button } from "react-bootstrap";
import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

const hotelCard = props => {
	const { store, actions } = useContext(Context);
	const hotelStore = store.hotel.filter(char => char.name == props.hotel.name);
	useEffect(() => actions.charDescription(props.hotel.url), []);

	return (
		<Col>
			<Card>
				<Card.Img
					variant="top"
					src="https://raw.githubusercontent.com/NicolasArayaB/starwars-blog-reading-list/master/dist/img/darthvader.jpg"
					width="200"
				/>
				<Card.Body>
					<Card.Title>{props.hotel.name}</Card.Title>
					{hotelStore[0] ? (
						<Card.Text>
							<p>Gender: {hotelStore[0].gender}</p>
							<p>Hair Color: {hotelStore[0].hair_color}</p>
							<p>Eye Color: {hotelStore[0].eye_color}</p>
						</Card.Text>
					) : (
						""
					)}
					<Link to={"/single/" + props.hotel.uid} data={hotelStore}>
						<Button variant="outline-primary">Learn More</Button>
					</Link>
					<Button
						variant="outline-warning"
						className="likeBtn"
						onClick={() => actions.addItem(props.hotel.name)}>
						&#9825;
					</Button>
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