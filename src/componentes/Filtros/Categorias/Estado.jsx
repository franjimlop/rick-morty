import PropTypes from 'prop-types';
import React from 'react'
import BtnFiltro from './BotonFiltro/BtnFiltro'
import './Categorias.css'

const Estado = ({ setEstado, setNumeroPagina }) => {
    let estado = ["Alive", "Dead", "Unknown"]
    return (
        <div className="my-accordion">
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Estado
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body d-flex flex-wrap gap-3">
                {estado.map((items, index) => (
                    <BtnFiltro task={setEstado} setNumeroPagina={setNumeroPagina} key={index} name="estado" index={index} items={items} />
                ))}
            </div>
          </div>
        </div>
    )
}
Estado.PropTypes = {
  setEspecies: PropTypes.func.isRequired,
  setNumeroPagina: PropTypes.func.isRequired,
};
export default Estado