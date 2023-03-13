import PropTypes from 'prop-types';
import React from 'react'
import BtnFiltro from './BotonFiltro/BtnFiltro';
import './Categorias.css'

const Genero = ({ setGenero, setNumeroPagina }) => {
    let generos = ["female", "male", "genderless", "unknown", ]
    return (
        <div className="my-accordion">
          <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Genero
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body d-flex flex-wrap gap-3">
                {generos.map((items, index) => (
                    <BtnFiltro task={setGenero} setNumeroPagina={setNumeroPagina} key={index} name="genero" index={index} items={items} />
                ))}
            </div>
          </div>
        </div>
    )
}
Genero.PropTypes = {
  setGenero: PropTypes.func.isRequired,
  setNumeroPagina: PropTypes.func.isRequired,
};
export default Genero