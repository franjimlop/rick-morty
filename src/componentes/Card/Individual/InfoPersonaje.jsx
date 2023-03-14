
import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom"
import './InfoPersonaje.css'
// import SeleccionarEpisodio from "../../Filtros/Categorias/SeleccionarEpisodio";

function InfoPersonaje() {

  let {id} = useParams();
  let api = `https://rickandmortyapi.com/api/character/${id}`;
  
  const [datosApi, setDatosApi] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const {episode , gender , image, location, name, origin, species, status} = datosApi
  useEffect(() => {
    (async function () {
      const json_datos = await fetch(api).then((datos) => datos.json());
      setDatosApi(json_datos);
    }());
  }, [api]);
  console.log(datosApi)
  let idlugar = 0;
  let idorigen = 0;
  let episodios = [];
  let idepisodio = 1;
  if(datosApi.length!==0){
    
    let urlorigen = origin.url;
    let buscarorigen = urlorigen.split('/');
    idorigen = buscarorigen.slice(-1);
    if(origin.url===""){
      idorigen = 1;
    }
    
    let urllugar = location.url;
    let buscaidlugar = urllugar.split('/');
    idlugar = buscaidlugar.slice(-1);
    if(location.url===""){
      idlugar = 1;
    }
    episodios = episode;
    // let buscarepisodio = episode.split('/');
    // let idepisodio = buscarepisodio.slice(-1);
  }
  // const getUrlOrigen = () => {
  //   let url = origin.url
  //   url = url.indexOf("location/")
  //   return url;
  // }
  // const oigennombre = origin.name;
  //console.log(origin.url)
  // const lugarnombre = location.name;
  // eslint-disable-next-line no-unused-vars



  // let SELECCION = 0;

  // let opciones = opcionesfuncion;
  return (
    <div className="container d-flex justify-content-center">
      <div className="card mt-5 mb-3 estilo--carta__personalizada">
        <div className="row g-0">
              <h1 className="card-title d-flex justify-content-center p-3">{name}</h1>
          <div className="col-md-4 d-flex justify-content-center align-items-center">
            <img src={image} className="img-fluid rounded mt-3" alt={name}/>
          </div>
          <div className="col-md-8">
            <div className="card-body interior--carta__estilo">

              <p className="card-text fw-bold">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" className={
                  `${status==='Alive' ? 'estado--vivo':status==='Dead' ? 'estado--muerto': 'estado--desconocido'} bi bi-circle-fill`
                  } viewBox="0 0 16 16">
                    <circle cx="8" cy="8" r="8"/>
                </svg>
                {status}
              </p>

              <p className="card-text"><span className='fw-bold color--principal__text'>Especie:</span> {species}</p>
              <p className="card-text"><span className='fw-bold color--principal__text'>Genero:</span> {gender}</p>
              
              {/* <Link to={`lugares/`} key={urlorigen} className="col-3">
                <Lugares peticion={idlugar} />
              </Link> */}
              <p className="card-text"><span className='fw-bold color--principal__text'>Localización de origen:</span> <a href={`/lugares/${idorigen}`}>{origin?.name}</a></p>
              {/* <p className="card-text"><span className='fw-bold color--principal__text'>Localización de origen:</span> <a >{origin?.name}</a></p> */}
              
              <p className="card-text"><span className='fw-bold color--principal__text'>Ultima vez visto:</span> <a href={`/lugares/${idlugar}`}>{location?.name}</a></p>
              
              <p className="card-text">
              <select onChange={e => window.location.href=`/episodios/${e.target.value}`} className="form-select" id="sleccionEpsiodio">
                 
                <option key={idepisodio} value={idepisodio}>
                            Episodios en los que aparece
                  </option>
                {episodios.map((x) => {
                    let buscarepisodio = x.split('/');
                    idepisodio = buscarepisodio.slice(-1);

                    
                    // let buscarepisodio = 1;
                    // let idepisodio = 1;
                    return (
                        <option key={idepisodio} value={idepisodio}>
                            Episodio - {idepisodio}
                        </option>
                    );
                  })
                }
              </select>
              
              </p>
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InfoPersonaje