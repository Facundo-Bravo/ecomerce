import React from 'react';
import {Button} from 'react-bootstrap';

function Main(prop) {
    let nombreCompleto = prop.nombre + " " + prop.apellido
    return (
        <main> 
            <p>Bienvenido {nombreCompleto} </p>
            <Button>click</Button>
        </main> 
    )
}
export default Main