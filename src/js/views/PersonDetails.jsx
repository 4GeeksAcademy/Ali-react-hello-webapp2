import React, { useContext, useEffect,useState } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

function PersonDetails() {
	const { store, actions } = useContext(Context);
	const { id } = useParams();
	const [person,setPerson]=useState(null)

	useEffect(() => {
		const getDetails = async ()=>{
			let personDetails = await actions.getPersonDetails(id);
			if (personDetails){
				setPerson(personDetails)
			}
		}
		getDetails()
	}, []);

	return (
		<div className="card mt-5" style={{ width: "30rem", margin: "auto" }}>
			{person ? (
				<>
					<img
						src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
						className="card-img-top"
						alt={person.name}
						style={{ height: "30rem" }}
					/>
					<div className="card-body">
						<h1 className="card-title">{person.name}</h1>
						<p className="card-text">Height: {person.height}</p>
						<p className="card-text">Mass: {person.mass}</p>
						<p className="card-text">Hair Color: {person.hair_color}</p>
						<p className="card-text">Skin Color: {person.skin_color}</p>
						<p className="card-text">Eye Color: {person.eye_color}</p>
					</div>
				</>
			) : (
				<div>Loading...</div>
			)}
		</div>
	);
}

export default PersonDetails;
