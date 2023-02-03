import React from 'react'
import './App.css';
import Card from "./componentes/Card"
import Button from './componentes/Button/Button';
import NavBar from './componentes/NavBar/NavBar';
import ItemCount from './componentes/ItemCount/ItemCount';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';

function App() {

  function hacerAlgo() {
    alert("hola");
  }
  const miEstilo={
    backgroundColor: "green",
    margin: "30px",
    padding: "50px",
    textAlign: "center",
  };
  return (
    <div>
      <NavBar />

      <ItemListContainer />

      <div style={miEstilo} className="catalogo">
        <Card img= "/imgs/Captura.jpg" title= "Stumpjumper" price= {500} detail= "Expert pro"/>
        <Card img= "/imgs/Captura1.jpg" title= "Enduro" price= {800} detail= "Expert pro"/>
        <Card img= "/imgs/Captura2.jpg" title= "Turbo Levo" price= {600} detail= "Expert pro"/>
      </div>

      <ItemCount stock={8} />

      <button onClick={hacerAlgo}>Hacer Algo</button>

      <Button>Apretame</Button>
    
    </div>
  );
}

export default App;
