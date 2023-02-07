import React, { useState} from "react";

const Digitalclock = () => {
    
    const time = new Date().toLocaleTimeString();
    const state = useState();
    const [ctime, setCount] = useState(time);
// let count = 1;
const updatetime = () => {
    let time1 = new Date().toLocaleTimeString();
    setCount(time1)
    console.log("clicked");
}
setInterval(updatetime, 1000);

    return(
        <>
            <h1> {ctime} </h1>
        </>
    )
}

export default Digitalclock;