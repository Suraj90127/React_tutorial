import React from "react";

const Searchresult = (props) => {
    const img = `https://source.unsplash.com/300x300/?${props.name}`;
    return(
        <>
            <img src={img} alt="Search" />
        </>
    )
}

export default Searchresult;