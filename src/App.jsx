import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Buscador from "./components/Buscador/Buscador";
import Filtros from "./components/Filtros/Filtros";
import Card from "./components/Card/Card";
import Paginacion from "./components/Paginacion/Paginacion";
import header from './img/header.png';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Imagen como Header */}
      <div className="text-center mt-3">
        <img src={header} alt="Header" style={{ width: "400px", height: "auto" }} />
      </div>
      <div className="container text-center">
        {/* Buscador */}
        <Buscador></Buscador>
        {/* Filtros */}
        <Filtros></Filtros>
        {/* Cards */}
        <div className="row">
          <div className="col-3"><Card></Card></div>
          <div className="col-3"><Card></Card></div>
          <div className="col-3"><Card></Card></div>
          <div className="col-3"><Card></Card></div>
        </div>
        {/* Paginar */}
        <Paginacion></Paginacion>
      </div>
    </div>
  );
}

export default App;