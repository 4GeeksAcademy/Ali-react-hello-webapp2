import React from "react";
import CR90 from "../../img/CR90.webp"
import { Link } from "react-router-dom";

const VehiclesCard = ({ uid, name, url }) => {
    return (

        <>
            <div className="col-3">
                <div className="card" style={{ width: "18rem" }}>
                    <img src={uid === "2"
                        ? "https://th.bing.com/th/id/OIP.6tJ7Q1qJJnedO2kWlVmTyQHaEQ?w=286&h=190.66&c=7&r=0&o=5&pid=1.7.jpg"
                        : uid === "3"
                            ? "https://th.bing.com/th/id/OIP.6yLFv-vw2KoMTBlRUuk3HQHaDJ?w=305&h=148&c=7&r=0&o=5&pid=1.7.jpg"
                            : `https://starwars-visualguide.com/assets/img/starships/${uid}.jpg`
                    }
                        className="card-img-top" alt={name}

                    />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <Link to={`/starships/${uid}`}>
                            <button className="btn btn-primary">
                                Learn More
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
export default VehiclesCard;