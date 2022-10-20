import React from 'react';
import NavBar from './NavBar';
import CartWidget from './CartWidget';

function Header() {
    return (
        <header id='main-header' className="header"> 
            <h1> E-Shop </h1>
            <NavBar/>
            <CartWidget/>
        </header>
    )
}

export default Header