import React from "react";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import NavBar from "./componentes/NavBar/NavBar";
import Button from "./componentes/Button/Button";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";
import HomePage from "./pages/HomePage";
import { CartProvider } from "./storage/cartContext";


function App() {

  function hacerAlgo() {
    alert("hola");
  }
  function logOutSession(){
    console.log("logout");
  }

  function logInSession(username){
    alert(`Bienvenido usuario: ${username}`);
  }
  
  return (
    <>
        <CartProvider >
          <BrowserRouter>
            <NavBar onLogin={logInSession} onLogout={logOutSession} />
            <Routes>
              <Route path="/" element={ <ItemListContainer /> } />
              <Route path="/detalle/:itemid" element={<ItemDetailContainer />} />
              <Route path="/category/:categoryid" element={<ItemListContainer />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </BrowserRouter>
        </CartProvider>
        <button onClick={hacerAlgo}>Hacer Algo</button>
        <a href="/">
          <Button>Volver a Inicio</Button>
        </a>
    </>
  );
}

export default App;
