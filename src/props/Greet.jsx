import React from "react";


 const Greet = (props) => {
    return (
        <>
            <h1> Nmae {props.name} </h1>
            <h1> Roll_No {props.rollNo}</h1>
            <h1> Id  {props.id}</h1>
            {props.children}
            
        </>
    )

}

export default Greet;