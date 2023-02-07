import React from "react";
import About from "./About";
import Contact from "./Contact" 
import { Route, Routes } from "react-router-dom";
import Menu from "./Menu"
import UseParam from "./UseParam"
import UselocationHooks  from "./UselocationHooks";
import Search from "./Search"



const App = () => {
    return(  
      <> 
      {/* <UselocationHooks/> */}
      <Menu/>
      <br/>
      <Routes> 
        <Route exact path="/" element={<About/>}/>
        <Route exact path="/co" element={<Contact/>}/>
        <Route exact path="/pa/:name/:suraj" element={<UseParam/>}/>
        <Route exact path="/search" element={<Search/>}/>
      </Routes>
      </>
    );
}

export default App;