import React from "react";

// import name, { chanal} from "./Export";

import * as rj from "./Export"

function Import(){
    return(
        <>
            <h1>My name is syurya </h1>
            <h3>My favrete youtuber {rj.youtuber}</h3>
            <h3>youtube chanal  name {rj.chanal} </h3>
        </>
    )
}

export default Import;