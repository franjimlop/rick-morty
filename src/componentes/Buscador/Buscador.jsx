import React from 'react';
import './Buscador.css';
import PropTypes from 'prop-types';

const Buscador = ({setBuscador, setNumeroPagina}) => {
  return (
    <form className='mb-5'>
      <input onChange={e=>{
        setNumeroPagina(1);
        setBuscador(e.target.value);
      }} 
      placeholder='Rick' type="text"/>
      <button onClick={e=>{e.preventDefault();}} className='boton-personalizado-buscador fs-5'>Buscar</button>
    </form>
  )
};

Buscador.propTypes = {
  setBuscador: PropTypes.func.isRequired,
  setNumeroPagina: PropTypes.func.isRequired,
};

export default Buscador