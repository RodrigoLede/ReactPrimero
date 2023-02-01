import logo from './logo.svg';
import './App.css';

function App() {
  const title = "¡¡¡¡¡Bienvenidos a React!!!!!";

  const producto= {
    precio: 500,
    nombre: "Remera",
    descripcion: "La remera",
  };

  function hacerAlgo() {
    alert("hola");
  }
  
  return (
    <div>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {title}
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <h3> {producto.nombre} </h3>
              <h3>$ {producto.precio} </h3>
            </div>
          </a>
        </header>
      </div>
      <button onClick={hacerAlgo}>Click Me</button>
    </div>
  );
}

export default App;
