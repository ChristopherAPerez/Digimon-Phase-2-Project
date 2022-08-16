import React from 'react';
import logo from './Images/Hello.jpeg';

function Header(){
    return(
        <div className="logo">
            <h1>Welcome Digi-Tamers!</h1>
            <img  src={logo} alt="logo"/>
        </div>   
    )
}

export default Header;