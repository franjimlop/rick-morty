import React from 'react';
import './Status.css'
import PropTypes from 'prop-types';

const Status = ({estado}) => {
  let mostrar;
  console.log("status ->" ,estado);
  if(estado){
       return(
              <><p className={`${estado==='Dead' ? 'muerto': estado==='Alive' ? 'vivo':'desconocido'} estado centrar`}>{estado}</p></>
        );
  }else{
    mostrar = "ERROR!";
  }
  return (
    //Contenido del Card
    //4 Card por línea
    <>{mostrar}</>
  )
}

// Definimos los tipos de datos de las props
Status.propTypes = {
  estado: PropTypes.string.isRequired,
};
// valor por defecto de la prop no es obligatorio con el required
export default Status;