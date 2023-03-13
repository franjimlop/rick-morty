import PropTypes from 'prop-types';
import React from 'react'
import Estado from '../Filtros/Categorias/Estado'
import Especies from '../Filtros/Categorias/Especies'
import Genero from '../Filtros/Categorias/Genero'
import './Filtros.css'

const Filtros = ({ setEstado, setNumeroPagina, setGenero, setEspecies }) => {
  let limpiarFiltros = () => {
    setEstado("");
    setNumeroPagina("");
    setGenero("");
    setEspecies("");
  }
  return (
    <div className="col-9 mx-auto">
      <div className="text-center fw-bold fs-4 mb-2">FILTROS</div>
      <div onClick={limpiarFiltros} className="text-center text-decoration-underline fs-6 mb-2 ponercursor">Quitar filtros</div>
      <div className="accordion" id="accordionExample">
        <Estado setEstado={setEstado} setNumeroPagina={setNumeroPagina} />
        <Especies setEspecies={setEspecies} setNumeroPagina={setNumeroPagina} />
        <Genero setGenero={setGenero} setNumeroPagina={setNumeroPagina} />
      </div>
    </div>
  )
}
Filtros.propTypes = {
  setEstado: PropTypes.func.isRequired,
  setNumeroPagina: PropTypes.func.isRequired,
  setGenero: PropTypes.func.isRequired,
  setEspecies: PropTypes.func.isRequired,
};
export default Filtros