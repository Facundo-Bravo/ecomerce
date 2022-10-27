import React from 'react';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
    return (
        <> 
            <NavBar/>
            <main>
                <ItemListContainer greeting={"Bienvenido"} />
            </main> 
            <Footer/>
            

        </>
    )
}

export default App