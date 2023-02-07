import React from "react";
import { useLocation } from "react-router-dom";

const UselocationHooks = () => {
    // const {name, suraj} = useParams();
    const location = useLocation();
    return (
    <>
    <h1>Path Address = {location.pathname} </h1>
    </>
    );
}

export default UselocationHooks;