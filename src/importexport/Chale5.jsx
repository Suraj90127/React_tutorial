import React from "react";
import {sum, sub, mult, div } from "./Chal5";

function Chale5(){
    return(
        <>
        <ul>
            <li>sum of two no is {sum(3,4)}</li>
            <li>sub of two no is{sub(4,5)}</li>
            <li>Div of two no is{div(6,8)}</li>
            <li>Mult of two no is{mult(3,4)}</li>
        </ul>
        </>
    )
}
export default Chale5; 