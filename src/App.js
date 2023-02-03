import React from 'react'
import './App.css';
import Button from './componentes/Button/Button';
import NavBar from './componentes/NavBar/NavBar';
import ItemCount from './componentes/ItemCount/ItemCount';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';

function App() {

  function hacerAlgo() {
    alert("hola");
  }
  
  return (
    <div>
      <NavBar />

      <ItemListContainer />

      <ItemCount stock={8} />

      <button onClick={hacerAlgo}>Hacer Algo</button>

      <Button>Apretame</Button>
    
    </div>
  );
}

export default App;
