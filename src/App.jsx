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
  let [datos_api, setDatos_api] = useState([]);
  // esto sería la destructuracion del JSON, como se vio en clase hicimos lo mismo con los objetos
  // poniendo el nombre del atributo del objeto saca su información
  let {info, results} = datos_api;

  let api = `https://rickandmortyapi.com/api/character/?page=${numeroPagina}`;
  
  // console.log("datos_api= ",datos_api.info);
  //console.log("info apti= ",results.info);
  useEffect(() => {
    //se crea la funcion asincrona de AJAX, pero ¿porqué los parentesis que envuelve la funcion?
    (async function () {
      let json_datos = await fetch(api).then((datos) => datos.json());
      setDatos_api(json_datos);
    })();
  }, [api])

  return (
    <div className="App">
      {/* Imagen como Header */}
      <Menu />
      <div className="container text-center">
        {/* Añado esto para ordenar elementos y poder centrar el buscador y los filtros en la pagina */}
        <div className="buscadoryfiltros">
          <div className="divbuscador">
            {/* Buscador */}
            <Buscador></Buscador>
          </div>
          <div className="divfiltros">
            {/* Filtros */}
            <Filtros></Filtros>
          </div>
        </div>

        {/* Cards */}
        <div className="row mt-5">
          <Card results={results}/>
        </div>
        {/* Paginar */}
        <Paginacion></Paginacion>
      </div>
    </div>
  );
}

export default App;