import React from 'react';
import './Card.css';
import Personaje from './Personaje/Personaje';
import PropTypes from 'prop-types';

const Card = ({results}) => {
  let mostrar;
  if(results){
    mostrar = results.map((personaje)=>{
       return(
        <div key={personaje.id} className="col-3">
          <Personaje objeto={personaje} />
        </div>
       );
    })
  }else{
    mostrar = "no se ha obtenido resultados";
  }
  return (
    //Contenido del Card
    //4 Card por línea
    <>{mostrar}</>
  )
}

// Definimos los tipos de datos de las props
Card.propTypes = {
  results: PropTypes.object.isRequired,
};
// valor por defecto de la prop no es obligatorio con el required
export default Card;