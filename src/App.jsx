import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Buscador from "./componentes/Buscador/Buscador";
import Filtros from "./componentes/Filtros/Filtros";
import Card from "./componentes/Card/Card";
import Paginacion from "./componentes/Paginacion/Paginacion";
import Menu from './componentes/Menu/Menu';
import './App.css';

function App() {
  //API Rick & Morty
  let [numeroPagina, setNumeroPagina] = useState(1);
  let api = `https://rickandmortyapi.com/api/character/?page=${numeroPagina}`;

  useEffect(()=>{
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      console.log(data);
    })();
  },[api])

  return (
    <div className="App">
      {/* Imagen como Header */}
      <Menu/>
      <div className="container text-center">
        {/* Buscador */}
        <Buscador></Buscador>
        {/* Filtros */}
        <Filtros></Filtros>
        {/* Cards */}
        <div className="row">
          <Card></Card>
        </div>
        {/* Paginar */}
        <Paginacion></Paginacion>
      </div>
    </div>
  );
}

export default App;