import React from 'react';
import Header from './components/Header';
import Main from './components/ItemListContainer';
import Footer from './components/Footer';

function App() {
    return (
        <>
            <Header/> 
            <Main nombre= "Facundo" apellido= "Bravo"/>
            <Footer/>
            

        </>
    )
}

export default App