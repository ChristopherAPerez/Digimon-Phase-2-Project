import React from "react";
import { NavLink } from "react-router-dom"

function NavBar() {

    const linkStyle = {
        padding: "20px",
      };

    return (
        <nav id="nav">
            <NavLink exact to="/" style={linkStyle} activeStyle={{
                fontWeight: "bold",
                color: "red"
            }}>Home</NavLink>
            <NavLink to="/DigimonContainer" style={linkStyle} activeStyle={{
                fontWeight: "bold",
                color: "red"
            }}>Explore and Build</NavLink>
            <NavLink to="/RateMyTeam" style={linkStyle} activeStyle={{
                fontWeight: "bold",
                color: "red"
            }}>Rate My Team</NavLink>
            <NavLink to="/Form" style={linkStyle} activeStyle={{
                fontWeight: "bold",
                color: "red"
            }}>Add New Digimon</NavLink>
        </nav>
    );
}

export default NavBar;