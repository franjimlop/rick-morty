import PropTypes from 'prop-types';
import React from 'react'

const BtnFiltro = ({ name, index, items, task, setNumeroPagina }) => {
    return (
        <div>
            <div className="form-check">
                <input
                    onClick={() => {
                        setNumeroPagina(1);
                        task(items);
                    }}
                    className="form-check-input seleccionado" type="radio" name={name} id={`${name}-${index}`} />
                <label className="boton-personalizado" htmlFor={`${name}-${index}`}>{items}</label>
            </div>
        </div>
    )
}
BtnFiltro.propTypes = {
    name: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    items: PropTypes.func.isRequired,
    task: PropTypes.func.isRequired,
    setNumeroPagina: PropTypes.number.isRequired,
};
export default BtnFiltro