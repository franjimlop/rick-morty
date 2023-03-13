import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import Buscador from './componentes/Buscador/Buscador';
import Filtros from './componentes/Filtros/Filtros';
import Card from './componentes/Card/Card';
import Paginacion from './componentes/Paginacion/Paginacion';
import Menu from './componentes/Menu/Menu';
import './App.css';

function App() {
  // API Rick & Morty
  const [numeroPagina, setNumeroPagina] = useState(1);
  const [buscador, setBuscador] = useState("");
  const [estado, setEstado] = useState("");
  const [genero, setGenero] = useState("");
  const [especies, setEspecies] = useState("");

  const [datosApi, setDatosApi] = useState([]);
  // esto sería la destructuracion del JSON, como se vio en clase hicimos lo mismo con los objetos
  // poniendo el nombre del atributo del objeto saca su información
  // eslint-disable-next-line no-unused-vars
  const { info, results } = datosApi;

  const api = `https://rickandmortyapi.com/api/character/?page=${numeroPagina}&name=${buscador}&status=${estado}&gender=${genero}&species=${especies}`;

  // console.log('datosApi= ',datosApi.info);
  // console.log('info apti= ',results.info);
  useEffect(() => {
    // se crea la funcion asincrona de AJAX, pero ¿porqué los parentesis que envuelve la funcion?
    (async function () {
      const json_datos = await fetch(api).then((datos) => datos.json());
      setDatosApi(json_datos);
    }());
  }, [api]);

  return (
    <div className="App">
      {/* Imagen como Header */}
      <Menu />
      <div className="container text-center">
        {/* Añado esto para ordenar elementos y poder centrar el buscador
        y los filtros en la pagina */}
        <div className="buscadoryfiltros">
          <div className="divbuscador">
            {/* Buscador */}
            <Buscador setBuscador={setBuscador} setNumeroPagina={setNumeroPagina}/>
          </div>
          <div className="divfiltros">
            {/* Filtros */}
            {/* El setNumeroPagina es para que al poner un filtro nos lleve a la página 1 */}
            <Filtros setEstado={setEstado} setGenero={setGenero} setEspecies={setEspecies} setNumeroPagina={setNumeroPagina}/>
          </div>
        </div>

        {/* Cards */}
        <div className="row mt-5">
          <Card results={results} />
        </div>
        {/* Paginar */}
        <Paginacion info={info} numeroPagina={numeroPagina} setNumeroPagina={setNumeroPagina}/>
      </div>
    </div>
  );
}

export default App;
