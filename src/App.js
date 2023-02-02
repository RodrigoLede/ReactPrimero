import logo from './logo.svg';
import './App.css';
import Card from "./componentes/Card"
import Button from './componentes/Button/Button';
import NavBar from './componentes/NavBar/NavBar';

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
      <div style={miEstilo} className="catalogo">
        <Card img= "/imgs/Captura.jpg" title= "Stumpjumper" price= {500} detail= "Expert pro"/>
        <Card img= "/imgs/Captura1.jpg" title= "Enduro" price= {800} detail= "Expert pro"/>
        <Card img= "/imgs/Captura2.jpg" title= "Turbo Levo" price= {600} detail= "Expert pro"/>
      </div>

      <button onClick={hacerAlgo}>Hacer Algo</button>

      <Button text= "Apretame" />
    
    </div>
  );
}

export default App;
