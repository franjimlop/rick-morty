/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import React from 'react'

const BtnFiltro = ({name, index, items, task, setNumeroPagina }) => {
    return (
        <div>
            <style jsx>
                {`
                .seleccionado:checked + label {
                    background-color: #0b5ed7;
                    color: white;
                }

                    input[type="radio"] {
                        display: none;
                    }
                `}
            </style>
            <div className="form-check">
                <input
                 onClick={() => {
                    setNumeroPagina(1);
                    task(items);
                 }}
                 className="form-check-input seleccionado" type="radio" name={name} id={`${name}-${index}`}/>
                <label className="btn btn-outline-primary" htmlFor={`${name}-${index}`}>{items}</label>
            </div>
        </div>
    )
}
export default BtnFiltro