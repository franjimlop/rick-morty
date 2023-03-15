import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const CardDetallado = () => {
    let {id} = useParams();
    let [datosApi, setDatosApi] = useState([]);
    let {name, image, location, origin, gender, species, status, type} = datosApi

    const api = `https://rickandmortyapi.com/api/character/${id}`;

    useEffect(() => {
        // se crea la funcion asincrona de AJAX, pero ¿porqué los parentesis que envuelve la funcion?
        (async function () {
          const json_datos = await fetch(api).then((datos) => datos.json());
          setDatosApi(json_datos);
        }());
      }, [api]);

    return (
      <div className='row justify-content-center'>
        <div className='col-8'>
            <div className="card">
                <img src={image} className="card-img-top" alt={name}/>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{location}</p>
                    <p className="card-text">{origin}</p>
                    <p className="card-text">{gender}</p>
                    <p className="card-text">{species}</p>
                    <p className="card-text">{status}</p>
                    <p className="card-text">{type}</p>
                </div>
            </div>
        </div>
      </div>
    )
  }

export default CardDetallado;