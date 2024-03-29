import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import Buscador from './componentes/Buscador/Buscador';
import Filtros from './componentes/Filtros/Filtros';
import Card from './componentes/Card/Card';
import Paginacion from './componentes/Paginacion/Paginacion';
import Menu from './componentes/Menu/Menu';
import './App.css';
// eslint-disable-next-line no-unused-vars
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Episodios from './Paginas/Episodios';
import Localizaciones from './Paginas/Lugares';
import InfoPersonaje from './componentes/Card/Individual/InfoPersonaje';

function App() {
  return (
    <Router>
        <Menu />
      {/* se define el campo de rutas para dentro de el incorporar cada ruta con su dirección que mapea a cada element={variable}  */}
      <Routes>
        <Route path="/" element={<Personajes/>} />
        <Route path="/:id" element={<InfoPersonaje/>} />

        <Route path="/episodios" element={<Episodios/>} />
        {/* <Route path="/episodios/:id" element={<InfoPersonaje/>} /> */}
        <Route path="/episodios/:id" element={<Episodios/>} />


        <Route path="/lugares" element={<Localizaciones/>} />
        <Route path="/lugares/:id" element={<Localizaciones />} />
      </Routes>
    </Router>
  )
}
/**
 * lo que antes teniamos de function app, se ha cambiado por const Personajes y se ha creado arriba la funcion App() con react router
 */
// eslint-disable-next-line no-unused-vars
const Personajes = () => {
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
    (async function () {
      const json_datos = await fetch(api).then((datos) => datos.json());
      setDatosApi(json_datos);
    }());
  }, [api]);

  return (
    <div className="App">
      {/* Imagen como Header <Menu />*/}
      
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
          <Card pagina="" results={results} />
        </div>
        {/* Paginar */}
        <Paginacion info={info} numeroPagina={numeroPagina} setNumeroPagina={setNumeroPagina}/>
      </div>
    </div>
  );
}

export default App;