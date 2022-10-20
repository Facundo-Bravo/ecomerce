import React from 'react';
import NavBar from './NavBar';

function Header(prop) {
    let nombreCompleto = prop.nombre + " " + prop.apellido
    return (
        <header id='main-header' className="header"> 
            <h1> E-Shop </h1>
            <p>Bienvenido {nombreCompleto} </p>
            <NavBar/>
        </header>
    )
}

export default Header