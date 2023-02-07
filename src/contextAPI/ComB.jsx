import React, {useContext} from "react"
import ComC from "./ComC";
import { FirstName,LastName,userName } from "./App";

const ComB = () => {
    const fname = useContext(FirstName);
    const lname = useContext(LastName);
    const uname = useContext(userName);

    return(
        <>
        {/* <ComC/> */}
         <h1>My Name is {fname} {lname} 
         <br/>
          My Username is {uname}</h1>
        </>
    )
}

export default ComB;