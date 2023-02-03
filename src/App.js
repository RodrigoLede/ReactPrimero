import React from "react";
import Button from "./componentes/Button/Button";
import NavBar from "./componentes/NavBar/NavBar";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PageNotFound from "./pages/PageNotFound";


function App() {

  function hacerAlgo() {
    alert("hola");
  }
  
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
        <Route path="/" element={<HomePage />} />
          <Route path="/category/:categoryid" element={<ItemListContainer />} />

          <Route path="/detalle/:itemid" element={<ItemDetailContainer />} />

          <Route path="*" element={<PageNotFound />} />
        </Routes>

      </BrowserRouter>
      <button onClick={hacerAlgo}>Hacer Algo</button>
      <Button>Apretame</Button>
    </>
  );
}

export default App;
