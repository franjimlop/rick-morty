import React, { useState, useEffect } from "react";
import Card from "../componentes/Card/Card";
import SeleccionarEpisodio from "../componentes/Filtros/Categorias/SeleccionarEpisodio";
import { useParams } from "react-router-dom"

const Lugares = () => {
    let {id} = useParams()==="lugares"?1:useParams();
    // if(id==="lugares") id=1;
    const [idhook, setID] = useState(id);
    if(idhook===undefined){
        setID(1)
    }
    const [episodio, setEpisodio] = useState({ name: "", type: "", dimension: "" });
    const [results, setResults] = useState([]);
    let api = `https://rickandmortyapi.com/api/location/${idhook}`;
    // console.log("parametro ",id ,"     tratado ",idhook);

    useEffect(() => {
        async function fetchData() {
            const datos = await fetch(api).then(res => res.json());
            console.log(datos);
            setEpisodio({
                name: datos.name || "Desconocido",
                type: datos.type || "Desconocido",
                dimension: datos.dimension || "Desconocido"

            });
            const aux = await Promise.all(
                datos.residents.map((aux2) => {
                    return fetch(aux2).then((res) => res.json());
                })
            );
            setResults(aux);
        }
        fetchData();
    }, [api]);

    return (
        <div className="container">
            <div>
                <h3 className="text-center mb-3">Escoger lugar</h3>
                <SeleccionarEpisodio setID={setID} name="Lugar " total={126} />
            </div>
            <div className="row">
                <h1 className="text-center mb-3">
                    Lugar: {episodio.name}
                </h1>
                <h5 className="text-center mb-3">
                    Dimensión: {episodio.dimension}
                </h5>
                <h6 className="text-center mb-5">
                    Tipo: {episodio.type}
                </h6>

            </div>
            <div>
                <h5 className="text-center">Personajes que habitan en la localización:</h5>
                <div className="row">
                    <Card  pagina="/lugares" results={results}></Card>
                </div>
            </div>
        </div>
    );
};
// SeleccionarEpisodio.propTypes = {
//     name: PropTypes.string.isRequired,
//     dimension: PropTypes.string.isRequired,
//     tipo: PropTypes.string.isRequired,
//     total: PropTypes.number.isRequired,
//     setID: PropTypes.func.isRequired
// };

export default Lugares;