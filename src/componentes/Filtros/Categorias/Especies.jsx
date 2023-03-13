/* eslint-disable react/prop-types */
import React from 'react'
import BtnFiltro from '../BtnFiltro'
import './Categorias.css'

const Especies = ({ setEspecies, setNumeroPagina }) => {
    let especies = ["Human", "Alien", "Humanoid", "Poopybutthole", "Mythological", "Unknown", "Animal", "Disease",  "Robot", "Cronenberg",  "Planet"]
    return (
        <div className="my-accordion">
          <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Especies
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body d-flex flex-wrap gap-3">
                {especies.map((items, index) => (
                    <BtnFiltro task={setEspecies} setNumeroPagina={setNumeroPagina} key={index} name="especies" index={index} items={items} />
                ))}
            </div>
          </div>
        </div>
    )
}
export default Especies