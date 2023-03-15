import React, { useState, useEffect } from "react";
import Card from "../componentes/Card/Card";
import SeleccionarEpisodio from "./SeleccionarEpisodio";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom"
import './EpiLug.css';

const Episodios = () => {
    let {id} = useParams()==="episodios"?1:useParams()===null?1:useParams();
    const [idhook, setID] = useState(id);
    if(idhook===undefined){
        setID(1)
    }
    const [episodio, setEpisodio] = useState({name: "", air_date: ""});
    const [results, setResults] = useState([]);
    const api = `https://rickandmortyapi.com/api/episode/${idhook}`;
    // console.log("parametro ",id ,"     tratado ",idhook);

    useEffect(() => {
        async function fetchData() {
            const datos = await fetch(api).then(res => res.json());
            console.log(datos);
            setEpisodio({
              name: datos.name || "Desconocido",
              air_date: datos.air_date || "Desconocido"
            });
            const aux = await Promise.all(
                datos.characters.map((aux2) => {
                    return fetch(aux2).then((res) => res.json());
                })
            );
            setResults(aux);
        }
        fetchData();
    }, [api]);
    return (
        <div className="container letra-parteSup">
            <div>
                <h3 className="text-center mb-3">Episodio nº {idhook}</h3>
                <SeleccionarEpisodio setID={setID} name="Episodio " total={41} />
            </div>
            <div className="row">
                <h1 className="text-center mb-3">
                    Nombre del episodio: <span className="letra-rick">{episodio.name}</span>
                </h1>
                <h4 className="text-center mb-5">
                    Fecha de estreno: {episodio.air_date}
                </h4>
            </div>
            <div>
                <h5 className="text-center mb-3 letra-parteSup">Personajes que aparecen en el episodio:</h5>
                <div className="row">
                    <Card pagina="/episodios/" results={results}></Card>
                </div>
            </div>
        </div>
    );
};

SeleccionarEpisodio.propTypes = {
    name: PropTypes.string.isRequired,
    total: PropTypes.number.isRequired,
    setID: PropTypes.func.isRequired
};

export default Episodios;