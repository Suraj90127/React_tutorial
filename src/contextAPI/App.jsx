import React, {createContext} from "react";
import ComA from "./ComA";

const FirstName = React.createContext();

const App = () => {
    return (
        <>
            <FirstName.Provider value={"Suraj"}>
                <ComA/>
            </FirstName.Provider>
        </>
    )
}

export default App;
export {FirstName} ;