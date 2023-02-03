import React from 'react'
import Button from './componentes/Button/Button';
import NavBar from './componentes/NavBar/NavBar';
import ItemCount from './componentes/ItemCount/ItemCount';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';


function App() {


  function hacerAlgo() {
    alert("hola");
  }
  
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element= {<ItemListContainer />} />
          <Route path="/contacto" element= { <div><h1> Contactenos </h1></div>} />
          <Route path="/detalle/:itemid" element= {<ItemDetailContainer />} />
          <Route path="*" element= { <div><h2> Pagina no encontrada </h2></div>} />
        </Routes>
      </BrowserRouter>
      <button onClick={hacerAlgo}>Hacer Algo</button>
      <Button>Apretame</Button>
    </>
  );
}

export default App;
