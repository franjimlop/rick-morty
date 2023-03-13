/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import React from 'react'
import './Filtros.css'

const BtnFiltro = ({name, index, items, task, setNumeroPagina }) => {
    return (
        <div>
            <div className="form-check">
                <input
                 onClick={() => {
                    setNumeroPagina(1);
                    task(items);
                 }}
                 className="form-check-input seleccionado" type="radio" name={name} id={`${name}-${index}`}/>
                <label className="boton-personalizado" htmlFor={`${name}-${index}`}>{items}</label>
            </div>
        </div>
    )
}
export default BtnFiltro