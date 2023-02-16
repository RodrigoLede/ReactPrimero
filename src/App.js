import React from "react";
import Button from "./componentes/Button/Button";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import NavBar from "./componentes/NavBar/NavBar";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";
import HomePage from "./pages/HomePage";


function App() {

  function hacerAlgo() {
    alert("hola");
  }
  
  return (
    <>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={ <ItemListContainer /> } />
            <Route path="/detalle/:itemid" element={<ItemDetailContainer />} />
            <Route path="/category/:categoryid" element={<ItemListContainer />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
        <button onClick={hacerAlgo}>Hacer Algo</button>
        <Button>Apretame</Button>
    </>
  );
}

export default App;
