import React from "react";
import cocktails from "../images/image15.jpg"


function NavBar(){
return(
    <div  className="header">
        <img    src={cocktails} className="photo" />
        <h2>Cocktails and Culture</h2>
        <nav className="links">
            <li href="#home">HOME</li>
            <li href="#about">ABOUT</li>
            
        </nav>
    </div>
)
}

export default NavBar;