import React from 'react';
import './Paginacion.css';
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';

const Paginacion = ({ info, numeroPagina, setNumeroPagina }) => {
  return (
    <ReactPaginate
      className='pagination justify-content-center gap-3'
      previousLabel='Previa'
      nextLabel='Siguiente'
      nextClassName='boton-personalizado'
      previousClassName='boton-personalizado'
      pageClassName='page-item'
      pageLinkClassName='boton-personalizado'
      forcePage={numeroPagina === 1 ? 0 : numeroPagina - 1}
      onPageChange={(datos) => { setNumeroPagina(datos.selected + 1) }}
      pageCount={info?.pages} />
  )
};

Paginacion.propTypes = {
  info: PropTypes.object.isRequired,
  numeroPagina: PropTypes.number.isRequired,
  setNumeroPagina: PropTypes.func.isRequired,
};

export default Paginacion