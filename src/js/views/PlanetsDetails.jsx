import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const PlanetsDetails = props => {
    const { store, actions } = useContext(Context);
    const params = useParams();

    useEffect(() => {
        actions.getPlanetDetails(params.id)

    }, [])
    return (
        <div className="jumbotron">
            <h1 className="display-4">{store.planetsDetails.properties.name}</h1>

            <hr className="my-4" />

            <Link to="/">
                <span className="btn btn-primary btn-lg" href="#" role="button">
                    Back home
                </span>
            </Link>
        </div>
    );
};
export default PlanetsDetails;
PlanetsDetails.propTypes = {
    match: PropTypes.object
};