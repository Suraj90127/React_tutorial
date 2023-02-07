import React from "react";
import { useParams } from "react-router-dom";

const UseParam = () => {
    const {name, suraj} = useParams();
    return (
    <>
    <h1>User {name} {suraj} page</h1>
    </>
    );
}

export default UseParam;