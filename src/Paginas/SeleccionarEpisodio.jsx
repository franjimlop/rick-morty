import React from "react";
import PropTypes from "prop-types";
import './EpiLug.css';

const SeleccionarEpisodio = ({ total, name, setID }) => {
    return (
        <div className="input-group mb-3">
            <select onChange={e => setID(e.target.value)} className="form-select" id={name}>
                {[...Array(total).keys()].map((x) => {
                    return (
                        <option key={x} value={x + 1}>
                            {name} - {x + 1}
                        </option>
                    );
                })}


            </select>
        </div>
    )
};

SeleccionarEpisodio.propTypes = {
    total: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    setID: PropTypes.func.isRequired,
};


export default SeleccionarEpisodio;