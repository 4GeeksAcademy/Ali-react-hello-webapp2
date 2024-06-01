import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const PeopleCard = ({ uid, name, url }) => {
    return (
        <div className="col-3">
            <div className="card" style={{ width: "18rem" }}>
                <img
                    src={`https://starwars-visualguide.com/assets/img/characters/${uid}.jpg`}
                    className="card-img-top"
                    alt={name}
                />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <Link to={`/person-details/${uid}`}>Learn More</Link>
                </div>
            </div>
        </div>
    );
}

PeopleCard.propTypes = {
    uid: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
};

export default PeopleCard;
