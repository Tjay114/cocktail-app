import React from "react";
import { NavLink } from "react-router-dom";
// import cocktails from "../images/image15.jpg"
function NavBar(){
return(
    <div  className="header">
        <h2>Cocktails and Culture</h2>
       <div className="nav-bar">
        <NavLink to="/">
            Home
        </NavLink>
        <NavLink to="/about">
            About
        </NavLink>
        <NavLink to="/cocktails">
            Cocktails
        </NavLink>
        <NavLink to="/ingredients">
            Ingredients
        </NavLink>
       </div>
    </div>
)
}

export default NavBar;