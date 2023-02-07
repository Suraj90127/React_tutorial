import React from "react"
import { FirstName,LastName,userName } from "./App";

const ComC = () => {
    return (
    <>
        <FirstName.Consumer>
         {(fname) => {
             return (
                <LastName.Consumer>
                    {(laname) => {
                        return(
                            <userName.Consumer>
                                {(uname) => {
                                    return <h1>My Name is {fname} {laname} 
                                    <br/>
                                    My Username is {uname}</h1>
                                }}
                            </userName.Consumer>
                        );
                    }}
                </LastName.Consumer>
                )
             }}
        </FirstName.Consumer>
    </>
    )
}

export default ComC;