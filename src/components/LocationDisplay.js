import React from "react";
import '../styles/App.css';
import { Redirect, Route, useLocation } from "react-router-dom";

const LocationDisplay =({ component: Component, ...rest }) => {
        const location = useLocation();
        return(
            <div data-testid="location-display">
                {location.pathname}
            </div>
        );
}


export default LocationDisplay;
