import logo from './logo.svg';
import './App.css';
import Card from "./componentes/Card"

function App() {
  const title = "¡¡¡¡¡Bienvenidos a React!!!!!";

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
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {title}
          <Card/>
        </header>
      </div>
      <div style={miEstilo} className="catalogo">
        <Card/>
        <Card/>
        <button onClick={hacerAlgo}>Click Me</button>
      </div>
    </div>
  );
}

export default App;
