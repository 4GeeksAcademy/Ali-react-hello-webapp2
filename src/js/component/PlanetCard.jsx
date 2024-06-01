import React from "react";
import { Link } from "react-router-dom";


const PlanetsCard = ({ name, uid, url }) => {
    return (
        <>
            <div className="col-3">
                <div className="card" style={{ width: "18rem" }}>
                    <img src={uid === "1"
                        ? "https://upload.wikimedia.org/wikipedia/en/thumb/6/6d/Tatooine_%28fictional_desert_planet%29.jpg/220px-Tatooine_%28fictional_desert_planet%29.jpg"
                        : `https://starwars-visualguide.com/assets/img/planets/${uid}.jpg`
                    }
                        className="card-img-top" alt={name}

                    />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <Link to={`/PlanetsDetails/` + (uid)}>Learn More</Link>
                    </div>
                </div>
            </div>

        </>
    )
}
export default PlanetsCard;

