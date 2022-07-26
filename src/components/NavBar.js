import React from "react";
import { NavLink } from "react-bootstrap";

function NavBar(){
    return(
        <div>
            <nav className="nav">
                <p className="heading">COCKTAILS AND CULTURE</p>

                <div className="nav-centre">

                <NavLink href="#home">Home</NavLink>
                <NavLink href="#features">Features</NavLink>
                <NavLink href="#about">About</NavLink>
                <NavLink href="#ingredients">Ingredients</NavLink>
                </div>
               
            </nav>
        </div>
    )
}

export default NavBar;