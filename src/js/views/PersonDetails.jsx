import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

function PersonDetails() {
	const { store, actions } = useContext(Context);
	const { uid } = useParams();

	useEffect(() => {
		actions.getPersonDetails(id);
	}, [actions, uid]);

	return (
		<div className="card mt-5" style={{ width: "30rem", margin: "auto" }}>
			{store.currentPerson ? (
				<>
					<img
						src={`https://starwars-visualguide.com/assets/img/characters/${uid}.jpg`}
						className="card-img-top"
						alt={store.currentPerson.name}
						style={{ height: "30rem" }}
					/>
					<div className="card-body">
						<h1 className="card-title">{store.currentPerson.name}</h1>
						<p className="card-text">Height: {store.currentPerson.height}</p>
						<p className="card-text">Mass: {store.currentPerson.mass}</p>
						<p className="card-text">Hair Color: {store.currentPerson.hair_color}</p>
						<p className="card-text">Skin Color: {store.currentPerson.skin_color}</p>
						<p className="card-text">Eye Color: {store.currentPerson.eye_color}</p>
					</div>
				</>
			) : (
				<div>Loading...</div>
			)}
		</div>
	);
}

export default PersonDetails;
