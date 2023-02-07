import React, { useState} from "react";

const Hooks = () => {
    const state = useState();
    const [count, setCount] = useState(0);
// let count = 1;


const IncNum = () => {
    setCount(count+1)
    console.log("clicked");
}

    return(
        <>
            <h1> {count} </h1>
            <button onClick={IncNum}> Click me </button>
        </>
    )
}

export default Hooks;