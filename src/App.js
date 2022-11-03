import React from 'react';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { Routes, Route } from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting={"Bienvenido"} />} />
        <Route path="/category/:id" element={<ItemListContainer greeting={"category"} />} />
        <Route path="/item/:id" element={<ItemDetailContainer greeting={"item"} />} />
      </Routes>
      <Footer />
    </>
  )
}


export default App