import React, { useState} from "react";




const Hookspro = () => {
    
    const currnentTime = new Date().toLocaleTimeString();
    const state = useState();
    const [count, setCount] = useState(currnentTime);
// let count = 1;
const IncNum = () => {
    const currnentTime1 = new Date().toLocaleTimeString();
    setCount(currnentTime1)
    console.log("clicked");
}

    return(
        <>
            <h1> {count} </h1>
            <button onClick={IncNum}> GET TIME </button>
        </>
    )
}

export default Hookspro;